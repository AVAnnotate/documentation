---
title: AV Items
layout: home
parent: Project Basics
grand_parent: Projects
nav_order: 2
---

# Audiovisual Material

Unlike websites that store media files (e.g., YouTube, Instagram, Internet Archive, etc.), AVAnnotate references audiovisual media through URLs and [IIIF manifests](https://avannotate.github.io/documentation/pages/iiif/). To build an AVAnnotate project with any audiovisual material, it must first be hosted on another server or be associated with a IIIF manifest. 

# Suitable AV Formats
AVAnnotate does not host audio and video files. Making files available is made simple by [uploading files to the Internet Archive](https://help.archive.org/help/uploading-a-basic-guide/) where direct links to .mp3 and .mp4 files are easy to find. Simply follow [the download directions](https://help.archive.org/help/how-to-download-files/) and instead of downloading, click on the file name and copy the URL to the file.

## Valid Formats for IIIF Manifests
Only File Paths, HLS, and DASH references will generate a valid IIIF manifest. 

### Video
- **File Paths:** Video files directly hosted on a server or accessible via URLs, such as MP4, MOV, AVI, and MKV, etc. 
- **HLS (HTTP Live Streaming):** Live and on-demand video streams using HLS
- **DASH (Dynamic Adaptive Streaming over HTTP):** Video streams using DASH

### Audio
- **File Paths:** Audio files directly hosted on a server or accessible via URLs like MP3, WAV, OGG, etc.

## Formats that are Invalid for IIIF Manifests
Projects may be created with audiovisual material from the following sources. However, while AVAnnotate supports these audiovisual file formats, the below formats will not be reflected in the IIIF manifests associated with events from Youtube, Facebook, Vimeo, and others. These file types will appear in published projects but will not appear in the associated IIIF manifests.

For example, users may be interested in presenting annotations associated with a YouTube video, though the manifest associated with their published project is not compatable with IIIF. If a working IIIF manifest is required, valid audiovisual formats (MP4, MOV, AVI, and MKV, etc.) must be used for developing project events. 

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

