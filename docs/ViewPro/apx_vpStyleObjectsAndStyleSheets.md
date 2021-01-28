---
id: vpStyleObjectsAndStyleSheets
title: 4D View Pro Style Objects and Style Sheets
---

4D View Pro style objects and style sheets allow you to control the graphical aspects and the look of your 4D View Pro documents. 

### Style objects

Style objects contain the style property settings. They can be used either in a style sheet or on their own. Style objects can also be used in addition to a style sheet so that different settings can be specified for individual cell ranges without affecting the rest of the document. 

You can use style objects directly with the [VP SET CELL STYLE]((vpLanguageRef.md#vp-set-cell-style)) and [VP SET DEFAULT STYLE](vpLanguageRef.md#vp-set-default-style) commands.

### Style sheets 

A style sheet groups together a combination of properties in a style object (see below) to specify the look of all of the cells in your 4D View Pro documents. Style sheets saved with the document can be used to set the properties for a single sheet, multiple sheets, or an entire workbook.

When created, a 4D View Pro style sheet is given a name which is saved within the style sheet in the "name" property. This allows a style sheet to be easily used and, if thoughtfully selected, can facilitate its identification and purpose (e.g., Letterhead\_internal, Letterhead_external).

Style sheets are created with the [VP ADD STYLESHEET](vpLanguageRef.md#vp-add-stylesheet) command and applied with the the [VP SET DEFAULT STYLE](vpLanguageRef.md#vp-set-default-style) or [VP SET CELL STYLE](vpLanguageRef.md#vp-set-cell-style) commands. You can  remove a style sheet with the [VP REMOVE STYLESHEET](vpLanguageRef.md#vp-remove-stylesheet) command.

The [VP Get stylesheet](vpLanguageRef.md#vp-get-stylesheet) command can be used to return the style object of a single style sheet or you can use the [VP Get stylesheets](vpLanguageRef.md#vp-get-stylesheets) command to retrieve a collection of style objects for multiple style sheets.

### Style properties

 
You can find detailed descriptions of the possible values below on the [4D View Pro Constants](vpconstRef.md) page.

#### Background & Foreground  

|Property|	Type|	Description|	Possible values|
|---|---|---|---|
|backColor|	text|Defines the color of the background.|CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)|
|backgroundImage|picture, text|Specifies a background image.|Can be specified directly or via the image path (full path or file name only). If the file name only is used, the file must be located next to the database structure file. No matter how set (picture or text), a picture is saved with the document. This could impact the size of a document if the image is large. Note for Windows: File extension must be included.| 
|backgroundImageLayout|	longint|	Defines the layout for the background image.|	vk image layout center, vk image layout none, vk image layout stretch, vk image layout zoom|
|foreColor|	text|Defines the color of the foreground.|CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)|

#### Borders  

|Property|	SubProperty|Type|	Description|	Possible values|
|---|---|---|---|---|
|borderBottom, borderLeft, borderRight, borderTop, diagonalDown,diagonalUp|object|	Defines the corresponding border line|	 |
||color|	text|	Defines the color of the border. Default = black.|CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)|
||style|	longint|	Defines the style of the border. Default = empty. Cannot be null or undefined.|	vk line style dash dot, vk line style dash dot dot, vk line style dashed, vk line style dotted, vk line style double, vk line style empty, vk line style hair, vk line style medium, vk line style medium dash dot, vk line style medium dash dot dot, vk line style medium dashed, vk line style slanted dash dot, vk line style thick, vk line style thick|

#### Fonts and text 

|Property|Subproperty|	Type|	Description|	Possible values|
|---|---|---|---|---|
|font|		|text|	Specifies the font characteristics in CSS font shorthand ("font-style font-variant font-weight font-size/line-height font-family"). Example: "14pt Century Gothic". The font-size and font-family values are mandatory. If one of the other values is missing, their default values are used. Note: If a font name contains a space, the name must be within quotes.|	A CSS font shorthand.<p>4D provides utility commands to handle font characteristics as objects: [`VP Font to object`](vpLanguageRef.md#vp-font-to-object) and [`VP Object to font`](vpLanguageRef.md#vp-object-to-font)|
|formatter|		|text|Pattern for value/time property.|Number/text/date/time formats, special characters. See [4D View Pro Cell Format](apx_vpCellFormat.md) section.|
|isVerticalText|		|boolean|Specifies text direction.|True = vertical text, False = horizontal text.|
|labelOptions|		|object|	Defines cell label options (watermark options).| |	
||alignment|	longint|Specifies the position of the cell label. Optional property.|	vk label alignment top left, vk label alignment bottom left, vk label alignment top center, vk label alignment bottom center, vk label alignment top right, vk label alignment bottom right|
||visibility|	longint|	Specifies the visibility of the cell label. Optional property.|	vk label visibility auto, vk label visibility hidden, vk label visibility visible|
||foreColor|	text|Defines the color of the foreground. Optional property.|	CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)|
||font|	text|Specifies the font characteristics with CSS font shorthand ("font-style font-variant font-weight font-size/line-height font-family"). The font-size and font-family values are mandatory.|	|
|textDecoration|		|longint|Specifies the decoration added to text.|	vk text decoration double underline, vk text decoration line through, vk text decoration none, vk text decoration overline, vk text decoration underline|
|textIndent|		|longint|Defines the unit of text indention. 1 = 8 pixels	||
|textOrientation|		|longint|	Defines the rotation angle of the text in a cell.	Number between -90 and 90| |
|watermark|		|text|Defines the watermark (cell label) content|	|
|wordWrap|		|boolean|Specifies if text should be wrapped.|True = wrapped text, False = unwrapped text|

#### Layout  

|Property|	Type|	Description|	Possible values|
|---|---|---|---|
|cellPadding	|text	|Defines the cell padding|	| 
|hAlign	|longint	|Defines the horizontal alignment of cell contents.	|vk horizontal align center, vk horizontal align general, vk horizontal align left, vk horizontal align right|
|locked	|boolean	|Specifies cell protection status. Note, this is only available if sheet protection is enabled (see Sheet protection section).|True = locked, False = unlocked.|
|shrinkToFit	|boolean	|Specifies if the contents of the cell should be reduced.	|True = reduced content, False = no reduction.|
|tabStop	|boolean	|Specifies if the focus to the cell can be set using the Tab key.	|True = Tab key sets focus, False = Tab key does not set focus.|
|vAlign	|longint	|Specifies the vertical alignment of cell contents.	|vk vertical align bottom, vk vertical align center, vk vertical align top|


#### Style information  

|Property|	Type|	Description|
|---|---|---|
|name	|text	|Defines the name of the style| 
|parentName	|text	|Specifies the style that the current style is based on. Values from the parent style will be applied, then any values from the current style are applied. Changes made in the current style will not be refelected in the parent style. Only available when using a style sheet.|