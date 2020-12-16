---
id: vpColumn
title: VP Column
---

The `VP Column` command <!-- REF _command_.VP_Column.Summary -->returns a new range object referencing a specific column or columns<!-- END REF -->. 

<!-- REF _command_.VP_Column.Syntax -->**VP Column** ( *vpAreaName* : Text ; *column*: Longint ; *columnCount* : Longint { ; *sheet* : Longint } ) : Object<!-- END REF -->  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

<!-- REF _command_.VP_Column.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|column| Longint|->|Column index|
|columnCount| Longint|->|Number of columns|
|sheet|Longint|->|Sheet index (current sheet if omitted)|	
|Result|Object|<-|Range object of cells|
<!-- END REF -->  

### Description

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *column* parameter defines the first column of the column range. Pass the column index (counting begins at 0)  in this parameter. If the range contains multiple columns, you should also use the optional *columnCount* parameter.

The optional *columnCount* parameter allows you to define the total number of columns of the range. *columnCount* must be greater than 0. If omitted, the value will be set to 1 by default and a column type range is created.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	<!-- INCLUDE vk_current_sheet2.Syntax -->




### Example  

You want to define a range object for the column shown below (on the current spreadsheet):

![](assets/en/ViewPro/cmd_vpColumn.PNG)

The code would be:

```4d
 $column:=VP Column("ViewProArea";3) // column D
```
