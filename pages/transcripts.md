Other resources for creating transcripts.

 A Google Colab Notebook for creating transcripts using Whisper AI. 
Select the "Open in Colab" button which will go the user's Google Drive and open a Colab window.
In the notebook, insert information about the file to be transcribed and the result file. (E.g., put the URL to the file or YouTube Video to be transcribed, select file type (.tsv, etc.), and "Download.")
In the Colab menu, select "Runtime" and "Run All."
 If "Download" has been selected, a dialog window will open prompting the user to download the transcript file when the transcription has been completed, .
How to merge cells in Google Spreadsheets if a speaker's comments comprises multiple cells: 
Select a new cell in Column D next to the "first cell" in Column C of a speaker's comments.
Type =concatenate(A1," ",A2," ",A3) replacing A1, A2, and A3 with your desired cell numbers separated by a space " "
Copy the concatenated data in Column D.
To paste the concatenated data in Column C, select the "first cell", right-click and choose "Paste Special" and "Value Only."
Update the timestamps, keeping the Start time associated with the "first cell" and the End time associated with the last cell of the concatenated cells. Keep the extra rows until you have confirmed the speaker names.
Create a new Column E called Tags. Include the speaker name and a transcript tag separated by a pipe (Tanya Clement | Transcript)
Listen to the recording in areas where you are not sure who is speaking. Update the speaker names.
Delete the extra rows, keeping the updated "first cell" of the concatenated rows.
Delete the extra Column D. "Tags" will become the new Column D. 


