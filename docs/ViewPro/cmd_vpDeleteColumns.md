---
id: vpDeleteColumns
title: VP DELETE COLUMNS
---

The `VP DELETE COLUMNS` command <!-- REF _command_.VP_DELETE_COLUMNS.Summary -->removes the columns in the *rangeObj*<!-- END REF -->. 


<!-- REF _command_.VP_DELETE_COLUMNS.Syntax -->**VP DELETE COLUMNS** ( *rangeObj* : Object )<!-- END REF -->  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

<!-- REF _command_.VP_DELETE_COLUMNS.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Object|->|Range object|
<!-- END REF -->  

### Description

In *rangeObj*, pass an object containing a range of columns to remove. If the passed range contains:

*	both columns and rows, only the columns are removed. 
*	only rows, the command does nothing.

>Columns are deleted from right to left.

#### Function result

The command returns a picture in SVG format.


### Example  

To delete columns selected by the user (in the image below columns B, C, and D):

![](assets/en/ViewPro/cmd_vpDeleteColumns.PNG)

use the following code:

```4d
VP DELETE COLUMNS(VP Get selection("ViewProArea"))
```

