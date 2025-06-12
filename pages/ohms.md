---
title: Converting Legacy OHMS
layout: home
parent: Project Basics
grand_parent: Projects
nav_order: 4
---

Legacy OHMS XML files may be converted to AVAnnotate projects using this method.

![Image 4: ](../../assets/ohms.png)

### To produce an AVAnnotate project from an OHMS item:

1) Locate OHMS xml file for audio item.

#### Remove unconvertable material
Some OHMS-XML files contain header information with item-level data which is difficult for commercial converters to handle.  This must be removed before conversion, or else the converter is likely to produce a single-row spreadsheet unusable for AVAnnotate

2) Use a text editor to delete the following elements from the file:
  a) All elements between the opening `record` tag and the `index` tag beginning timestamped annotations.  (This may include `version`, `date`, `series_id` and others.)
  b) `vtt_transcript` (at the bottom of the file)

#### Convert the XML file to a CSV File
3)  Go to: [https://www.convertcsv.com/xml-to-csv.htm](https://www.convertcsv.com/xml-to-csv.htm)
4)  Upload your OHMS xml file into the field in step 1.  ![Upload the file](assets/images/UploadOHMSFile.png)
5)  Skip step 2.
6)  In step 3, "Generate output", Choose "XML to Excel".  This will automatically generate an Excel file for download.  ![Generate the Excel file](assets/images/XMLtoExcel.png)

#### Process the spreadsheet
6) Update keyword delimiters
If there are keywords in the OHMS file, open the file in Excel, search and replace semicolons (;) with pipes (|) within the "keywords" column and save.  (The same may be necessary if using the Subjects field.)

7) Add an `end_time` column.  AVAnnotate requires start and end times for annotations, but many OHMS project only annotate a point in time.  Add a new End Time column to the spreadsheet and copy the start time (up-shifted one row) values into it.

#### Add the spreadsheet to AVAnnotate
After creating a new project and item in AVAnnotate, upload the OHMS spreadsheet file.  Each type of data coming from OHMS will require a separate upload -- once for each annotation set from the columns in the spreadsheet.  Typically `partial transcript`, `synopsis`, and `title` make appropriate columns to convert into annotation sets.  Typical OHMS files use both `keywords` and `subjects`.  The `keywords` tend to be more similar to AVAnnotate tags. It is recommended to import that column as tags each time the OHMS spreadsheet is imported.
