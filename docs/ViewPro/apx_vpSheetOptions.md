---
id: vpSheetOptions
title: 4D View Pro Sheet Options
---

4D View Pro sheet options object allows you to control various options of your 4D View Pro areas. This object is handled by the following commands:

*	[VP SET SHEET OPTIONS](vpLanguageRef.md#vp-set-sheet-options)
*	[VP Get sheet options](vpLanguageRef.md#vp-get-sheet-options) 

## Sheet appearance  

|Property|	|	Type|	Description|
|---|---|---|---|
|allowCellOverflow|	|	boolean|	Specifies whether data can overflow into adjacent empty cells.|
|sheetTabColor|	|	string|	A color string used to represent the sheet tab color, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on.|
|frozenlineColor|	|	string|	A color string used to represent the frozen line color, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on.|
|clipBoardOptions|	|	longint|	The clipboard option.<p><table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>[`vk clipboard paste options all`](vpconstRef.md#vk-clipboard-paste-options-all)</td><td>0</td><td>Pastes all data objects, including values, formatting, and formulas.</td></tr><tr><td>[`vk clipboard paste options formatting`](vpconstRef.md#vk-clipboard-paste-options-formatting)</td><td>2</td><td>Pastes only formatting.</td></tr><tr><td>[`vk clipboard paste options formulas`](vpconstRef.md#vk-clipboard-paste-options-formulas)</td><td>3</td><td>Pastes only formulas.</td></tr><tr><td>[`vk clipboard paste options formulas and formatting`](vpconstRef.md#vk-clipboard-paste-options-formulas-and-formatting)</td><td>5</td><td>Pastes formulas and formatting.</td></tr><tr><td>[`vk clipboard paste options values`](vpconstRef.md#vk-clipboard-paste-options-values)</td><td>1</td><td>Pastes only values.</td></tr><tr><td>[`vk clipboard paste options values and formatting`](vpconstRef.md#vk-clipboard-paste-options-values-and-formatting)</td><td>4</td><td>Pastes values and formatting.</td></tr></table>|
|gridline|	|	object|	The grid line's options.|
||color|	string|	A color string used to represent the grid line color, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on.|
||showVerticalGridline|	boolean|	Specifies whether to show the vertical grid line.
||showHorizontalGridline|	boolean|	Specifies whether to show the horizontal grid line.|
|rowHeaderVisible|		boolean|	Specifies whether the row header is visible.|
|colHeaderVisible|		boolean|	Specifies whether the column header is visible.|
|rowHeaderAutoText|		|longint|	Specifies whether the row header displays letters or numbers or is blank.<p><table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>[`vk header auto text blank`](vpconstRef.md#vk-header-auto-text-blank)</td><td>0</td><td>Displays blanks in the headers.</td></tr><tr><td>[`vk header auto text letters`](vpconstRef.md#vk-header-auto-text-letters)</td><td>2</td><td>Displays letters in the headers.</td></tr><tr><td>[`vk header auto text numbers`](vpconstRef.md#vk-header-auto-text-numbers)</td><td>1</td><td>Displays numbers in the headers.</td></tr></table>|
|colHeaderAutoText|		|longint|	Specifies whether the column header displays letters or numbers or is blank.<p><table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>[`vk header auto text blank`](vpconstRef.md#vk-header-auto-text-blank)</td><td>0</td><td>Displays blanks in the headers.</td></tr><tr><td>[`vk header auto text letters`](vpconstRef.md#vk-header-auto-text-letters)</td><td>2</td><td>Displays letters in the headers.</td></tr><tr><td>[`vk header auto text numbers`](vpconstRef.md#vk-header-auto-text-numbers)</td><td>1</td><td>Displays numbers in the headers.</td></tr></table>|
|selectionBackColor|	|	string|	The selection's background color for the sheet. (preferred RGBA format)
|selectionBorderColor|		|string|	The selection's border color for the sheet.|
|sheetAreaOffset|		|object|	The sheetAreaOffset's options.|
||left|	longint|	The offset left of sheet from host.|
||top|	longint|	The offset top of sheet from host.|

>All properties are optional.

## Sheet protection  

To lock the whole sheet, you only need to set the *isProtected* property to **true**. You can then unlock cells individually by setting the locked cell style property (see [4D View Pro Style Objects and Style Sheets](apx_vpStyleObjectsAndStyleSheets.md)). 
 

|Property|	|	Type|	Description|
|---|---|---|---|
|isProtected|		|boolean	|Specifies whether cells on this sheet that are marked as protected cannot be edited.|
|protectionOptions|		|object	|A value that indicates the elements that you want users to be able to change. If null : the protectionOptions parameter is reset.|
||allowSelectLockedCells	|boolean	|Specifies whether the user can select locked cells, optional. True by default.|
||allowSelectUnlockedCells	|boolean	|Specifies whether the user can select unlocked cells, optional. True by default.|
||allowSort	|boolean	|Specifies whether the user can sort ranges, optional. False by default.|
||allowFilter	|boolean	|Specifies whether the user can filter ranges, optional. False by default.|
||allowEditObjects	|boolean	|Specifies whether the user can edit floating objects, optional. False by default.|
||allowResizeRows	|boolean	|Specifies whether the user can resize rows, optional. False by default.|
||allowResizeColumns	|boolean	|Specifies whether the user can resize columns, optional. False by default.|
||allowDragInsertRows	|boolean	|Specifies whether the user can perform the drag operation to insert rows, optional. False by default.|
||allowDragInsertColumns	|boolean	|Specifies whether the user can perform the drag operation to insert columns, optional. False by default.|
||allowInsertRows	|boolean	|Specifies whether the user can insert rows, optional. False by default.|
||allowInsertColumns	|boolean	|Specifies whether the user can insert columns, optional. False by default.|
||allowDeleteRows	|boolean	|Specifies whether the user can delete rows, optional. False by default.|
||allowDeleteColumns	|boolean	|Specifies whether the user can delete columns, optional. False by default.|


>All properties are optional.


