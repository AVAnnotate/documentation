---
title: Annotations
layout: home
parent: Projects
nav_order: 4
---
# Annotations and Timestamps
Users add timestamped annotations to each AV file. Annotations and timestamps are user-created and correspond to a point or range in the audio or video. Annotations contain information about the media that might include a transcript; captions; information about formal features of the media, like shot sequence, volume, or lighting; historical or cultural context; environmental noises such as fans or car horns; or conceptual notes or themes. Annotations often include tags for indexing.

# Creating and Modifying Annotations, Timestamps, and Tags
Annotations must include timestamps and can include tags. 
- Timestamps are included in hh:mm:ss format and must have a start and end time. The start and end time can represent a range or be the same, as in a point in time.
- Annotations, timestamps, and tags can be added, edited, or deleted through the AVAnnotate dashboard.
- Multiple annotations can be included for the same timestamp or spanning timestamps.
   
# Creating and Modifying Annotation Sets
AVAnnotate allows users to organize their annotations for AV files via different "sets" such as one set for Transcripts and another for Notes or one annotation set in English and another in Spanish.  
- Annotations can be added to the 'Default' set or to a newly created set through `Event` settings. The 'Default' set can be renamed but cannot be deleted.
- Annotation sets can be added manually, via a IIIF manifest, or imported via a separate spreadsheet or .VTT file (Web Video Text Track file).
- Annotation sets can be set as captions on a video file (note: this does not work for YouTube, which has its own captioning system).

