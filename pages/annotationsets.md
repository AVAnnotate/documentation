---
title: Annotation Sets
layout: home
parent: Data Manager
grand_parent: Projects
nav_order: 5
---
# Annotation Sets

An annotation set is a group of annotations for a single AV file. 

Annotation sets can be used to organize annotations into groups. Some examples might include:
- *type*: e.g., one for transcripts, one for notes, and one for captions.
- *language*: e.g., one in English and another in Spanish
- *annotation creators*: e.g., a separate set for each editor on a project.

## Creating and Modifying Default Annotation Sets
When [annotations are added to an event](https://avannotate.github.io/documentation/pages/annotations/) either individually or by uploading a spreadsheet, AVAnnotate creates a 'Default' annotation set. This annotation set will appear in [`Event` settings](https://avannotate.github.io/documentation/pages/events/).

{: .warning }
> The 'Default' annotation set *can* be renamed, but *cannot* be deleted. Once annotations are added to the event, *there must be at least one annotation set*. To delete the default annotation set (even when it is renamed), delete the event or create a new set and delete the default annotation set.

## Creating and Modifying Additional Annotation Sets

### Add, import, and edit annotation sets using [`Event` settings](https://avannotate.github.io/documentation/pages/events/)..
![image 1](../../assets/newannotationssetimage1.png)

### Add an annotation set 
1. Select `Add` on the Annotation Sets menu on the `Event` settings page. 
[ADD PICTURE]

2. Create a title for the Annotation Set and select the AV file associated with the Annotation Set. Save the new event setting.
   [ADD PICTURE]

### Import annotations to an annotation set 
There are two ways to import an annotation spreadsheet to a new annotation set.
1. Select `Import` under the `Add` menu on an Event's page. 
![image 2](../../assets/newannotationssetimage2.png)

2. Select `Import` on the Annotation Sets menu on the `Event` settings page.
[ADD PICTURE]

Both approaches will take result in the opportunity to upload an [annotation spreadsheet file](https://avannotate.github.io/documentation/pages/templates/) under the preferred annotation set name. 
[ADD PICTURE]

{: .warning }
> If an annotation spreadsheet is added to an annotation set with *existing* annotations, the new annotations will be added to the existing set. 

### Delete or rename additional annotation sets from `Event` settings.
![image 4](../../assets/newannotationssetimage4.png)

### Use an Annotation Set as captions for video
On the Event settings page, select the three-dot menu for the Annotation set settings and toggle on "Use for captions." Optionally, a tag category for the speaker can also be selected from this page.

{: .warning }
> Selecting an annotation set for an AV file's captions source does not work for YouTube, which has its own captioning system.

![image 5](../../assets/newannotationssetimage5.png)
