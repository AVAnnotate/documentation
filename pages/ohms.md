
title: Converting Legacy OHMS
layout: home
parent: Project Basics
grand_parent: Projects
nav_order: 7


NOTES for updating this page later: 
You are absolutely right about the flexibility of AVAnnotate vs. OHMS.  The only reason I recommended uploading the different OHMS fields as separate sets was because I was trying to come up with a one-to-one model for migrating OHMS annotations to AVAnnotate without losing anything.

In OHMS, you have one time range that has up to a dozen structured attributes--title, summary, subjects, keywords, partial transcript, etc--which are pre-defined.  Many--perhaps most--of these attributes are left blank by different projects; I've only encountered one that used keyword translations, for example.

In AVAnnotate, a single time range has two attributes: annotation and tags.  There is also the set the annotation belongs to, which can act as a sort of type, as with Kylie's SENT project with one set per S, E, N & T.

Without knowing anything about the intent of the people who created the OHMS example, I tried to map every non-blank attribute in the OHMS structure to an annotation or tag in AVAnnotate, not skipping any of them.  As a result, I converted the XML file to a single spreadsheet with a column for all dozenish attributes, then re-uploaded it to AVAnnotate a few times, choosing different columns each time to create a "summary' set, a "transcript" set, etc.  This seemed kind of arbitrary at the time, and I felt like only having one or two sets for summary and transcript would have made more sense, or combining the columns into a single column which I could use for an annotation might be better.

# Converting Legacy OHMS

The [Louie B. Nunn Center for Oral History](https://libraries.uky.edu/locations/special-collections-research-center/louie-b-nunn-center-oral-history){:target="_blank" rel="noopener"} at the University of Kentucky Libraries created a web-based system called OHMS (Oral History Metadata Synchronizer) to inexpensively and efficiently enhance access to oral history online. [Learn more about OHMS](https://www.oralhistoryonline.org/){:target="_blank" rel="noopener"}.

Legacy OHMS XML files may be converted to AVAnnotate projects using the following method.

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

9) AVAnnotate requires start and end times for annotations, but many OHMS projects only annotate a point in time. A point in time can be replicated in AVAnnotate: add a new `end_time` column to the spreadsheet and copy the OHMS start times to this colummn.

### Add the spreadsheet to AVAnnotate
10) After [creating a new Project](https://avannotate.github.io/documentation/pages/creating_projects/) and [Event](https://avannotate.github.io/documentation/pages/events/) in AVAnnotate, upload the edited OHMS spreadsheet as an [Annotation set](https://avannotate.github.io/documentation/pages/annotationsets/). Each type of data coming from OHMS will require a separate annotation set -- one for each of OHMS' "keywords" and "subjects" from the columns in the OHMS spreadsheet. Typically, `partial transcript`, `synopsis`, and `title` make suitable columns to convert into annotation sets. Typical OHMS files use both `keywords` and `subjects`. The `keywords` tend to be more similar to [AVAnnotate tags](https://avannotate.github.io/documentation/pages/tags/). It is recommended to import that column as tags each time the OHMS spreadsheet is imported.

For example, upload an annotation set using the "title" information as the annotation body and "keywords" as the tags. Upload a second annotation set using only the "partial transcription" as the annotation body and "keywords" as tags. Call this annotation set, "partial transcript." Upload a third annotation set using the "synopsis" as the annotation body and use the "keywords" as tags into an annotation set called "synopsis".
