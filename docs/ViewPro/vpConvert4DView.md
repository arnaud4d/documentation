---
id: vpConvert4DView
title: Converting 4D View documents
---

You can convert your 4D View documents to 4D View Pro areas using the `VP Convert from 4D View` command. Most properties and information stored in 4D View documents are automatically converted, including formats, styles, borders, values, formulas, selections, zoom, etc. In general, converted 4D View documents will be rendered in 4D View Pro areas exactly as they were rendered in 4D View areas, like the following:

*Original 4D View document:*

![](assets/en/ViewPro/vpConvert1.png)

*Document converted in 4D View Pro area:*

![](assets/en/ViewPro/vpConvert2.png)

We are doing our best to ensure that converted documents remain as true as possible to the original, but some features may not be fully rendered. These are described in the paragraph below.

## Conversion process  

>The 4D View document conversion feature is being continuously improved, based on customer feedback. It is highly recommended to always keep a copy of your original 4D View BLOBs or documents, even after a successful conversion.

With regards to the current state of your 4D View plug-in document, the conversion process requires the following steps.

1.	Load your 4D View document (.4pv) into a BLOB:  
	>If your 4D View document is already stored in a BLOB field, go to step 2.  

 	```4d
 	C_BLOB($pvblob)
 	DOCUMENT TO BLOB("document.4PV";$pvblob)
 	```
 	
2.	Call `VP Convert from 4D View` with the BLOB containing the 4D View document:  
  
  	```4d
  	C_OBJECT($vpObj)
  	$vpObj:=VP Convert from 4D View($pvblob)
  	```
  	
3.	Assign the resulting object to a 4D View Pro area form object or a document to see the results.  
  
   	```4d
   	VP IMPORT FROM OBJECT("4DViewProArea";$vpObj)
   	```

## Conversion details  

The following table provides the current status for the primary conversion areas. Note that this list will be updated regularly, as the conversion process is continuously improved. 

|Feature|	Conversion status|	Comments|
|---|---|---|
|**Document attributes**|	Document display attributes are converted: selected cells, zoom, grid display.<p><p>Document information is converted: version, title, subject author, company, note, creation and modification date.| |
|**Columns and rows**|	All defined columns and rows are converted with their original size.<p><p>Column and row headers are converted without any restrictions.|	|
|**Borders**|	Borders are converted with their thickness and color. Grid display settings are converted.|	Only one single bar border and one double-bar border models are available in 4D View Pro. Single bar borders are converted the same as the original, any double-bar borders are converted to the 4D View Pro double-bar model.|
|**Splitters**|	Currently not converted||
|**Styles & fonts**|	Styles and style sheets are converted. Conditional styles are not supported.<p>Rotation styles (oriented text) are currently not converted|Deprecated text styles (i.e. Shadow, Condensed, etc.) and QuickDraw fonts are not converted.|
|**Formats & cell names**|	Cell formats are converted to available formats with similar rendering. All data type formats are supported: text, number, date and time, boolean, picture. Cell names are converted.<p><p>User defined 4D formats (starting with "&#124;") are currently not converted<p><p>Controls created with PV SET CELL CONTROL (button / radio button / check box / drop down / combo box) are currently not supported<p>Invisible cells are not supported (not available in 4D View Pro)|**COMPATIBILITY NOTE:** As of 4D v17 R5, 4D View Pro default formats rely on the same regional settings as the 4D host database. <p>Only columns, rows, or sheets can be set invisible. An alternate solution is to use `VP ADD FORMULA NAME` to define non-displayed values or formulas.|
|**Pictures**|	Pictures are supported and converted with some limitations<p>Pictures with truncated centered / replicated format are currently not converted|4D View picture format included multiple codecs and is deprecated. Converted pictures keep only the most appropriate codec for html rendering (svg, png, jpeg, gif) and are saved in base64.<p>Background pictures are not replicated on each page (this concept does not exist in 4D View Pro).|
|**Printing**|	Currently not supported	|Printing options and print settings defined in the 4D View document are converted.|
|**Dynamic links**|	Cells or columns linked to fields or variables are currently not supported|	|
|**Formulas**|	Formulas are converted but for security reasons, references to 4D project methods, commands, variables, or fields need specific processing (see below)|	See *Converting 4D View plug-in formulas*.|
||Project methods - **supported**|	Project methods must comply with 4D View Pro requirements (see *Project method references*). A non compliant method name is converted to UNSUPPORTED_4DMETHOD_NAME("\<method name>",param1,...paramN).|
||Commands - **supported**|	Converted to existing 4D View Pro functions (see *Functions and 4D commands*). 4D commands that are not part of the authorized list are converted to: UNSUPPORTED_4DCOMMAND(\<command name>,param1,...,paramN).|
||Variables - **not supported**|	You must use 4D project methods to access variable values (see *Project method references*). Variables in formulas are converted to UNSUPPORTED_VARIABLE("\<variable name>").|
||Fields - **supported**|	Converted to "TABLETITLE_FIELDTITLE()" if available in the database during conversion. If a field or table name is not ECMA compliant, converted to UNSUPPORTED_TABLE_FIELD_TITLE("virtual structure name"). Only fields belonging to the "virtual structure" of the database can be called in 4D View Pro formulas. See *Field references*.|