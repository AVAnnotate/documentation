---
title: Troubleshooting
layout: home
nav_order: 11
---
# Troubleshooting Projects That Won’t Publish

## Check the Tags
- Check the project's tags. All [tags](https://avannotate.github.io/documentation/pages/tags/) should include URL-safe characters such as alphanumeric [a-z A-Z] characters. Diacritics and accents, commas, dashes, and numbers [0-9] are allowed, but no periods (.), apostrophes (‘), quotation marks (“), ampersands (&), or other non-alphanumeric characters.
- Tags can only be deleted on the backend through the tag manager. If annotations with a tag are deleted, the tag will remain in the project unless it is removed in the tag manager.
- If these tag errors are updated in the backend tag manager, the tags will be fixed across all the annotations. Republish! 

## Check AV Media References or URLs
- AV URLS should go directly to the AV resource, not the HTML page where the resource is presented online. The safe URL will likely end in an .mp4, .mp3, or be a direct “share” link from Vimeo or YouTube.
- URLs should ALSO not have anything in them other than URL-safe characters (see the note above about tags).

{: .note }
> If using Vimeo, the size of the video will not adjust in AVAnnotate. It is better to upload the files to the Internet Archive. 

## Check the Spreadsheets
- Use [spreadsheets](https://avannotate.github.io/documentation/pages/templates/) to organize the project's events, tags, and annotations before starting to build the online project. Content is the hardest part of making an AVAnnotate project, and this way, the project will always have a backup.
- There should be NO empty cells in the project's spreadsheets. If one Event description is included, for example, all of the project's Events must include descriptions. If one tag is included for one annotation, tags have to be included for all the annotations.
- Be sure to upload spreadsheets in this order: (1) Events, (2) Tags, (3) Annotations. 
- Consider adding new sets of annotations as separate annotation sets. This gives more flexibility with deleting sets on the backend and filtering annotations on the front end. 
- Clearing formatting – Ensure that all annotations and tags are in plain text. Plain text can include diacritics and all alphanumeric characters (see notes on tags above). It can also include HTML tags for basic formatting. An easy catch-all is to clear all formatting in these ways before uploading to AVAnnotate: In Google Docs, format text as “values only” and format numeric cells (i.e., timestamps) as plain text (Format → Numbers → Plain Text). In Excel, format text to “match destination formatting.”

## Publish Often
- Publish the project's site early and often to make sure that there are no errors in the data.
 
## Learn How to Delete
- Check the documentation by searching for the word “delete.”
- Example: the 'Default' annotation set *can* be renamed, but *cannot* be deleted. Once annotations are added to the event, *there must be at least one annotation set*. To delete the default annotation set (even when it is renamed), delete the event or create a new set and delete the default annotation set.
