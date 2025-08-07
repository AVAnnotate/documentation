---
title: Annotations
layout: home
parent: Data Manager
grand_parent: Projects
nav_order: 4
---
# Annotations

Users generate and add timestamped annotations to each AV file through the AVAnnotate dashboard. 

Timestamps are the beginning and end time of a point in time or segment of AV. Annotations correspond to this point or range in the audio or video. Annotations contain information about the media that might include a transcript; captions; information about formal features of the media (e.g., shot sequence, volume, or lighting), historical or cultural context, environmental noises such as fans or car horns, or conceptual notes or themes among a wide variety of other possible topics. 

# Creating and Modifying Timestamped Annotations
Annotations must refer to a timestamped point in time or segment of AV. 
- Timestamps can be included in either seconds or in hh:mm:ss format and must have a start and end time. The start and end time can represent a range or be the same, as in a point in time.
- Annotations and timestamps can be added, edited, or deleted through the AVAnnotate dashboard.
- Multiple annotations can be included for the same timestamp or spanning timestamps.

Annotations always correspond to an associated event. To add annotations to an event in AVAnnotate, navigate to the Events dashboard and select an event. 
![annotationsimage1](../../assets/annotationsimage1.png)

Selecting an event will open its settings page. On the settings page for a given event, annotations can be uploaded in various file formats via the Import button, or added individually via the Add button. 
![image 2](../../assets/annotationsimage2.png)

# Creating and Modifying Annotation Sets
AVAnnotate allows users to organize their annotations for AV files via different "sets" such as one set for Transcripts and another for Notes; or one annotation set in English and another in Spanish. In other words, a single AV file can have multiple groups of annotations. Annotation sets are groups of annotations for a single AVAnnotate event. 

- Annotations can be added to the 'Default' set or to a newly created set through `Event` settings. The 'Default' set can be renamed but cannot be deleted.
  
- Annotation sets can be added manually, via a IIIF manifest, or imported via a separate spreadsheet or .VTT file (Web Video Text Track file).
  
- Annotation sets can be set as captions on a video file (note: this does not work for YouTube, which has its own captioning system) by selecting the settings of an annotation set in the `Event` settings. 

Annotations can be customized to appear during the corresponding time in the event.
![image 2](../../assets/annotationsimage3.png)

Annotation sets for an event can be imported seperately by selecting a spreadsheet file.
![image 2](../../assets/annotationsimage4.png)
