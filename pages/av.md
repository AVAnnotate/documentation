---
title: AV Items
layout: home
parent: Create a Project
grand_parent: Projects
nav_order: 1
---

# AV File Formats and Support

AVAnnotate references audio and video files hosted on other servers directly via URLs or through [IIIF manifests](iiif.md). 

# Hosting AV 
AVAnnotate does not host audio and video files. Making files available is made simple by [uploading files to the Internet Archive](https://help.archive.org/help/uploading-a-basic-guide/) where direct links to .mp3 and .mp4 files are easy to find. Simply follow [the download directions](https://help.archive.org/help/how-to-download-files/) and instead of downloading, click on the file name and copy the URL to the file.

## Valid Formats for IIIF Manifests
Only File Paths, HLS, and DASH references will generate a valid IIIF manifest. 

### Video
- **File Paths:** Video files directly hosted on a server or accessible via URLs, such as MP4, MOV, AVI, and MKV, etc. 
- **HLS (HTTP Live Streaming):** Live and on-demand video streams using HLS
- **DASH (Dynamic Adaptive Streaming over HTTP):** Video streams using DASH

- ## Audio
**File Paths:** Audio files directly hosted on a server or accessible via URLs like MP3, WAV, OGG, etc.

### Formats that are Invalid for IIIF Manifests
These file types will appear in published projects but will not appear in the associated IIIF manifests.

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
- 
### Audio
- **SoundCloud:** SoundCloud tracks.
- **Mixcloud:** Mixcloud tracks

# Offline AV
Note: AVAnnotate projects may include AV Events without media URLS. Users can toggle `URL` to `Offline` in the `Event` settings. See more information in [Events](https://avannotate.github.io/documentation/pages/events/) and [Spreadsheet Templates](https://avannotate.github.io/documentation/pages/templates/) on creating bulk uploads without AV URLs.

