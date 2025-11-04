---
title: Annotations
layout: home
parent: Data Manager
grand_parent: Projects
nav_order: 4
---
# Annotations

In AVAnnotate, "Annotations" refer to the body of an annotation that is associated with a timestamped point or range in the audio or video. They include information about the media, such as transcripts, captions, details about formal features (like shot sequence, volume, or lighting), historical or cultural context, environmental noises (like fans or car horns), or conceptual notes or themes, along with a variety of other possible topics.

Requirements
- Annotations always correspond to an associated event.
- - Timestamps must be provided for each annotation in seconds or in the hours:minutes:seconds (hh:mm:ss) format. They must include a start and an end time. The start and end times can specify a range or the same moment in time.
  
Allowances: 
- Multiple annotations can be included for the same timestamp.
- A single annotation can span multiple timestamps.

# Creating, Modifying, and Deleting Annotations

Annotations and timestamps can be added, edited, or deleted through the AVAnnotate dashboard.

To add annotations to an event in AVAnnotate, navigate to the `Events` dashboard and select an event. 
![image1](../../assets/newannotationsimage1.png)

On the settings page for a given event, annotations can be uploaded [in various file formats](https://avannotate.github.io/documentation/pages/templates/) by selecting `Import` under the `Add` button. 
![image 2](../../assets/newannotationsimage2.png)

![image3](../../assets/newannotationsimage4.png)

On the event page, annotations can be added individually by selecting `Create` under the `Add` button.
![image 4](../../assets/newannotationsimage3.png)
