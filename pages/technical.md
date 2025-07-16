---
title: Technical Stack
layout: home
parent: About AVAnnotate
nav_order: 2
---
# Technical Stack
The AVAnnotate application is written in JavaScript, Typescript, and React and utilizes the Astro Framework. It relies on GitHub pages for deploys and hosting of the generated site. The [Admin client](https://avannotate.netlify.app){:target="_blank" rel="noopener"} utilizes Astro’s Server Side Rendering adapter to run on Netlify. This allows the Admin client to communicate securely with GitHub to manage project data.

In addition to the technologies above, AVAnnotate employs additional libraries, APIs, etc:
- [Radix UI](https://www.radix-ui.com/){:target="_blank" rel="noopener"} - UI Component library
- [Formik](https://formik.org/){:target="_blank" rel="noopener"} - Web Form library
- [Isomorphic Git](https://isomorphic-git.org/){:target="_blank" rel="noopener"} - Git repository manipulation
- [Slate](https://docs.slatejs.org/libraries/slate-react){:target="_blank" rel="noopener"} - Rich Text Editor library
- [Xlsx](https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba){:target="_blank" rel="noopener"} - Spreadsheet import/export library
- [Tailwind](https://tailwindcss.com/){:target="_blank" rel="noopener"} - CSS library
- [Nanostores](https://github.com/nanostores){:target="_blank" rel="noopener"} - Client state management
