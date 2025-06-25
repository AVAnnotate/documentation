---
title: Creating Transcripts
layout: home
parent: Resources
nav_order: 1
---
# Creating Transcripts

1. A [Google Colab Notebook](https://github.com/tanyaclement/audio-class/blob/main/transcribe_audio_with_whisper.ipynb) for creating transcripts using Whisper AI. 
    1. Select "Open in Colab" and navigate an open Google Colab window.
    2. In the notebook, according to the directions, insert information about the file to be transcribed and the result file. (E.g., include the URL to the file or YouTube Video to be transcribed, select file type (.tsv, etc.), and select "Download."). For AVAnnotate projects, .tsv or .vtt will work.
    3. In the Colab menu, select "Runtime" and "Run All" or run each cell independently.
    4. If "Download" has been selected, a dialog window will open prompting the user to download the transcript file when the transcription has been completed.
2. Steps for merging cells in Google Spreadsheets if a speaker's comments comprises multiple cells: 
    1. Sa new cell in Column D next to the "first cell" in Column C of a speaker's comments.
    2. Type =concatenate(A1," ",A2," ",A3) replacing A1, A2, and A3 with your desired cell numbers separated by a space " "
    3. Copy the concatenated data in Column D.
    4. To paste the concatenated data in Column C, select the "first cell", right-click and choose "Paste Special" and "Value Only."
    5. Update the timestamps, keeping the Start time associated with the "first cell" and the End time associated with the last cell of the concatenated cells. Keep the extra rows until you have confirmed the speaker names.
    6. Create a new Column E called Tags. Include the speaker name and a transcript tag separated by a pipe (Tanya Clement &#124; Transcript).
    7. Listen to the recording in areas where you are not sure who is speaking. Update the speaker names.
    8. Delete the extra rows, keeping the updated "first cell" of the concatenated rows.
    9. Delete the extra Column D. "Tags" will become the new Column D. 


