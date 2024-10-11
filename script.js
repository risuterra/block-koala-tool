const ign = {
    "p": "player",
    "a": "tile_a",
    "b": "tile_b",
    "c": "tile_c",
    "0": "null",
    "1": "red_1",
    "2": "red_2",
    "3": "red_3",
    "4": "red_4",
    "5": "block_5",
    "6": "black_1",
    "7": "black_2",
    "8": "black_3",
    "9": "black_4",
    "d": "blue_1",
    "e": "blue_2",
    "f": "blue_3",
    "g": "blue_4",
    "l": "rocks",
    "h": "up",
    "i": "down",
    "j": "left",
    "k": "right",
    "m": "door",
    "n": "key",
    "o": "clone",
    "q": "star_space",
    "r": "star_block"
}
let lls = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
let jsd;
let fileSlot = 1;

function elb(id) {
    const button = document.getElementById(`b${id}`);
    if (button) {
        button.disabled = false;
        button.style.cursor = 'pointer';
        button.addEventListener('click', function () {
            sel(id);
        });
    }
}

document.getElementById('cpb').addEventListener('click', function () {
    let textArea = document.getElementById("lvi");
    console.log(textArea.value);
    textArea.focus();
    textArea.select();
    if (navigator.clipboard)
        return navigator.clipboard.writeText(textArea.value);
    document.execCommand('copy');
});

function sel(id) {
    const index = id - 51;
    targetLevel = lls[index];
    document.getElementById('svs').value = id;
    document.getElementById('lvi').value = targetLevel.flat().join('');
    ldlv(targetLevel);
}
function ldlv(lvd) {
    const gridContainer = document.getElementById('gc');
    gridContainer.innerHTML = '';

    lvd.forEach(row => {
        row.forEach(value => {
            const tile = document.createElement('div');
            tile.className = 'tl';
            tile.innerHTML = `<img class="${value.toLowerCase()}" src="assets/tile/${ign[value.toLowerCase()]}.png"/>`;
            gridContainer.appendChild(tile);
        });
    });
}

function dab() {
    lls = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    const buttons = document.querySelectorAll('.lvc button');
    buttons.forEach(button => {
        button.disabled = true;
        button.style.cursor = 'not-allowed';
    });
}

function cl(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) > 0) {
            output += input.charAt(i);
        }
    }
    return output;
}

function sta(str) {
    if (str.length !== 192)
        throw new Error("Input string must be exactly 192 characters long.");
    let r = [];
    for (let i = 0; i < 12; i++) {
        const row = str.slice(i * 16, (i + 1) * 16).split('');
        r.push(row);
    }
    return r;
}
document.getElementById('lvi').addEventListener('input', function () {
    let input = document.getElementById('lvi').value.trim().toUpperCase();
    let v = vin(input);
    if (v == "Valid") {
        document.getElementById('lvi').value = input;
        const targetLevel = sta(input);
        ldlv(targetLevel);
    }
});
document.getElementById('dl').addEventListener('click', function () {
    if (!jsd) return alert("Must load a valid UFO save file first.");
    for (let i = 0; i < 8; i++) {
        if (jsd[`game18_customLevel${i+51}`])
            delete jsd[`game18_customLevel${i+51}`];
        const lvd = lls[i] ? lls[i].flat().join('') : '';
        if (lvd.length > 0)
            jsd[`game18_customLevel${i+51}`] = lvd;
    }
    let pfz = btoa(JSON.stringify(jsd)) + '\u0000';
    const element = document.createElement("a");
    const file = new Blob([pfz], {
        type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = `save${fileSlot}.ufo`;
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
});
function vin(input) {
    if (input.length !== 192)
        return "Not long enough.";
    if (!/^[A-R0-9]+$/.test(input))
        return "Contains invalid characters.";
    if ((input.match(/P/g) || []).length != 1)
        return "Should only have 1 player character.";
    const grid = sta(input);
    for (let i = 0; i < 12; i++)
        if (grid[i][15] === 'B' || grid[i][15] === 'C' || grid[i][14] === 'C')
            return "Invalid 2x2 or 3x3 tile placement.";
    for (let i = 0; i < 16; i++)
        if (grid[11][i] === 'B' || grid[11][i] === 'C' || grid[10][i] === 'C')
            return "Invalid 2x2 or 3x3 tile placement.";
    for (let row = 0; row < 11; row++)
        for (let col = 0; col < 15; col++)
            if (grid[row][col] === 'B')
                if (grid[row + 1][col] !== '0' || grid[row][col + 1] !== '0' || grid[row + 1][col + 1] !== '0')
                    return "Tiles should not overlap 2x2 tiles.";
    for (let row = 0; row < 10; row++)
        for (let col = 0; col < 14; col++)
            if (grid[row][col] === 'C')
                for (let i = 0; i < 3; i++)
                    for (let j = 0; j < 3; j++)
                        if (grid[row + i][col + j] !== '0' && !(i === 0 && j === 0))
                            return "Tiles should not overlap 3x3 tiles.";
    return "Valid";
}
document.getElementById('sb').addEventListener('click', function () {
    const input = document.getElementById('lvi').value.trim().toUpperCase();
    if (vin(input) == "Valid") {
        const slot = document.getElementById('svs').value;
        lls[slot - 51] = sta(input);
        elb(slot);
    } else {
        alert('Invalid input. Cannot save to slot.');
    }
});
document.getElementById('clb').addEventListener('click', function () {
    const slot = document.getElementById('svs').value;
    lls[slot - 51] = [];
    const button = document.getElementById(`b${slot}`);
    if (button) {
        button.disabled = true;
        button.style.cursor = 'not-allowed';
    }
});
document.getElementById('fi').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file || !file.name.endsWith('.ufo')) {
        if (document.getElementById("fn").innerText != 'Save Uploaded') document.getElementById("fn").innerText = `Invalid File`;
        else alert("Rejecting uploaded file. Must be a .ufo file.");
        return;
    }
    switch (file.name) {
        case 'save2.ufo':
            fileSlot = 2;break;
        case 'save3.ufo':
            fileSlot = 3;
            break;
        default:
            fileSlot = 1;
            break;
    }

    document.getElementById("fn").innerText = `Save Uploaded`;
    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            let fct = e.target.result;
            fct = cl(fct);
            const dcd = atob(fct);
            dab()
            jsd = JSON.parse(dcd);
            for (let i = 51; i <= 60; i++) {
                if (jsd[`game18_customLevel${i}`] && jsd[`game18_customLevel${i}`].length == 192) {
                    lls[i - 51] = sta(jsd[`game18_customLevel${i}`]);
                    elb(i);
                }
            }
        } catch (error) {
            alert("Invalid data: Failed to decode or parse the UFO file.");
            document.getElementById("fn").innerText = `Invalid File`;
            console.error(error);
        }
    };
    reader.readAsText(file);
});