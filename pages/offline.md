---
title: Offline
layout: home
parent: Projects
nav_order: 6
---
# Creating Offline or Alternative Server Projects
AVAnnotate projects can be downloaded and used offline or on a private server as a free-standing site. For projects that are private, start with the instructions for [creating a private repository](https://avannotate.github.io/documentation/pages/private). For projects containing offline AV, see [AV Formats and Support](https://avannotate.github.io/documentation/pages/av).

1. Navigate to the user's project GitHub respository. Use the green `Code` button to `Download ZIP` and save the .zip file. Unzip the file on the local computer. A “site” directory contains the static pages. 
2. The “site” folder contains a set of instructions for how to deploy a static AVAnnotate site to any web server (i.e. Apache, NginX).
3. To run the site locally on a computer, the simplest approach is to use the Python web server.
   
```
Using the Python Web Server
1. Install Python
- [On Windows](https://builtin.com/software-engineering-perspectives/how-to-install-python-on-windows)
- [On Mac](https://builtin.com/software-engineering-perspectives/how-to-install-python-on-windows)
2. Run http.server
      1. Navigate to the local copy of the /site directory in the appropriate terminal for the OS.
      2. Enter the following command at the terminal prompt: `python3 -m http.server 8000`
4. To view the project, navigate a browser to ‘http://localhost:8000’

```
These instructions [are also available online here](https://github.com/AVAnnotate/project-client/blob/develop/static-site-readme.md).

  
