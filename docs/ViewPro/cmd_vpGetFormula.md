---
id: vpGetFormula
title: VP Get formula
---

The `VP Get formula` command <!-- REF _command_.VP_Get_formula.Summary -->retrieves the formula from a designated cell range<!-- END REF -->. 


<!-- REF _command_.VP_Get_formula.Syntax -->**VP Get formula** ( *rangeObj* : Object) : Text<!-- END REF -->  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF _command_.VP_Get_formula.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj  |Object|->|Range object|
|Result  |Text|<-|Formula|
<!-- END REF -->  

### Description

In *rangeObj*, pass a range whose formula you want to retrieve. If *rangeObj* designates multiple cells or multiple ranges, the formula of the first cell is returned. If *rangeObj* is a cell that does not contain a formula, the command returns an empty string.

### Example 

```4d
  //set a formula
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
 
$result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"
```


