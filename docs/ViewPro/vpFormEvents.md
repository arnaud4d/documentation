---
id: vpFormEvents
title: Form Events
---

The following form events are available in the Property List for 4D View Pro areas:

![](assets/en/ViewPro/vpFormEvents.PNG)

Some of the events are standard form events (available to all active objects) and some are specific 4D View Pro form events. The specific 4D View Pro form events provide additional information in the object returned by the `FORM Event` command when they are generated for 4D View Pro areas. The following table shows which events are standard and which are specific 4D View Pro form events:

|Standard 4D events (see `Form event code`)	|Specific 4D View Pro events|
|---|---|
|On Load 	|On VP Ready|
|On Getting Focus	|On Clicked|
|On Losing Focus 	|On Double Clicked|
|On Unload 	|On Header Click|
| 	|On After Edit|
| 	|On Selection Change|
| 	|On Column Resize|
| 	|On Row Resize|
| 	|On VP Range Changed|


## On VP Ready

Any 4D View Pro area initialization code, for loading or reading values from or in the area, must be located in the `On VP Ready` form event of the area. This form event is triggered once the area loading is complete. Testing this event makes you sure that the code will be executed in a valid context. An error is returned if a 4D View Pro command is called before the `On VP Ready` form event is generated.

>4D View Pro areas are loaded asynchronously in 4D forms. It means that the standard `On load` form event cannot be used for 4D View Pro initialization code, since it could be executed before the loading of the area is complete. `On VP Ready` is always generated after `On load`.



## On Clicked  

Clicking anywhere on a 4D View Pro document generates the `On Clicked` event. The object returned by the `FORM Event` command contains:

 

|Property|	Type	|Description|
---|---|---|
|code	|longint|	`On Clicked`|
|description|	text|	"On Clicked"|
|objectName|	text|	4D View Pro area name|
|sheetName|	text	|Name of the sheet of the event|
|range|	object	|Cell range|


**Example**:

```4d
 If(FORM Event.code=On Clicked)
    VP SET CELL STYLE(FORM Event.range;New object("backColor";"green"))
 End if
```


## On Double Clicked 
 
When a user double clicks anywhere on a 4D View Pro document, the `On Double Clicked` event is generated. The object returned by the `FORM Event` command contains:

 

|Property|	Type	|Description|
|---|---|---|
|code|	longint|	`On Double Clicked`|
|description|	text|	"On Double Clicked"|
|objectName|	text|	4D View Pro area name|
|sheetName|	text|	Name of the sheet of the event|
|range|	object|	Cell range|
 

**Example**:

```4d
 If(FORM Event.code=On Double Clicked)
    $value:=VP Get value(FORM Event.range)
 End if
```


## On Header Click 

A user clicking on a column or row header in a 4D View Pro document generates the `On Header Click` event. The object returned by the `FORM Event` command contains:

|Property|	Type	|Description|
|---|---|---|
|code|	longint|	`On Header Click`|
|description|	text|	"On Header Click"|
|objectName	|text|	4D View Pro area name|
|sheetName	|text|	Name of the sheet of the event|
|range|	object|	Cell range|
|sheetArea|	longint	|The sheet location where the event took place:<li>0: The crossing area between column number/letter headers (top left of the sheet)</li><li>1: The column headers (area indicating the column numbers/letters)</li><li>2: The row headers (area indicating the row numbers)</li>|
 

**Example**:

```4d
 If(FORM Event.code=On Header Click)
    Case of
       :(FORM Event.sheetArea=1)
          $values:=VP Get values(FORM Event.range)
       :(FORM Event.sheetArea=2)
          VP SET CELL STYLE(FORM Event.range;New object("backColor";"gray"))
       :(FORM Event.sheetArea=0)
          VP SET CELL STYLE(FORM Event.range;New object("borderBottom";New object("color";"#800080";"style";vk line style thick)))
    End case
 End if
```


## On After Edit  

Following any user modification in a 4D View Pro document, the `On After Edit` event is generated. The object returned by the `FORM Event` command contains:
 

|Property|	Type	|Description|
|---|---|---|
|code	longint	`On After Edit`
|description	text	"On After Edit"
objectName	text	4D View Pro area name
sheetName	text	Name of the sheet of the event
action	text	"editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted"
 

>See also the [`On VP Range Changed`](#on-vp-range-changed) event.

 

Depending on the action property value, the object will contain additional properties.

### action = editChange  

Editing text generates the following additional properties:

|Property|	Type	|Description|
|---|---|---|
|range|	object|	Cell range|
|editingText|variant|The value from the current editor|

### action = valueChanged  

Changing value(s) generates the following additional properties: 


|Property|	Type	|Description|
|---|---|---|
|range|	object|	Cell range|
|oldValue|	variant|Value of cell before change|
|newValue|	variant|Value of cell after change|

### action = DragDropBlock  

Dragging and dropping actions generate the inclusion of the following additional properties:

|Property|	Type	|Description|
|---|---|---|
|fromRange|	object|	Range of source cell range (being dragged)|
|toRange	|object|	Range of the destination cell range (drop location)|
|copy	|boolean|	Specifies if the source range is copied or not|
|insert	|boolean|	Specifies if the source range is inserted or not|

### action = DragFillBlock  

Dragging content to fill adjacent cells generates the following additional properties:

 
|Property|	Type	|Description|
|---|---|---|
|fillRange	|object|	Range used for fill| 
|autoFillType|	longint	|Value used for the fill.<br> <li>0: Cells are filled with all data (values, formatting, and formulas)</li><li>1: Cells are filled with automatically sequential data</li><li>2: Cells are filled with formatting only</li><li>3: Cells are filled with values but not formatting</li><li>4: Values are removed from the cells</li><li>5: Cells are filled automatically</li>|
|fillDirection|	longint	|Direction of the fill.<br><li>0: The cells to the left are filled</li><li>1: The cells to the right are filled</li><li>2: The cells above are filled</li><li>3: The cells below are filled</li>|

### action = formulaChanged  
Entering formula(s) generates the following additional properties:

 
|Property|	Type	|Description|
|---|---|---|
|range|	object|	Cell range|
|formula|	text|	The formula entered |

### action = clipboardPasted  

Pasting content from the clipboard generates the following additional properties:

|Property|	Type	|Description|
|---|---|---|
|range|	object|	Cell range receiving the contents|
|pasteOption|	longint	|Specifies what is pasted from the clipboard:<br><li>0: Everything is pasted (values, formatting, and formulas)</li><li>1: Only values are pasted</li><li>2: Only the formatting is pasted</li><li>3: Only formulas are pasted</li><li>4: Values and formatting are pasted (not formulas)</li><li>5: Formulas and formatting are pasted (not values)</li>|
|pasteData|	object|	The data from the clipboard to be pasted:<table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>text</td><td>text</td><td>The text from the clipboard</td></tr><tr><td>html</td><td>text</td><td>The HTML from the clipboard</td></tr></table>|

### Example  

Here is an example handling an `On After Edit` event:

```4d
 If(FORM Event.code=On After Edit)
    If(FORM Event.action="valueChanged")
       ALERT("WARNING: You are currently changing the value from "+String(FORM Event.oldValue)+" to "+String(FORM Event.newValue)+"!")
    End if
 End if
```

The above example could generate an event object (see `FORM Event`) like this:

```4d
{
"code":45;
"description":"On After Edit";
"objectName":"ViewProArea"
"sheetname":"Sheet1";
"action":"valueChanged";
"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};
"oldValue":"The quick brown fox";
"newValue":"jumped over the lazy dog";
}
```


## On Selection Change  

Modification of the current selection of rows or columns in a 4D View Pro document generates the `On Selection Change` event. The object returned by the `FORM Event` command contains:

 
|Property|	Type	|Description|
|---|---|---|
|code|	longint|	`On Selection Change`|
|description|	text|	"On Selection Change"|
|objectName|	text|	4D View Pro area name|
|sheetName|	text|	Name of the sheet of the event|
|oldSelections|	object|	Cell range before change| 
|newSelections|	object|	Cell range after change|
 

**Example**:

```4d
 If(FORM Event.code=On Selection Change)
    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))
    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))
 End if
``` 


## On Column Resize  

When a user modifies the width of a column in a 4D View Pro document, the `On Column Resize` event is generated. The object returned by the `FORM Event` command contains:

 
|Property|	Type	|Description|
|---|---|---|
|code|	longint	|`On Column Resize`|
|description|	text	|"On Column Resize"|
|objectName|	text	|4D View Pro area name|
|sheetName|	text	|Name of the sheet of the event|
|range|	object	|Cell range of the columns whose widths have changed|
|header|	boolean	|True if the row header column (first column) is resized, else false|
 

**Example**:

```4d
 If(FORM Event.code=On Column Resize)
    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))
 End if
```

## On Row Resize  

A user modifying the height of a row in a 4D View Pro document generates the `On Row Resize` event. The object returned by the `FORM Event` command contains:

|Property|	Type	|Description|
|---|---|---|
|code	|longint	|`On Row Resize`|
|description	|text	|"On Row Resize"|
|objectName	|text	|4D View Pro area name|
|sheetName	|text	|Name of the sheet of the event|
|range	|object	|Cell range of the rows whose heights have changed|
|header	|boolean	|True if the column header row (first row) is resized, else false|
 

**Example**:

```4d
 If(FORM Event.code=On Row Resize)
    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))
 End if
```


## On VP Range Changed  

When a change occurs within a cell range in the 4D View Pro document, the `On VP Range Changed` event is generated. The object returned by the `FORM Event` command contains:

|Property|	Type	|Description|
|---|---|---|
|objectName	|text	|4D View Pro area name|
|code	|longint	|`On VP Range Changed`|
|description	|text	|"On VP Range Changed"|
|sheetName	|text	|Name of the sheet of the event|
|range	|object	|Cell range of the change|
|changedCells	|object	Range containing only the changed cells. It can be a combined range. 
|action	|text	|The type of operation generating the event:<br><li>"clear" - A clear range value operation</li><li>"dragDrop" - A drag and drop operation</li><li>"dragFill" - A drag fill operation</li><li>"evaluateFormula" - Setting a formula in a specified cell range</li><li>"paste" - A paste operation</li><li>"setArrayFormula" - Setting a formula in a specified cell range</li><li>"sort" - Sorting a range of cells</li>|
 

>See also [`On After Edit`](#on-after-edit). 