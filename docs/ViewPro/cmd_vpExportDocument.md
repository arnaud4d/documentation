---
id: vpExportDocument
title: VP EXPORT DOCUMENT
---

The `VP EXPORT DOCUMENT` command <!-- REF _command_.VP_EXPORT_DOCUMENT.Summary -->exports the 4D View Pro object attached to the 4D View Pro area *vpAreaName* to a document on disk according to the *filePath* and *paramObj* parameters<!-- END REF -->. 


<!-- REF _command_.VP_EXPORT_DOCUMENT.Syntax -->**VP EXPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text {; *paramObj* : Object} )<!-- END REF -->  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v16 R4|Added|
|v17 R3|Modified|
|v18|Modified|
</details>

<!-- REF _command_.VP_EXPORT_DOCUMENT.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|filePath| Text|->|Pathname of the document|
|paramObj| Object|->|Export options|
<!-- END REF -->  

### Description

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In *filePath*, pass the destination path and name of the document to be exported. You can specify the document format by including its extension, 4D View Pro (".4vp"), Microsoft Excel (".xlsx"), or PDF (".pdf") after the document's name. If you pass only the document name, it will be saved at the same level as the 4D structure file with the default ".4vp" extension.

The optional *paramObj* parameter allows you to define multiple properties for the exported 4D View Pro object, as well as launch a callback method when the export has completed.

 
 
|Property|	Type|	Description|
|---|---|---
|format|	text|	(optional) When present, designates the exported file format: ".4vp" (default), ".xlsx", or ".pdf". You can pass a constant from the 4D View Pro Constants theme in the format parameter. In this case, 4D adds the appropriate extension to the file name if needed.<p>The following formats are supported:<p><table><tr><td><!-- INCLUDE vk_4D_View_Pro_format2.Syntax --></td></tr><tr><td><!-- INCLUDE vk_MS_Excel_format2.Syntax --></td></tr><tr><td><!-- INCLUDE vk_pdf_format2.Syntax --></td></tr></table><br><p>If the format specified doesn't correspond with the extension in *filePath*, it will be added to the end of *filePath*. If a format is not specified and no extension is provided in *filePath*, the default file format is used.|
|password|	text|	Microsoft Excel only (optional) - Password used to protect the MS Excel document|
|formula|	object	|Callback method to be launched when the export has completed. Using a callback method is necessary when the export is asynchronous (which is the case for PDF and Excel formats) if you need some code to be executed after the export. The callback method must be used with the `Formula` command (see below for more information).|
|valuesOnly|	boolean|	Specifies that only the values from formulas (if any) will be exported.|
|includeFormatInfo|	boolean|	True to include formatting information, false otherwise (default is true). Formatting information is useful in some cases, e.g. for export to SVG. On the other hand, setting this property to **false** allows reducing export time.|
|sheetIndex|	number|	PDF only (optional) - Index of sheet to export (starting from 0). -2=all visible sheets (**default**), -1=current sheet only|
|pdfOptions|	object|	PDF only (optional) - Options for the pdf export <p><table><tr><th>Property</th><th>Type</yh><th>Description</th></tr><tr><td>creator</td><td>text</td><td>name of the application that created the original document from which it was converted.</td></tr><tr><td>title</td><td>text</td><td>title of the document.</td></tr><tr><td>author</td><td>text</td><td>name of the person who created that document.</td></tr><tr><td>keywords</td><td>text</td><td>keywords associated with the document.</td></tr><tr><td>subject</td><td>text</td><td>subject of the document.</td></tr></table>|
|\<customProperty>|	any|	Any custom property that will be available through the $3 parameter in the callback method.|

>**Notes about Excel format**: 
>
>*	When exporting a 4D View Pro document into a Microsoft Excel-formatted file, some settings may be lost. For example, 4D methods and formulas are not supported by Excel. You can verify other settings with [this list](http://help.grapecity.com/spread/SpreadSheets10/webframe.html#excelexport.html) from GrapeCity.
>
>*	Exporting in this format is run asynchronously, use the *formula* property of the *paramObj* for code to be executed after the export. 



>**Notes about PDF format**: 
>
>*	When exporting a 4D View Pro document in PDF, the fonts used in the document are automatically embedded in the PDF file. Only OpenType fonts (.OTF or .TTF files) having a Unicode map can be embedded. If no valid font file is found for a font, a default font is used instead. 
>
>*	Exporting in this format is run asynchronously, use the *formula* property of the *paramObj* for code to be executed after the export.

Once the export operation is finished, `VP EXPORT DOCUMENT` automatically triggers the execution of the method set in the *formula* property of the *paramObj*, if used. 


#### Passing a callback method (formula)  

When including the optional *paramObj* parameter, the `VP EXPORT DOCUMENT` command allows you to use the `Formula` command to call a 4D method which will be executed once the export has completed. The callback method will receive the following values in local variables:

|Variable|		|Type|	Description|
|---|---|---|---|
|$1|		|text|	The name of the 4D View Pro object|
|$2|		|text|	The filepath of the exported 4D View Pro object|
|$3|		|object|	A reference to the command's *paramObj*|
$4|		|object|	An object returned by the method with a status message|
||.success	|boolean|	True if export with success, False otherwise.|
||.errorCode	|integer|	Error code. May be returned by 4D or JavaScript.|
||.errorMessage	|text|	Error message. May be returned by 4D or JavaScript.|


### Example 1 

You want to export the contents of the "VPArea" area to a 4D View Pro document on disk:

```4d
C_TEXT($docPath)
 
$docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
VP EXPORT DOCUMENT("VPArea";$docPath)
//MyExport.4VP is saved on your disk
```


### Example 2 

You want to export the current sheet in PDF:

```4d
C_OBJECT($params)
$params:=New object
$params.format:=vk pdf format
$params.sheetIndex:=-1
$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)
VP EXPORT DOCUMENT("VPArea";"report.pdf";$params)
```


### Example 3 

You want to export a 4D View Pro document in ".xlsx" format and call a method that will launch Microsoft Excel with the document open once the export has completed:

```4d
 $params:=New object
 $params.formula:=Formula(AfterExport)
 $params.format:=vp MS Excel format //".xlsx"
 $params.valuesOnly:=True
 
 VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\convertedfile";$params)
```

***AfterExport*** method:

```4d
 C_TEXT($1;$2)
 C_OBJECT($3;$4)
 $areaName:=$1
 $filePath:=$2
 $params:=$3
 $status:=$4
 
 If($status.success=False)
    ALERT($status.errorMessage)
 Else
    LAUNCH EXTERNAL PROCESS("C:\\Program Files\\Microsoft Office\\Office15\\excel "+$filePath)
 End if
```