---
title: Events
layout: home
parent: Data Manager
grand_parent: Projects
nav_order: 2
---
# Events

Events are a central conceptual element of a project and could comprise a single or multiple AV files, which may be associated with time-stamped annotations. Events might include a conference composed of different panels and speakers or, more typically, a single speaker’s presentation. In another example, an Event could include multiple files, each a different recording of a poet reading the same poem. In each case, the project creator determines the scope and definition of their “Events.”

AVAnnotate will create or ingest a [IIIF manifest](https://iiif.io/guides/using_iiif_resources/){:target="_blank" rel="noopener"} for each event. Event pages can be [auto-generated](https://avannotate.github.io/documentation/pages/auto/) or [customized](https://avannotate.github.io/documentation/pages/custom/) and created by the user.

### Add new events by selecting `+ Add` on the Event dashboard
<br>
<video width="640" height="360" controls aria-label="This video demonstrates how to upload an event to an AVAnnotate project via the Event Template. After selecting 'Add,' import a file on your drive. AVAnnotate will prompt you to calibrate the files columns, which requires selecting at least two columns to confirm the configuration. Press 'import,' then press 'save.'" title="Adding event to AVAnnotate projec">
  <source src="assets/import_event_edited (1).mp4" type="video/mp4">
   <figcaption>This video demonstrates how to upload, configure, and save an event in AVAnnotate.</figcaption>
</video>

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

1. Select the IIIF logo in a participating DAMS (digital asset management system). 
<br>
<br>
![IIIF Image 1](../../assets/eventimage-iiif2.png) 
<br>
2. Copy the URL to the IIIF manifest.  
<br>
<br>
![IIIF Image 2](../../assets/eventimage-iiif1.png) 
<br>
3. Select "Import Manifest," paste the URL, and select "Analyze."
<br>
<br>
![IIIF Image 1](../../assets/iiifimage2.png) 
<br>
4.  If the manifest is properly formed, a "Success!" message will appear. Save.
<br>
<br>
![IIIF Image 1](../../assets/iiifimage3.png) 
<br>

{: .warning }
> **Important Note:** The AVAnnotate validator checks that the IIIF manifest structure is valid but does not check links. Broken or invalid links (see [Valid IIIF AV Types](https://avannotate.github.io/documentation/pages/av/)] will not render in an AVAnnotate project. 

### Edit events by clicking into an event on the dashboard, and then selecting `Edit` 
<br>
![Image 2](../../assets/eventimage2.png)

On the edit page, modify information about the event media (Label, Item Type, AV Label, etc.) and add, edit, or delete [annotation sets](https://avannotate.github.io/documentation/pages/sets/). 
<br>
![Image 3](../../assets/eventimage3.png) 
![Image 4](../../assets/eventimage4.png) 
