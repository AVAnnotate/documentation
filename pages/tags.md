---
title: Tags
layout: home
parent: Data Manager
grand_parent: Projects
nav_order: 3
---
# Tags
In AVAnnotate, tags function as they do in other web applications. Tags are labels used in a published AVAnnotate project to index, organize, and discover topics in the annotations. Tags will always belong to a tag group, even if that group is not given a title in AVAnnotate (i.e., these tags will be automatically labeled as "Uncategorized" unless designated otherwise). 

{: .warning }
> Tags should ONLY be comprised of URL-safe characters such as alphanumeric [a-z A-Z] characters with and without accents. Diacritics, commas, and numbers [0-9] are allowed, but no periods (.), apostrophes ('), quotation marks ("), ampersands (&), or other non-alphanumeric characters.

Tags and tag groups can be accessed in AVAnnotate in two places:
1. Event pages: tags associated with an event's annotations can be viewed and used to filter annotations.
![Image 1](../../assets/eventpagetags.png)

2. Index pages: tags appear as they are associated with different Events and AV files. Individual tags can be selected for playback across all events in a project.
![Image 2](../../assets/indexpagetags.png)

## Uploading Tags and Tag Groups
Sets of tags and tag groups can be uploaded via a spreadsheet. See [Spreadsheet Templates](https://avannotate.github.io/documentation/pages/templates/#tag-spreadsheet-template). Tag spreadsheets should be imported before annotation spreadsheets that have tags. When annotation spreadsheets containing tags are imported, they are matched to the previously imported tags and tag groups.
![Image 3](../../assets/tagspreadsheetupload.png)

{: .note }
> Tags and tag groups can only be uploaded via a spreadsheet if there are no existing tags or tag groups in the project.

{: .warning }
> DO NOT DELETE “Uncategorized” tag category.

## Adding Tags and Tag Groups
Users can add tags and tag groups on the `Data Manager` page. To add additional tag groups, select the `+ Tag Group` button. To add additional tags, select the `+ Tag` found at the bottom of each tag group.
![Image3](../../assets/datamanagertags1.png)

## Managing Tags and Tag Groups
To manage individual tags, go to the `Tag` dashboard under the `Data Manager` page. To edit individual tags, select the pencil icon next to the tag to change its name and tag group. To delete individual tags, select the trash icon next to the tag. Once edited, tags will change across all annotations.
![Image 4](../../assets/edittagimage1.png)
![Image 5](../../assets/edittagimage2.png)

To manage tag groups, go to the `Tag` dashboard under the `Data Manager` page. To edit tag groups, click the three-dot menu next to the tag group's name and select edit. To delete the tag group, click the three-dot menu next to the tag group's name and select delete. Once edited, tag groups will change across all annotations.
![Image 6](../../assets/edittaggroup1.png)
![Image 7](../../assets/edittaggroup2.png)
