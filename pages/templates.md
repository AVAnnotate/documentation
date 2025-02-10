---
title: Spreadsheet Templates
layout: home
parent: Get Started
nav_order: 2
---
# Spreadsheet Templates and Examples

This guide provides templates for uploading project information to AVAnnotate in bulk via spreadsheets. AVAnnotate will take .CSV, .TSV, Excel, and .VTT files.

**1. Project Level:** Include one Event and one Tag spreadsheet. 
* [Event Spreadsheet Template](https://docs.google.com/spreadsheets/d/1noYKA8DFaHkSLq-MXSPwCccY3YFeyR52/edit?usp=drive_link&ouid=112492510360958259862&rtpof=true&sd=true): Each row in the event spreadsheet is a unique “Event” in the project. Note: Events may include multiple AV files. See below.
* [Tag Spreadsheet Template](https://docs.google.com/spreadsheets/d/1LOuw5aiF4v00Ivx3S-ozPcGHzeZf3ovz/edit?usp=sharing&ouid=112492510360958259862&rtpof=true&sd=true): Each row in the tag spreadsheet is a unique tag in the project.
  
**2. Event Level:** [Annotation Spreadsheet Template](https://docs.google.com/spreadsheets/d/12yn6zxviUpNLYESlGfUyWTc83wmFfsOM/edit?usp=drive_link&ouid=112492510360958259862&rtpof=true&sd=true) (or "sets") correspond to each AV file. AV files may have multiple corresponding annotation sets. Events may have multiple corresponding AV files with multiple annotation sets.  
* Annotation Spreadsheet: Each row in an annotation spreadsheet is a single annotation corresponding to a timestamp on the AV file.

{: .warning }
> **Important Note:** All cells must be filled out. If a value is optional, that column can be blank (currently the one exception is the `tag` within the annotation speadsheet.   

  
---
## [Event Spreadsheet Template](https://docs.google.com/spreadsheets/d/1noYKA8DFaHkSLq-MXSPwCccY3YFeyR52/edit?usp=drive_link&ouid=112492510360958259862&rtpof=true&sd=true)
This template organizes the events in a project and associates the AV files with that event. An “event” might be an interview, an oral history, a performance, a speech, a reading, or a conference that takes place over multiple days. This list is not exhaustive. Each row in the Event template corresponds to one recording. If an event spans multiple recordings, additional recordings may be added to the event after the initial upload.

**Spreadsheet Header** <br>
**Event Label:** Descriptive title of the event. <br>
**Event Item Type:** “Audio” or “Video” <br>
**AV File Label:** Name for the file; create a name even if there is not an AV URL <br>
**AV File URL:**  (optional) See [AV File Formats and Support](https://avannotate.github.io/documentation/pages/av/) for more information. <br>
**Event Description:**  (optional) <br>
**Event Citation:**  (optional) <br>

---
## [Tag Spreadsheet Template](https://docs.google.com/spreadsheets/d/1LOuw5aiF4v00Ivx3S-ozPcGHzeZf3ovz/edit?usp=sharing&ouid=112492510360958259862&rtpof=true&sd=true)
This template contains tags and tag categories used in a project. Tags are labels used in the interface to index, organize, and discover topics in the annotations. Categories can be used to organize the tags into groups. For instance, tags might contain the names of speakers featured on the recording(s), which could be organized under the category “speaker.” Tags might also include "Transcript" and "Notes" to distinguish annotation types. Tags can also be used to organize concepts, themes, or features that appear across several recordings (e.g., “Shouting” as a tag and “Tone of Voice” as a category). Consistency with the spelling and capitalization of tags is imperative. Different spelling or capitalizations = different tags. 

**Note:** 
A tag can belong to multiple categories. For example, the tag “Zora Neale Hurston” may be found in the categories “Speaker” and “Topic” (depending on the event context) or may not be categorized at all. 
A single tag can contain multiple words, accents, and commas (e.g., "Gloria Anzaldúa, Texas, 1942-2004"), but should adhere to "Safe URL" guidelines (see [Tags](https://avannotate.github.io/documentation/pages/tags/)).

**Spreadsheet Header** <br>
**Tag:** Each unique tag that occurs across the project. Tags are only repeated if they belong to multiple categories.<br>
**Category:** Each unique category that occurs across the project. Categories may not repeat.<br>

---
## [Annotation Spreadsheet Template](https://docs.google.com/spreadsheets/d/12yn6zxviUpNLYESlGfUyWTc83wmFfsOM/edit?usp=drive_link&ouid=112492510360958259862&rtpof=true&sd=true)
This template includes project annotations. Annotations correspond to a given start and end point in the audio or video artifact, and contain information about the media. The nature of this information is entirely up to the user. For example, annotations might include a transcript; captions; information about formal features of the media, like shot sequence, volume, or lighting; historical or cultural context; environmental noises such as fans or car horns; or conceptual notes or themes. 
Annotations are linked to an event as part of the upload process. 

**Note:** 
Annotations may overlap in time and will appear in sequence in the interface according to the earliest start time.

**Spreadsheet Header** <br>
**Start Time:**  marks the point in time in minutes and seconds that is the target of an annotation. <br>
**End Time:**  may be the same as start time for a point in time or may correspond to the end of a range of time that is the target of the annotation. <br>
**Annotation:** This is the body of the annotation (e.g., transcription, notes on environmental sounds, formal features, etc.) Basic HTML tags are allowed in the body of annotations including: `b`
`em`
`i`
`italic`
`strong`
`br`
`blockquote`
`p`
`a`<br>
**Tags:** (optional) are pipe | separated; if a tag is unique across the project, include just the tag; if a tag belongs to multiple categories, the category must also be included with a colon (e.g., “Speakers: Allende Gossens, Salvador, 1908-1973 | Presidents: Allende Gossens, Salvador, 1908-1973 | Frei Montalva, Eduardo, 1911-1982 | Pinochet Ugarte, Augusto, 1915-2006”).<br> 

{: .warning }
> **Important Note:** In the current version, tags are optional in the spreadsheeet upload but the header "tag" is required. Oterwise, the column can remain blank. 

# Examples
Sample Audio Spreadsheets - 
- [Leslie Flint's Spiritualism](https://saamturner.github.io/wildedoyleflint/)  <br> 
These event, tag, and annotation spreadsheets represent two events included in an AVAnnotate project about Leslie Flint's direct voice mediumship. [Flint example spreadsheets](https://drive.google.com/drive/u/0/folders/1CzTX-WOQbCxYW3YefjOs4bThszHDr-oU)
- [Zora Neale Hurston](https://tanyaclement.github.io/znh-1939/) <br>
These event, tag, and annotation spreadsheets represent a multi-event project including three recordings created by Zora Neale Hurston. [Hurston example spreadsheets](https://utexas.app.box.com/s/ce1cmsvs1ygs6jv1jr2wrfxryc7ig87q)

Sample Video Spreadsheets - 
-[Camille (1921)](https://avannotate.github.io/camille/events/camille-1921/)  <br>
These event, tag, and annotation spreadsheets represent a single video event about the 1921 film adaptation of "La Dame aux Camélias" (1848) by Alexandre Dumas, fils. [Camille example spreasheets](https://docs.google.com/spreadsheets/d/11oOHhd-wPZb7Kr3u5zWrX2ZhTQRn4EOPLuAOxhhKiyc/edit?gid=1408208239#gid=1408208239) 


