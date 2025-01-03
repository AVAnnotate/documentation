---
title: AV File Formats and Support
layout: home
parent: Getting Started
nav_order: 6
---

# AV File Formats and Support

AVAnnotate references audio and video files hosted on other servers directly via URLs or through [IIIF manifests](iiif.md). The suggested means for making files available in these ways is to [upload files to the Internet Archive](https://help.archive.org/help/uploading-a-basic-guide/). 

## Note: 
-Only File Paths, HLS, and DASH references will generate a valid IIIF manifest.  <br>
-The player does not support files shared through links that reference Box, Dropbox, or Google Drive.

## Video Formats:
**File Paths:** Play video files directly hosted on a server or accessible via URLs, such as MP4, MOV, AVI, MKV, and more.  <br>
**YouTube:** Embed YouTube videos using their URLs.  <br>
**Facebook:** Embed Facebook videos using their URLs.  <br>
**Vimeo:** Embed Vimeo videos using their URLs.  <br>
**DailyMotion:** Embed DailyMotion videos using their URLs.  <br>
**Twitch:** Embed Twitch streams using their URLs.  <br>
**Wistia:** Embed Wistia videos using their URLs.  <br>
**Streamable:** Embed Streamable videos using their URLs.  <br>
**SoundCloud:** Embed SoundCloud tracks using their URLs.  <br>
**Mixcloud:** Embed Mixcloud tracks using their URLs.  <br>
**HLS (HTTP Live Streaming):** Play live and on-demand video streams using HLS.  <br>
**DASH (Dynamic Adaptive Streaming over HTTP):** Play video streams using DASH.  <br>

## Audio Formats:
**File Paths:** Directly play audio files like MP3, WAV, OGG, etc.  <br>
**SoundCloud:** Play SoundCloud tracks as mentioned above.  <br>
**Mixcloud:** Play Mixcloud tracks as mentioned above.  <br>

## Offline AV
AVAnnotate will create projects without URLS. Users can toggle `URL` to `Offline` on the `Event` settings page or, see more information in [Spreadsheet Templates](https://avannotate.github.io/documentation/pages/templates/) on creating bulk uploads without AV URLs.

