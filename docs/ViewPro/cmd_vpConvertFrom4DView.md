---
id: vpConvertFrom4DView
title: VP Convert from 4D View
---

The `VP Convert from 4D View` command <!-- REF _command_.VP_Convert_from_4D_View.Summary -->allows you to convert a legacy 4D View document into a 4D View Pro object<!-- END REF -->. 

>This command does not require that the legacy 4D View plug-in be installed in your environment.


<!-- REF _command_.VP_Convert_from_4D_View.Syntax -->**VP Convert from 4D View** ( *4DViewDocument* : Blob ) : Object<!-- END REF -->  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v16 R6|Added|
</details>

<!-- REF _command_.VP_Convert_from_4D_View.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|4DViewDocument| Blob|->|4D View document|
|Result| Object|<-|4D View Pro object	


<!-- END REF -->  

### Description

In the *4DViewDocument* parameter, pass a BLOB variable or field containing the 4D View document to convert. The command returns a 4D View Pro object into which all the information originally stored within the 4D View document is converted to 4D View Pro attributes.

Most of the 4D View document information is directly converted. Unsupported properties or properties which need to be modified during the conversion are listed in the [Converting 4D View documents](vpConvert4DView.md) page.


### Example  

You want to get a 4D View Pro object from a 4D View area stored in a BLOB:


```4d
C_OBJECT($vpObj)
$vpObj:=VP Convert from 4D View($pvblob)
```

