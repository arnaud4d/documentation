---
id: vpGetColumnAttributes
title: VP Get column attributes
---

The `VP Get column attributes` command <!-- REF _command_.VP_Get_column_attributes.Summary -->returns a collection of properties for any column in the *rangeObj*<!-- END REF -->. 


<!-- REF _command_.VP_Get_column_attributes.Syntax -->**VP Get column attributes** (  *rangeObj* : Object ) : Collection<!-- END REF -->  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

<!-- REF _command_.VP_Get_column_attributes.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj  |Object|->|Range object|
|Result  |Collection|<-|Collection of column properties|
<!-- END REF -->  

### Description

In *rangeObj*, pass an object containing a range of the columns whose attributes will be retrieved.

The returned collection contains any properties for the columns, whether or not they have been set by the [`VP SET COLUMN ATTRIBUTES`](cmd_vpSetColumnAttributes.md) command.


### Example 

The following code:

```4d
C_OBJECT($range)
C_COLLECTION($attr)
 
$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get column attributes($range)
```

will return a collection of the attributes within the given range:

![](assets/en/ViewPro/cmd_vpGetColumnAttributes.PNG)