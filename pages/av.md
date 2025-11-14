---
title: AV Items
layout: home
parent: Project Basics
grand_parent: Projects
nav_order: 3
---

# Audiovisual Material

AVAnnotate does not store media files. AVAnnotate references audiovisual media through URLs and [IIIF manifests](https://avannotate.github.io/documentation/pages/iiif/). To create an AVAnnotate project with playable audiovisual material, the AV file must be hosted on a public server. 

{: .note }
> To create AVAnnotate with private or offline AV media, see [Offline or Alternative Server Projects](https://avannotate.github.io/documentation/pages/offline/).

## AV References 
Creating URLs for AV files is made simple by [uploading AV to the Internet Archive](https://help.archive.org/help/uploading-a-basic-guide/){:target="_blank" rel="noopener"}, where direct links to .mp3 and .mp4 files are easily accessible. Follow [the download directions](https://help.archive.org/help/how-to-download-files/){:target="_blank" rel="noopener"}, but instead of downloading, right-click on the file name and copy the URL.

## Valid Formats for IIIF Manifests
Projects may be created with audiovisual material from the following sources, each of which will generate a IIIF manifest. IIIF manifests enable the easy sharing and reproduction of metadata associated with an AVAnnotate project (e.g., rights information, audiovisual materials, annotations, etc.).

### Video
- **File Paths:** Video files directly hosted on a server or accessible via URLs, such as MP4, MOV, AVI, and MKV. 
- **HLS (HTTP Live Streaming):** Live and on-demand video streams using HLS
- **DASH (Dynamic Adaptive Streaming over HTTP):** Video streams using DASH

### Audio
- **File Paths:** Audio files directly hosted on a server or accessible via URLs like MP3, WAV, OGG, etc.

## Formats that are Invalid for IIIF Manifests
Projects *can be created using audiovisual material from the following sources*. These file types will be visible in published AVAnnotate projects but will not appear in the associated IIIF manifests.

### Video
- **YouTube:** YouTube URLs  
- **Facebook:** Facebook URLs 
- **Vimeo:** Vimeo URLs
- **DailyMotion:** DailyMotion URLs
- **Twitch:** Twitch stream URLs
- **Wistia:** Wistia URLs
- **Streamable:** Streamable URLs
- **SoundCloud:** SoundCloud URLs
- **Mixcloud:** Mixcloud URLs

### Audio
- **SoundCloud:** SoundCloud tracks.
- **Mixcloud:** Mixcloud tracks
