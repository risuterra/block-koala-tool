# block-koala-tool
A tool for importing/exporting custom Block Koala levels to/from [UFO 50](https://store.steampowered.com/app/1147860/UFO_50/).

### Accessing Saved Levels
1. Select a UFO 50 save file to upload.
   - Windows location: `%LocalAppData%\ufo50\save#.ufo`
   - Steam Deck location: `~/.local/share/Steam/steamapps/compatdata/1147860/pfx/drive_c/users/steamuser/AppData/Local/ufo50/save#.ufo`
2. If a valid UFO 50 save file is uploaded, it will automatically fill in the level slots with any pre-existing levels.
   - If a level slot is greyed out, there is no level data in that slot.

### Getting Saved Level Codes
1. Once you have uploaded your save file, you may click on a level slot that is not greyed out.
2. The level will load, including the level code and a preview of the level below it.
3. Click the orange "COPY LEVEL CODE" button to automatically copy the loaded level code to your clipboard.
4. Share the code with friends however you like.

### Clearing a level slot
1. Once you have uploaded your save file, you may click on a level slot that is not greyed out.
   - Alternatively, select the dropdown next to "TARGET SLOT" and select a level slot.
2. Press the red "CLEAR SLOT" button.
3. The targeted slot should then be greyed out and have its level data removed.

### Adding a level to a slot
1. Once you have uploaded your save file, you may enter a level code into the code entry box.
   - If a valid code is entered, it will automatically be loaded into the preview below it.
   - Invalid codes may produce an error alert explaining what is wrong with the code.
2. Select the dropdown next to "TARGET SLOT" and pick a slot that you want the loaded level code to be saved to.
3. Press  the blue "SAVE TO SLOT" button.
4. The targeted slot should then have have its level data added or overwritten.

### Downloading revised level slots
1. Once you have uploaded your save file, and modified save slots to your liking, you may download the revised level slots as a new `.ufo` save file.
2. Select the green "DOWNLOAD UPDATED SAVE FILE" button near the bottom of the page.
3. A `.ufo` file will save to your computer. It will try to name itself as the same file slot as the original save file uploaded, otherwise it will default to `save1.ufo`.
4. Copy the save file to your save folder for UFO 50 and replace the old save file.
   - If this is spooky for you to do, rename the original `save#.ufo` file that you uploaded to something else first to keep it as a backup.
5. Remember, all save files must be exactly named `save1.ufo`, `save2.ufo`, or `save3.ufo`.
   - If your file seems named correctly but is not showing up in game, enable viewing of file extensions on windows for your folder (look this up if you don't know how), and verify that the file didn't get saved as `save#.ufo.ufo` on accident.

### Additional notes
1. **Does this mess with my original save file?**
- Your save file is not automatically modified simply by using the web tool. You must download a new save file with the modified Block Koala level data and replace your old save file in the original save file directory.
- Simply downloading an updated save file will *not* automatically delete/replace your old save file either. The old save file must be replaced with the new one, and must have a filename of `save1.ufo`, `save2.ufo`, or `save3.ufo` to be recognized by UFO 50 properly.
2. **Will this corrupt my save file?**
- The save files that get downloaded to your computer have been thoroughly tested to load properly when replacing the old save file data, however, if you still have concerns, please backup your old save file before replacing it with the new file.
3. **Can this tool be used to edit other save data for UFO 50?**
- If you want to reverse-engineer the code to find out what I'm doing to modify the save data, that's entirely up to you. I am not responsible for anything you do with it if you choose to go digging. Just know that if you choose to modify your save file to cheat times, golds, cherries, items, stats, etc... then I personally think you're a bit of a loser. My advice is to enjoy the game how it was meant to be played and not cheat your way through the experience.
4. **I have additional questions about save data, UFO 50, etc...**
- Join the [UFO 50 Discord Server](https://discord.gg/krx76g7). If it is a general question about the game, ask in `#general` about it. For questions about this web app, feel free to ping me `@loverisu` in the server for help.