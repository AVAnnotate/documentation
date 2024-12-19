---
title: Spreadsheet Templates
layout: home
parent: Quick Start
nav_order: 2
---

[Spreadsheet Examples](#Examples)

# Log into the [AVAnnotate application](https://avannotate.netlify.app) with your GitHub credentials
This guide provides templates for uploading projects in bulk (as opposed to adding events, annotations, and tags manually within the application). Project-level templates should be uploaded first (see below for information about project-level vs. event-level components of AVAnnotate projects). AVAnnotate will take .CSV, .TSV, Excel, and .VTT files.

**1. Project Level:** Every AVAnnotate project will include one Event and one Tag spreadsheet. 
* Event Spreadsheet: Each row in the event spreadsheet is a unique “event” in the project.
* Tag Spreadsheet: Each row in the tag spreadsheet is a unique tag in the project.
  
**2. Event Level:** Regardless of how many events a project includes, one Annotation spreadsheet will correspond to one Event spreadsheet, such that projects with multiple events require multiple annotation spreadsheets. 
* Annotation Spreadsheet: Each row in an annotation spreadsheet is an single annotation for a timestamp on the event.
  
---
# [Event Spreadsheet Template](https://docs.google.com/spreadsheets/d/1noYKA8DFaHkSLq-MXSPwCccY3YFeyR52/edit?usp=drive_link&ouid=112492510360958259862&rtpof=true&sd=true)
This template organizes the events in a project and associates the AV files with that event. An “event” might be an interview, an oral history, a performance, a speech, a reading, or a conference that takes place over multiple days. (This list is not exhaustive, and the audiovisual material you’re working with may or may not fall into one of these “event” categories.) Each row in the Event template corresponds to one recording. If your event spans multiple recordings, additional recordings must be added to the event after upload.

**Spreadsheet Header** <br>
**Column A:** Event Label (“Interview 1”) <br>
**Column B:** Event Item Type (“Audio” or “Video”) <br>
**Column C:** AV File Label (name for the file; create a name even if there is not an AV URL) <br>
**Column D:** AV File URL <br>
**Column E:** Event Citation (optional) <br>
**Column F:** Event Description (optional) <br>

---
# [Tag Spreadsheet Template](https://docs.google.com/spreadsheets/d/1LOuw5aiF4v00Ivx3S-ozPcGHzeZf3ovz/edit?usp=sharing&ouid=112492510360958259862&rtpof=true&sd=true)
This template contains tags and tag categories used in a project. Tags are labels used in the interface to index, organize, and discover topics in the annotations. Categories can be used to organize the tags in groups. For instance, tags might contain the names of speakers featured on the recording(s), which could be organized under the category “speaker.” This would allow end users to easily find all annotations that relate to a given speaker or all speakers. 
Tags can also be used to organize concepts, themes, or features that appear across several recordings (e.g., “Shouting” as a tag and “Tone of Voice” as a category). Consistency with the spelling and capitalization of tags is imperative, as AVAnnotate will read each tag individually and cannot control for differences in case or spelling. 

**Note:** 
A tag can belong to multiple categories. For example, the tag “Zora Neale Hurston” may be found in the categories “Speaker” and “Topic” (depending on the event context) or may not be categorized at all. 
A single tag can contain multiple words and punctuation, but should not use colons or pipes (e.g., “Allende Gossens, Salvador, 1908-1973”).

**Spreadsheet Header** <br>
**Column A:** Tag (one tag per cell) <br>
**Column B:** Category <br>

---
# [Annotation Spreadsheet Template](https://docs.google.com/spreadsheets/d/12yn6zxviUpNLYESlGfUyWTc83wmFfsOM/edit?usp=drive_link&ouid=112492510360958259862&rtpof=true&sd=true)
This template includes project annotations. Annotations correspond to a given start and end point in the audio or video artifact, and contain information about the media. The nature of this information is entirely up to the user. For example, annotations might include a transcript; captions; information about formal features of the media, like shot sequence, volume, or lighting; historical or cultural context; environmental noises such as fans or car horns; or conceptual notes or themes. 
Annotations are linked to an event as part of the upload process. 

**Note:** 
Annotations may overlap in time and will appear in sequence in the interface according to the earliest start time.

**Spreadsheet Header** <br>
**Column A:** Start Time marks the point in time in minutes and seconds that is the target of an annotation. <br>
**Column B:** End Time may be the same as start time for a point in time or may correspond to the end of a range of time that is the target of the annotation. <br>
**Column C:** This is the body of the annotation (e.g., transcription, notes on environmental sounds, formal features, etc.) <br>
**Column D:** Tags are pipe | separated; if a tag is unique across the project, include just the tag; if a tag belongs to multiple categories, the category must also be included with a colon (e.g., “People: Allende Gossens, Salvador, 1908-1973 | Presidents: Allende Gossens, Salvador, 1908-1973 | Frei Montalva, Eduardo, 1911-1982 | Pinochet Ugarte, Augusto, 1915-2006”) <br>

**Note:** 
The “pipe” can be found on QWERTY keyboards to the right of the letter “P.”

# Examples
Sample Audio Spreadsheets - [Leslie Flint's Spiritualism]  <br> 
These event, tag, and annotation spreadsheets represent two events included in an AVAnnotate project about Leslie Flint's direct voice mediumship. [Flint example spreadsheets](https://drive.google.com/drive/u/0/folders/1CzTX-WOQbCxYW3YefjOs4bThszHDr-oU)

Sample Audio Spreadsheets - [Zora Neale Hurston](https://tanyaclement.github.io/znh-1939/) <br>
These event, tag, and annotation spreadsheets represent a multi-event project including three recordings created by Zora Neale Hurston. [Hurston example spreadsheets](https://utexas.app.box.com/s/ce1cmsvs1ygs6jv1jr2wrfxryc7ig87q)

Sample Video Spreadsheets - [Camille (1921)](https://avannotate.github.io/camille/events/camille-1921/)  <br>
These event, tag, and annotation spreadsheets represent a single video event about the 1921 film adaptation of "La Dame aux Camélias" (1848) by Alexandre Dumas, fils. [Camille example spreasheets](https://docs.google.com/spreadsheets/d/11oOHhd-wPZb7Kr3u5zWrX2ZhTQRn4EOPLuAOxhhKiyc/edit?gid=1408208239#gid=1408208239) 


