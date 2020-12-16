---
id: vpCombineRanges
title: VP Combine Ranges
---

The `VP Combine Ranges` command <!-- REF _command_.VP_Combine_Ranges.Summary -->returns a new range object that incorporates two or more existing range objects<!-- END REF -->. All of the ranges must be from the same 4D View Pro area.



<!-- REF _command_.VP_Combine_Ranges.Syntax -->**VP Combine Ranges** ( *rangeObj* : Object ; *otherRangeObj* : Object {; *otherRangeObj2* : Object ; ... ; *otherRangeObjN* : Object }  ) : Object<!-- END REF -->  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF _command_.VP_Combine_Ranges.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Object|->|Range object|
|otherRangeObj| Object|->|Range object|
|Result| Object|<-|Object containing a combined range|

<!-- END REF -->  

### Description

In *rangeObj*, pass the first range object.

In *otherRangeObj*, pass another range object(s) to combine with *rangeObj*.

>The command incorporates *rangeObj* and *otherRangeObj* objects by reference.

### Example  

You want to combine cell, column, and row range objects in a new, distinct range object:


```4d
 $cell:=VP Cell("ViewProArea";2;4) // C5
 $column:=VP Column("ViewProArea";3) // column D
 $row:=VP Row("ViewProArea";9) // row 10
 
 $combine:=VP Combine ranges($cell;$column;$row)
```

