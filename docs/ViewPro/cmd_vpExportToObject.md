---
id: vpExportToObject
title: VP Export to object
---

The `VP Export to object` command <!-- REF _command_.VP_Export_to_object.Summary --> returns the 4D View Pro object attached to the 4D View Pro area *vpAreaName*<!-- END REF -->. You can use this command for example to store the 4D View Pro area in a 4D database object field.


<!-- REF _command_.VP_Export_to_object.Syntax -->**VP Export to object** ( *vpAreaName* : Text {; *option* : Object} ) : Object<!-- END REF -->  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v16 R4|Added|
</details>

<!-- REF _command_.VP_Export_to_object.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|option| Object|->|Export option|
|Result| Object|<-|4D View Pro object|
<!-- END REF -->  

### Description

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In the *option* parameter, you can pass the following export option, if required:
 
 
|Property|	Type|	Description|
|---|---|---
|includeFormatInfo|	boolean|True to include formatting information, false otherwise (default is **true**). Formatting information is useful in some cases, e.g. for export to SVG. On the other hand, setting this property to **false** allows reducing export time.	|

For more information on 4D View Pro objects, please refer to the [4D View Pro object](vpLanguageOverview.md#4d-view-pro-object) paragraph.




### Example 1 

You want to get the "version" property of the current 4D View Pro area:

```4d
C_OBJECT($vpAreaObj)
C_LONGINT($vpVersion)
$vpAreaObj:=VP Export to object("vpArea")
 // $vpVersion:=OB Get($vpAreaObj;"version")
$vpVersion:=$vpAreaObj.version
```


### Example 2 

You want to export the area, excluding formatting information:

```4d
C_OBJECT($vpObj)
$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))
```

