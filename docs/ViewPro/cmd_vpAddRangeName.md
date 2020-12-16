---
id: vpAddRangeName
title: VP ADD RANGE NAME
---

The `VP ADD RANGE NAME` command <!-- REF _command_.VP_ADD_RANGE_NAME.Summary -->creates or modifies a named range in the open document<!-- END REF -->.

>Named ranges created by this command are saved with the document.


<!-- REF _command_.VP_ADD_RANGE_NAME.Syntax -->**VP ADD RANGE NAME** ( *rangeObj* : Object ; *name* : Text { ; *options* : Object } )<!-- END REF -->  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

<!-- REF _command_.VP_ADD_RANGE_NAME.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Text|->|Range object |
|name|Text|->|Name for the fomula|	
|options|Object|->|Options for the named formula|
<!-- END REF -->  

### Description

In *rangeObj*, pass the range that you want to name and in *name*, pass the new name for the range. If the name is already used within the same scope, the new named range replaces the existing one. Note that you can use the same name for different scopes (see below).

You can pass an object with additional properties for the named range in *options*. The following properties are supported:

 
|Property	|Type|Description|
|---|---|---|
|scope|	Number|	Scope for the range. You can pass the sheet index (counting begins at 0) or use the following constants: <p><li><!-- INCLUDE vk_current_sheet2.Syntax --></li><li><!-- INCLUDE vk_workbook2.Syntax --></li><p><p>**Note**: The scope determines whether a range name is local to a given worksheet (*scope*=sheet index or `vk current sheet`), or global across the entire workbook (*scope*=`vk workbook`).|
|comment|Text|Comment associated to named range|

>*	A named range is actually a named formula containing coordinates. `VP ADD RANGE NAM`E facilitates the creation of named ranges, but you can also use the [VP ADD FORMULA NAME](cmd_vpAddFormulaName) command to create named ranges.
*	Formulas defining named ranges can be retrieved with the [VP Get formula by name](cmd_vpGetFormulaByName) command.



### Example  

You want to create a named range for a cell range:

```4d
$range:=VP Cell("ViewProArea";2;10)
 VP ADD RANGE NAME($range;"Total1")
```