---
title: Offline
layout: home
parent: Project Basics
grand_parent: Projects
nav_order: 5
---

# Offline or Alternative Server Projects

AVAnnotate projects can be downloaded and used offline or on a private server as a free-standing site. 

For private projects, start with the instructions for [creating a private repository](https://avannotate.github.io/documentation/pages/private).
For creating projects without a URL, see instructions for creating [Events](https://avannotate.github.io/documentation/pages/events/).

## Creating Offline or Alternative Server Projects

1. Edit the file reference for each AV item in the project. In the AVAnnotate dashboard, go to each [Event](https://avannotate.github.io/documentation/pages/events/) setting and rename the AV file URL by inserting a forward slash, the "media" directory name, a forward slash, and the name of the AV file (e.g., `/mediadirectoryname/filename.mp3`).  
2. To publish a `Static Site`, click the `Publish` button on the `Site Builder` tab and select the `Static Site` option. A new repository will appear in the project's GitHub repository named "site." 
3. Navigate to the project's GitHub repository and download the project. To find the GitHub repository for the project, go to the project homepage on the AVAnnotate Dashboard, click on the three-dot menu, and select "Repository." Use the green `Code` button to `Download ZIP` and save the .zip file to the local computer.
4. Unzip the file on the local computer. Within the zip file, a “site” directory contains the static pages.
5. To create a media directory, within the site folder, create a folder called "media." Ensure that the name of this directory matches the name used in step 1. Place all media files needed for the project within this folder. 
6. To run the site locally, the “site” folder also contains a set of instructions for how to present a static AVAnnotate site to any web server (i.e., Apache, NginX). The simplest approach to run the site locally is to use the Python web server.
   
## Using the Python Web Server
1. Install Python
- [On Windows](https://docs.python.org/3/using/windows.html){:target="_blank" rel="noopener"}
- [On Mac]((https://docs.python.org/3/using/mac.html)){:target="_blank" rel="noopener"}
2. Run http.server
      1. Navigate to the local copy of the "site" directory in the appropriate terminal for the OS. (On a Mac, shift+right-click on the "site" directory and select 'New Terminal at Folder')
      2. Enter the following command at the terminal prompt: `python3 -m http.server 8000`
3. To view the project, navigate a browser to ‘http://localhost:8000’


  
