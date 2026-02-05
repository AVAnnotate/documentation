---
title: Events
layout: home
parent: Data Manager
grand_parent: Projects
nav_order: 2
---
# Events

Events are a central conceptual element of an AVAnnotate project and may comprise one or more [AV files](https://avannotate.github.io/documentation/pages/av/), which may be associated with [time-stamped annotations](https://avannotate.github.io/documentation/pages/annotations/). Events might include a conference with multiple panels and speakers, or, more typically, a single speaker’s presentation. In another example, an Event could include multiple files, each a different recording of a poet reading the same poem. In each case, the project creator determines the scope and definition of their “Events.”

AVAnnotate will create or ingest a [IIIF manifest](https://iiif.io/guides/using_iiif_resources/){:target="_blank" rel="noopener"} for each event. Event pages can be [auto-generated](https://avannotate.github.io/documentation/pages/auto/) or [customized](https://avannotate.github.io/documentation/pages/custom/) and created by the user.

## How to Add New Events to Projects

### Import Events Spreadsheet
<figure>
  <video width="800" height="400" controls
         aria-label="This video demonstrates how to upload an event to an AVAnnotate project via the Event Template. After selecting 'Add,' import a file on your drive. AVAnnotate will prompt you to calibrate the file's columns, which requires selecting at least two columns to confirm the configuration. Press 'import,' then press 'save.'"
         title="Adding event to AVAnnotate project">
    <source src="https://archive.org/download/import_event_edited_1/import_event_edited_1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>This video demonstrates how to upload, configure, and save an event in AVAnnotate.</figcaption>
</figure>

{: .note }
Annotation sets can be added to an Event after it has been added and saved. 

### Create a IIIF Manifest
![IIIF Image 1](../../assets/createmanifestimage.png) 

In the `Add Event` page, select 'Create manifest' and input the following information about the new event: 
- `Label` A descriptive title of the event
- `Item Type` Audio or video
- `AV label` A descriptive title of the audio or video file
- `URL` or `Offline` See [AV Files support and formats](https://avannotate.github.io/documentation/pages/av/) for more information
- `Duration` Duration of AV file in hh:mm:ss
- `Description` (optional)
- `Citation` (optional)

### Import a IIIF Manifest

1. Select the IIIF logo in a participating DAMS (digital asset management system). 
![IIIF Image 1](../../assets/eventimage-iiif2.png) 
<br>
2. Copy the URL to the IIIF manifest.  
![IIIF Image 2](../../assets/eventimage-iiif1.png) 
<br>
3. Select "Import Manifest" from the `Add Event` page, paste the URL, and select "Analyze."
![IIIF Image 1](../../assets/iiifimage2.png) 
<br>
4.  If the manifest is properly formed, a "Success!" message will appear. Save.
![IIIF Image 1](../../assets/iiifimage3.png) 
<br>

{: .warning }
> The AVAnnotate validator checks that the IIIF manifest structure is valid, but does not check links. Broken or invalid links (see [Valid IIIF AV Types](https://avannotate.github.io/documentation/pages/av/)] will not render in an AVAnnotate project. 

## Edit Events

Edit Events by clicking into an event on the `Events` page of the  `Data Manager`, and then selecting `Edit Event` under the three-dot menu. An event can also be deleted from this menu.
![Image 2](../../assets/eventimage2.png)

The Edit Event page can also be accessed by selecting the three-dot next to each Event on the `Events` page of the `Data Manager` and selecting "Event Settings."
![Image 5](../../assets/eventimage5.png) 

On the Edit Event page, modify information about the Event media (Event Label, AV Type, AV Label, etc.) and add, edit, or delete [annotation sets](https://avannotate.github.io/documentation/pages/sets/). 
![Image 3](../../assets/eventimage3.png) 
![Image 4](../../assets/eventimage4.png) 

On the Edit Event page, additional AV items can be added to an Event. Under the `Audiovisual item(s)` section, select `+ Add`. Add the Event's AV Type, Label, and File URL. If the File URL is correct, the AV item's duration will automatically populate.
![Image 6](../../assets/eventimage6.png) 
The AV item can be deleted and its duration manually changed by selecting the three-dot menu next to the AV item, then choosing the desired action.
![Image 7](../../assets/eventimage7.png)

If adding AV items for an [offline project](https://avannotate.github.io/documentation/pages/offline/), toggle the File type to `Offline`. Then create a path to your offline AV item by renaming the AV item URL with a forward slash, the "media" directory name, another forward slash, and the AV file name.
![Image 8](../../assets/eventimage8.png)

If an Event has multiple Annotation Sets associated with it, the Annotation Set producing the Event's Captions can be changed. Under the `Annotation Sets` section, select the three-dot menu next to the desired Annotation Set and select `Edit`. In the Edit Annotation Set menu, toggle the "Use for Captions" on or off to use for captions. If there is only one Annotation Set for the Event, the Default Annotation Set will be used for the Captions.
![Image 9](../../assets/eventimage9.png)
![Image 10](../../assets/eventimage10.png)
