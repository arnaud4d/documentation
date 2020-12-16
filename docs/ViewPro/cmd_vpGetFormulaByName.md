---
id: vpGetFormulaByName
title: VP Get formula by name
---

The `VP Get formula by name` command <!-- REF _command_.VP_Get_formula_by_name.Summary --> returns the formula and comment corresponding to the named range or named formula passed in the *name* parameter, or **null** if it does not exist in the defined scope<!-- END REF -->. 


<!-- REF _command_.VP_Get_formula_by_name.Syntax -->**VP Get formula by name** ( *vpAreaName* : Text ; *name* : Text { ; *scope* : Number } ) : Object<!-- END REF -->  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF _command_.VP_Get_formula_by_name.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area form object name|
|name  |Text|->|Name of the named range|
|scope  |Number|->|Target scope (default=current sheet)|
|Result  |Text|<-|Named formula or named range definition|
<!-- END REF -->  

### Description

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned. 

Pass the named range or named formula that you want to get in *name*. Note that named ranges are returned as formulas containing absolute cell references.

You can define where to get the formula in *scope* using either the sheet index (counting begins at 0) or the following constants:

*	<!-- INCLUDE vk_current_sheet2.Syntax --> 
*	<!-- INCLUDE vk_workbook2.Syntax --> 
 
 
#### Returned Object

The returned object contains the following properties:

|Property|	Type|	Description|
|---|---|---|
|formula	|Text	|Text of the formula corresponding to the named formula or named range. For named ranges, the formula is a sequence of absolute coordinates.|
|comment|	Text|	Comment corresponding to the named formula or named range |
 
### Example 

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)
 
$formula:=VP Get formula by name("ViewProArea";"Total1")
  //$formula.formula=Sheet1!$A$1
 
$formula:=VP Get formula by name("ViewProArea";"Total")
  //$formula=null (if not existing)
```


