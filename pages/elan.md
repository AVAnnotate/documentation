---
title: ELAN
layout: home
parent: Bulk Uploading
ancester: Projects
nav_order: 4
---
# ELAN for AVAnnotate Annotations

ELAN is free, open-source software primarily used to create time-aligned annotations, transcriptions, and coding of audio and video recordings, developed for the Institute of Psycholinguistics. Download the application here: [https://archive.mpi.nl/tla/elan](https://archive.mpi.nl/tla/elan){:target="_blank" rel="noopener"}.

## Using ELAN
<b>Step 1: Open Media File <b/>
Once the application is downloaded, open ELAN and click [File > New] to open the "New" window.

In the "New" window, select the option according to where the media file is stored:
1. Select `Add Media File` if the file is stored locally on the computer's hard drive.
2. Select `Add Remote File` if the file is stored somewhere else and there is a URL for the file.

<b>Step 2: Create an Annotation Tier<b/>
In the navigation bar, click [Tier > New Tier] to create an annotation tier.

Tiers can be cataloged according to participant, annotator, and parent tiers. This can help with the organization of output when using multi-layered annotations.

{: .note }
> Optional: Delete the default tier prior to continuing, so the only tiers are the ones where annotations can be added.

<b>Step 3: Segmentation Mode<b/>
From the navigation bar, click [Options > Segmentation Mode].

A window will open that will allow the customization of the segmenting tool. If working with adjacent annotations, the `One keystroke per annotation` option is the most efficient, as it will not be necessary to mark the beginning and end of each annotation window.

The `Enter` key is used to delineate annotation boundaries. Select the `play` button above the annotation tier to play your file from the beginning (or scroll to the right and click the location on the media file to play from that location).

Hit the `Enter` key to mark the beginning of the annotation stream. After the first hit, each subsequent keystroke will mark the end of the current annotation section and the beginning of the adjacent annotation segment. Continue this throughout the file as necessary for the project/media file.

Annotation segments can be adjusted manually by dragging the boundaries along the timeline.

<b>Step 4: Transcription Mode<b/>
From the navigation, click [Option > Transcription Mode]. This will open a window that prompts the selection of the tier type used for transcription. This can be left as the "default."

Once `Apply` is selected, the annotation segments of the media file can be directly annotated/transcribed individually and independently.

<b>Step 5: Save Your Annotations<b/>
Once done with transcriptions, use the navigation to return to annotation mode by selecting [Option > Annotation Mode].

From here, use the navigation to click [File > Export As] and select the desired output. The recommended file format is a `tab-delimited text` file, as this can be easily transferred to the AVAnnotate Annotation Template. Files can be exported according to tier names, types, participants, annotators, etc.

<b>Step 6: Transfer to AVAnnotate Annotation Template<b/>
ELAN will produce a file including the tier, duration of each annotation segment, start and end times in hr:min:sec and decimal formats, and transcriptions/annotations.

Copy and paste these values directly into the AVAnnotate spreadsheet templates under the appropriate columns. Add `tags` manually as necessary.

Download this updated spreadsheet as a .xlsx file and upload it directly to the desired AVAnnotate `event`.
