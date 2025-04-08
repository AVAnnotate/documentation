---
title: Offline
layout: home
parent: Project Basics
grand_parent: Projects
nav_order: 6
---
# Creating Offline or Alternative Server Projects
AVAnnotate projects can be downloaded and used offline or on a private server as a free-standing site. 

{: .note }
> For projects that are private, start with the instructions for [Creating a Private Repository](https://avannotate.github.io/documentation/pages/private). For projects containing offline AV that are still publicly available online, see [AV Formats and Support](https://avannotate.github.io/documentation/pages/av).

## Instructions

1. Navigate to the user's project GitHub respository. Use the green `Code` button to `Download ZIP` and save the .zip file.
2. Unzip the file on the local computer. A “site” directory contains the static pages. The “site” folder contains a set of instructions for how to deploy a static AVAnnotate site to any web server (i.e. Apache, NginX).
3. To run the site locally on a computer, the simplest approach is to use the Python web server.
   
```
Using the Python Web Server
1. Install Python
- [On Windows](https://builtin.com/software-engineering-perspectives/how-to-install-python-on-windows)
- [On Mac](https://builtin.com/software-engineering-perspectives/how-to-install-python-on-windows)
2. Run http.server
      1. Navigate to the local copy of the /site directory in the appropriate terminal for the OS. (On a Mac, shift+right-click on the /site directory and select 'New Terminal at Folder')
      2. Enter the following command at the terminal prompt: `python3 -m http.server 8000`
3. To view the project, navigate a browser to ‘http://localhost:8000’

```

  
