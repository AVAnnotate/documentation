---
title: Events
layout: home
parent: Projects
nav_order: 2
---
# Events
An “Event” in AVAnnotate can comprise single or multiple AV files and single or multiple sets of annotations. AVAnnotate will create or ingest a [IIIF manifest](https://iiif.io/guides/using_iiif_resources/) for each event. Event pages can be [auto-generated](https://avannotate.github.io/documentation/pages/auto/) or [created by the user](https://avannotate.github.io/documentation/pages/custom/).

### Add new events by selecting `+ Add` on the Event dashboard
<br>
![Image 1](../../assets/eventimage1.png)
<br>

### 'Create Manifest' by inputting information about the new event, including: 
- `Label` A descriptive title of the event
- `Item Type` Audio or video
- `AV label` A descriptive title of the audio or video file
- `URL` or `Offline` See [AV Files support and formats](https://avannotate.github.io/documentation/pages/av/) for more information
- `Duration` Duration of AV file in hh:mm:ss
- `Description` (optional)
- `Citation` (optional)

{: .note }
> Annotation sets can be added to an event after the event has been added and saved. 

### 'Import Manifest' by referencing a IIIF manifest

Include a link from a IIIF manifest. 

{: .warning }
> **Important Note:** The AVAnnotate validator checks that the IIIF manifest structure is valid but does not check links. Broken or invalid links (see [Valid IIIF AV Types](https://avannotate.github.io/documentation/pages/av/)] will not render in an AVAnnotate project. 

### Edit events by clicking into an event on the dashboard, and then selecting `Edit` 
<br>
![Image 2](../../assets/eventimage2.png)

On the edit page, modify information about the event media (Label, Item Type, AV Label, etc.) and add annotation sets. 
<br>
![Image 3](../../assets/eventimage3.png) 
![Image 4](../../assets/eventimage4.png) 
