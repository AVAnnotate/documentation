---
title: AVAnnotate Features
layout: home
parent: Get Started
nav_order: 6
---
# AVAnnotate Features

At its core, AVAnnotate is a web application that enables users to create digital exhibits featuring audiovisual media alongside user-generated, time-stamped annotations and tags. 

The AVAnnotate application is split into several primary sections: [project settings](https://avannotate.github.io/documentation/pages/creating_projects/), [`Data Manager`](https://avannotate.github.io/documentation/pages/data-manager/), and [`Site Builder`](https://avannotate.github.io/documentation/pages/site-builder/). The project settings include high-level information, such as the project author, project description, whether the project is saved to a public or private repository, and project collaborators. The `Data Manager` enables users to link their audiovisual media with associated annotations and manage project-wide tags. The `Site Builder` allows users to customize how their exhibit (including media and annotations) appears to audiences through building and designing webpages. 

Below is a list of AVAnnotate application features, organized into sections corresponding to the `Data Manager`, `Site Builder`, and infrastructure and project settings. 

{: .note }
> This page will be most useful *after* users are familiar with the [AVAnnotate glossary](https://avannotate.github.io/documentation/pages/glossary/).

## Infrastructure: 
  - AVAnnotate is based on widely accepted standards (IIIF, web annotations, W3C guidelines, etc.). 
  - AVAnnotate is low-cost and has a small technological footprint. There is no database.
  - AVAnnotate sits on top of a [GitHub](https://github.com/){:target="_blank" rel="noopener"} repository and relies on GitHub for authentication.
  - Users publish AVAnnotate projects through the [AVAnnotate app interface](https://avannotate.netlify.app/en/sign-in){:target="_blank" rel="noopener"}, which modifies GitHub repositories and the state of the data. <br/>

## Data Manager: 
### Events
  - [Events](https://avannotate.github.io/documentation/pages/events/) may comprise a single audiovisual file ("single-AV Event") or multiple AV files ("multi-AV Event"). 
  - Single-AV audio and video Events can be created via:
    - [Spreadsheet upload](https://avannotate.github.io/documentation/pages/templates/),
    - IIIF manifest import, and/or
    - Manually through the [AVAnnotate interface](https://avannotate.netlify.app/en/sign-in){:target="_blank" rel="noopener"}.
  - Multi-AV audio and video `Events` can be created via:
    - IIIF manifest import, and/or
    - Manual entry through the [AVAnnotate interface](https://avannotate.netlify.app/en/sign-in){:target="_blank" rel="noopener"}.

### Annotations
  - [Annotations](https://avannotate.github.io/documentation/pages/annotations/) can be added to both single- and multi-AV Events via:
    - [Spreadsheet upload](https://avannotate.github.io/documentation/pages/templates/),
    - IIIF manifest import, and/or
    - Manual entry through the [AVAnnotate interface](https://avannotate.netlify.app/en/sign-in){:target="_blank" rel="noopener"}.
  - Annotation spreadsheets can be added to the Event's default annotation set or to a newly-created set.
  - Annotations can also be added, edited, or deleted via the AVAnnotate editing interface.
  - Annotation sets can be set as captions on a video file (note: this does not work for YouTube, which has its own captioning system).
  - Event pages allow users to choose how they view annotations (i.e., filter by annotation sets or sort by tag). 

### Tags
 - [Tags](https://avannotate.github.io/documentation/pages/tags/) can be added via:
   - [Spreadsheet upload](https://avannotate.github.io/documentation/pages/templates/) (if uploaded *before* annotations containing tags), and/or
   - Manual entry through the AVAnnotate interface (Index). 
 - Tags and Tag Groups can be edited via AVAnnotate.
 - Event pages allow users to filter annotations by tags.
 - Index pages show when tags appear in different `Events` and AV files.

## Site Builder: 
 - Pages can be [auto-generated](https://avannotate.github.io/documentation/pages/auto/) or [custom-made](https://avannotate.github.io/documentation/pages/custom/).
 - Auto-generated pages give non-technical users a quick and easy way to produce AVAnnotate projects.
 - Custom pages provide options within the rich-text editor to control text and image layout.
 - Pages can contain text, images, links, full AV files, or clips of AV files.
 - When embedding an AV file in a page, there are options for whether or not to include the event labels, descriptions, and annotations.
 - Pages can optionally include a Table of Contents component.
 - A single page can contain multiple different embedded AV files.
 - Page names in the `Site Builder` interface are generated based on the page title.

## Project Settings: 
- AVAnnotate projects can be saved in any organization that a GitHub user can edit.
- [Collaborators](https://avannotate.github.io/documentation/pages/add-collab/) can be added via GitHub username in the Project Settings.
- IIIF manifests are linked at the bottom of every project page.
- AVAnnotate supports both AVAnnotate and Aviary players when publishing pages with media.
- Offline/private projects with up to 3 collaborators can be created using GitHub private repositories.
- AVAnnotate projects can be downloaded and used offline as a free-standing site not locatable on the internet.
- “No media” AVAnnotate projects can be created via:
  - [Spreadsheet upload](https://avannotate.github.io/documentation/pages/templates/) (users will still need to denote "audio" or "video" in the spreadsheet and will be prompted to enter durations; enter any number and continue), and/or
  - Manual entry by changing the Event settings for the media file from "URL" to "offline."

{: .note for Aviary Users }
>  The Aviary player does not support AVAnnotate page structures or custom pages; instead, the manifest goes directly to the Aviary player to produce an Aviary “project.” Aviary does not support YouTube or other non IIIF-compliant media. If a YouTube (or other) link is included in the project, a “No public media” page will be produced. Removing these events will produce an Aviary project.

