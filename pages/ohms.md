---
title: Converting Legacy OHMS
layout: home
parent: Project Basics
grand_parent: Projects
nav_order: 7
---
# Converting Legacy OHMS

The [Louie B. Nunn Center for Oral History](https://libraries.uky.edu/locations/special-collections-research-center/louie-b-nunn-center-oral-history){:target="_blank" rel="noopener"} at the University of Kentucky Libraries created a web-based system called OHMS (Oral History Metadata Synchronizer) to inexpensively and efficiently enhance access to oral history online. [Learn more about OHMS](https://www.oralhistoryonline.org/){:target="_blank" rel="noopener"}.

Legacy OHMS XML files may be converted to AVAnnotate projects using this method.

![Image 4](../../assets/ohms.png)

## To produce an AVAnnotate project from an OHMS item:

1) Locate the OHMS XML file for the audio item.

{: .warning }
> Some OHMS-XML files contain header information with item-level data, which can be challenging for commercial converters to handle. This must be removed before conversion, or the converter is likely to produce a single-row spreadsheet that is unusable for AVAnnotate.

2) Use a text editor to delete the following elements from the file:

  a) All elements between the opening `record` tag and the `index` tag. This may include `version`, `date`, `series_id`, and others.

  b) `vtt_transcript` at the bottom of the file.

### Convert the XML file to a CSV File
3)  Go to: [https://www.convertcsv.com/xml-to-csv.htm](https://www.convertcsv.com/xml-to-csv.htm){:target="_blank" rel="noopener"}
   
4)  Upload the OHMS XML file into the Step 1 field.

6)  Skip Step 2.

7) In Step 3, "Generate output, " choose "XML to Excel." This will automatically generate an Excel file for download.

![Image 6](../../assets/XMLtoExcel.png)

### Process the spreadsheet

8) Update keyword delimiters
If there are keywords in the OHMS file, open the file in Excel, search and replace semicolons (;) with pipes (|) within the "keywords" column, and save. The same may be necessary if using the Subjects field.

9) AVAnnotate requires start and end times for annotations, but many OHMS projects only annotate a point in time. Add a new `end_time` column to the spreadsheet and copy the start time from the next row into it. Do this by copying the start time column and pasting it into the stop time column one row earlier.

### Add the spreadsheet to AVAnnotate
10) After creating a new project and item in AVAnnotate, upload the OHMS spreadsheet file. Each type of data coming from OHMS will require a separate upload -- one for each of OHMS' "keywords" and "subjects" from the columns in the spreadsheet. Typically, `partial transcript`, `synopsis`, and `title` make suitable columns to convert into annotation sets. Typical OHMS files use both `keywords` and `subjects`. The `keywords` tend to be more similar to AVAnnotate tags. It is recommended to import that column as tags each time the OHMS spreadsheet is imported.

For example, upload the annotation file the first time using the "title" as the annotation and the "keywords" as the tags into an annotation set called "title". Upload the same file again using only the "partial transcription" as the annotation and "keywords" as tags into an annotation set called "partial transcript." Similarly, upload the "synopsis" as the annotation and use the "keywords" as tags into an annotation set called "synopsis".
