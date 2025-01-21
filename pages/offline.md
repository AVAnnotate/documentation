---
title: Offline
layout: home
parent: Projects
nav_order: 6
---
# Creating Offline or Alternative Server Projects
AVAnnotate projects can be downloaded and used offline or on a private server as a free-standing site. For projects containing offline AV, see [AV Formats and Support](https://avannotate.github.io/documentation/pages/av/).

1. Navigate to the user's project GitHub respository. called “site” will be created in your project repository, which contains all of the static pages. 

3. Download the “site” folder from your GitHub repository. You do not need every folder in the repository – only “site.”

3. The “site” folder contains a set of instructions for how to deploy your static AVAnnotate site to another web server. You can also run the site locally on your computer. The instructions, pasted below, [are available online here](https://github.com/AVAnnotate/project-client/blob/develop/static-site-readme.md).

4. A static site of your AVAnnotate project is contained within this directory. This site can be deployed to any web server (i.e. Apache, NginX). How this is done is beyond the scope of this document.

5. A static site can also be run locally on your machine. The simplest approach is to use the Python web server.

## Install Python
[On Windows](https://builtin.com/software-engineering-perspectives/how-to-install-python-on-windows)
[On Mac](https://builtin.com/software-engineering-perspectives/how-to-install-python-on-windows)

## Run http.server
1. Navigate to your local copy of the /site directory in the appropriate terminal for your OS.
2. Enter the following command at the terminal prompt:
python3 -m http.server 8000
3. Navigate your browser to ‘http://localhost:8000’

  
