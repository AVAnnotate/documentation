---
title: Technical Stack
layout: home
parent: About AVAnnotate
nav_order: 2
---
# Technical Stack
The AVAnnotate application is written in JavaScript, Typescript, and React and utilizes the Astro Framework. It relies on GitHub pages for deploys and hosting of the generated site. The Admin client (https://avannotate.netlify.app) utilizes Astro’s Server Side Rendering adapter to run on Netlify. This allows the Admin client to communicate securely with GitHub to manage project data.

In addition to the techologies above,AVAnnotate employs additional libraries, APIs, etc:
- Radix UI - UI Component library
- Formik - Web Form library
- Isomorphic Git - Git repository manipulation
- Slate - Rich Text Editor library
- Xlsx - Spreadsheet import/export library
- Tailwind - CSS library
- Nanostores - Client state management
