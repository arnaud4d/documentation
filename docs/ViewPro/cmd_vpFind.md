---
id: vpFind
title: VP Find
---

The `VP Find` command <!-- REF _command_.VP_Find.Summary -->searches the *rangeObj* for the *searchValue*<!-- END REF -->. Optional parameters can be used to refine the search and/or replace any results found.  


<!-- REF _command_.VP_Find.Syntax -->**VP Find** (  *rangeObj* : Object ; *searchValue* : Text { ; *searchCondition* : Object {; *replaceValue* : Text } } ) : Object<!-- END REF -->  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|
</details>

<!-- REF _command_.VP_Find.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|searchValue |Text|->|Search value|
|searchCondition |Object|->|Object containing search condition(s)|
|replaceValue  |Text|->|Replacement value|
|Result|Object|<-|Range object|
<!-- END REF -->  

### Description

In the *rangeObj* parameter, pass an object containing a range to search.  

The *searchValue* parameter lets you pass the text to search for within the *rangeObj*.  

You can pass the optional *searchCondition* parameter to specify how the search is performed. The following properties are supported:  
 
 
|Property|	Type|	Description|
|---|---|---
|afterColumn|Longint|The number of the column just before the starting column of the search. If the *rangeObj* is a combined range, the column number given must be from the first range. Default value: -1 (beginning of the *rangeObj*)|
|afterRow|Longint|The number of the row just before the starting row of the search. If the *rangeObj* is a combined range, the row number given must be from the first range. Default value: -1 (beginning of the *rangeObj*) |
|all|Boolean |<li>True - All cells in *rangeObj* corresponding to *searchValue* are returned</li><li>False - (default value) Only the first cell in *rangeObj* corresponding to *searchValue* is returned</li>|
|flags|	Longint|<table><tr><td><!-- INCLUDE vk_find_flag_exact_match2.Syntax --></td></tr><tr><td><!-- INCLUDE vk_find_flag_ignore_case2.Syntax --></td></tr><tr><td><!-- INCLUDE vk_find_flag_none2.Syntax --></td></tr><tr><td><!-- INCLUDE vk_find_flag_use_wild_cards2.Syntax --></td></tr></table><p>These flags can be combined. For example:<p> <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code>|
|order|	Longint |<table><tr><td><!-- INCLUDE vk_find_order_by_columns2.Syntax --></td></tr><tr><td><!-- INCLUDE vk_find_order_by_rows2.Syntax --></td></tr></table> |
|target|Longint|<table><tr><td><!-- INCLUDE vk_find_target_formula2.Syntax --></td></tr><tr><td><!-- INCLUDE vk_find_target_tag2.Syntax --></td></tr><tr><td><!-- INCLUDE vk_find_target_text2.Syntax --></td></tr></table><p>These flags can be combined. For example:<p> <code>$search.target:=vk find target formula+vk find target text</code>|

In the optional *replaceValue* parameter, you can pass text to take the place of any instance of the text in *searchValue* found in the *rangeObj*.

 

#### Returned Object

The function returns a range object describing each search value that was found or replaced. An empty range object is returned if no results are found.



### Example 1 

To find the first cell containing the word "Total": 

```4d
var $range;$result : Object
 
$range:=VP All("ViewProArea")
 
$result:=VP Find($range;"Total")
```


### Example 2 

To find "Total" and replace it with "Grand Total":  

```4d
var $range;$condition;$result : Object
 
$range:=VP All("ViewProArea")
 
$condition:=New object
$condition.target:=vk find target text
$condition.all:=True //Search entire document
$condition.flags:=vk find flag exact match
 
  // Replace the cells containing only 'Total' in the current sheet with "Grand Total"
$result:=VP Find($range;"Total";$condition;"Grand Total")
 
  // Check for empty range object 
If($result.ranges.length=0)
    ALERT("No result found")
Else
    ALERT($result.ranges.length+" results found")
End if
```

