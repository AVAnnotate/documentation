---
title: Offline
layout: home
parent: Project Basics
grand_parent: Projects
nav_order: 5
---

{: .note for offline AV }
> AVAnnotate projects may include AV Events without media URLS. Users can toggle `URL` to `Offline` in the `Event` settings. See more information in [Events](https://avannotate.github.io/documentation/pages/events/) and [Spreadsheet Templates](https://avannotate.github.io/documentation/pages/templates/) on creating bulk uploads without AV URLs.

# Creating Offline or Alternative Server Projects

AVAnnotate projects can be downloaded and used offline or on a private server as a free-standing site. 

{: .note }
> These instructions are for projects that are completely offline with offline AV that will be placed in a directory associated with the AVAnnotate project. If the media files will stil be accessible online, do not replace the URLS or create a media folder. 

For projects that are private, start with the instructions for [Creating a Private Repository](https://avannotate.github.io/documentation/pages/private).

## Instructions 

1. Edit the file reference for each AV item in the project. In the AVAnnotate dashboard, go to each [Event](https://avannotate.github.io/documentation/pages/events/) setting and edit the AV URL references by inserting a slash, the "media" directory name, slash, and the name of the AV file (e.g., `/media/file.mp3`).  
2. Pubish a Static Site. When publishing your AVAnnotate project, select "Static Site". A new repository will appear in your project's GitHub repository named "site." 
3. Navigate to the project GitHub respository and download the project. To find the GitHub repository for the project, go to the project homepage on the AVAnnotate Dashboard, select the three-dot menu and "Repository." Use the green `Code` button to `Download ZIP` and save the .zip file to the local computer.
4. Unzip the file on the local computer. Within the zip file, a “site” directory contains the static pages. .
5. Create a media directory. Within the site folder, create a folder called "media" (please be sure that the name of this directory is the same name used in step 1. above. place all media files needed for the project within this folder. 
6. Run the site locally. The “site” folder also contains a set of instructions for how to deploy a static AVAnnotate site to any web server (i.e. Apache, NginX). To run the site locally on a computer, the simplest approach is to use the Python web server.
   
## Using the Python Web Server
1. Install Python
- [On Windows](https://builtin.com/software-engineering-perspectives/how-to-install-python-on-windows)
- [On Mac]([https://builtin.com/software-engineering-perspectives/how-to-install-python-on-windows](https://www.dataquest.io/blog/installing-python-on-mac/)
2. Run http.server
      1. Navigate to the local copy of the "site" directory in the appropriate terminal for the OS. (On a Mac, shift+right-click on the "site" directory and select 'New Terminal at Folder')
      2. Enter the following command at the terminal prompt: `python3 -m http.server 8000`
3. To view the project, navigate a browser to ‘http://localhost:8000’


  
