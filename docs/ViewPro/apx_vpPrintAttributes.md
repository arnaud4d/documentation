---
id: vpPrintAttributes
title:  4D View Pro Print Attributes
---

4D View Pro print attributes allow you to control all aspects of printing 4D View Pro areas. These attributes are handled by the following commands:

*	[VP SET PRINT INFO](vpLanguageRef.md#vp-set-print-info) 
*	[VP Get print info](vpLanguageRef.md#vp-get-print-info) 
*	[VP PRINT](vpLanguageRef.md#vp-print)

### Columns / Rows  

Column and row attributes are used to specify the beginning, end, and repetition of columns and rows.

|Property|	Type|	Description|
|---|---|---|
|columnEnd|	longint|	The last column to print in a cell range.<p><p>Default value = -1 (all columns)|
|columnStart|	longint|	The first column to print in a cell range.<p><p>Default value = -1 (all columns)|
|repeatColumnEnd|	longint	|The last column of a range of columns to print on the left of each page.<p><p>Default value = -1 (all columns)|
|repeatColumnStart|	longint	|The first column of a range of columns to print on the left of each page.<p><p>Default value = -1 (all columns)|
|repeatRowEnd|	longint	|The last row of a range of rows to print on the top of each page.<p><p>Default value = -1 (all rows)|
|repeatRowStart|	longint	|The first row of a range of rows to print at the top of each page.<p><p>Default value = -1 (all rows)|
|rowEnd|	longint	|The last row to print in a cell range.<p><p>Default value = -1 (all rows)|
|rowStart|	longint	|The first row to print in a cell range.<p><p>Default value = -1 (all rows)|

### Headers / Footers  

Header and footer attributes are used to specify text or images in the left, right, and center header/footer sections.

|Property|	Type|	Description|
|---|---|---|
|footerCenter|	text	|The text and format of the center footer on printed pages.|
|footerCenterImage|	picture &#124; text*|	The image for the center section of the footer.|
|footerLeft	|text	|The text and format of the left footer on printed pages.|
|footerLeftImage|	picture &#124; text*|	The image for the left section of the footer.|
|footerRight|	text|	The text and format of the right footer on printed pages.|
|footerRightImage|	picture &#124; text*|	The image for the right section of the footer. | 
|headerCenter|	text|	The text and format of the center header on printed pages.|
|headerCenterImage|	picture &#124; text*|	The image for the center section of the header.|
|headerLeft|	text	|The text and format of the left header on printed pages. |
|headerLeftImage|	picture &#124; text*	|The image for the left section of the header.|
|headerRight|	text	|The text and format of the right header on printed pages.|
|headerRightImage|	picture &#124; text*|	The image for the right section of the header.|

\* If using text type, pass the filepath (absolute or relative) of the image. If you pass a relative path, the file should be located next to the database structure file. In Windows, the file extension must be indicated. No matter the type used to set an image, the image itself (not a reference) is stored in the 4D View Pro area and is returned by [VP Get print info](vpLanguageRef.md#vp-get-print-info)
.

### Special Characters  

The following special characters allow the automatic addition or formatting of information in the header and footer when the 4D View Pro area is printed. 


|Character|	Description	|Example|	Result|
|---|---|---|---|
|&	|Escape character|	(see examples below)   |	 |
|P|	Current page|	printInfo.headerLeft:="This is page &P."|	This is page 5.|| 
|N	|Page count|	printInfo.headerLeft:="There are &N pages."|	There are 10 pages. |
|D	|Current date (yyyy/mm/dd format)|	printInfo.headerLeft:="It is &D."|	It is 2015/6/19. |
|T	|Current time|	printInfo.headerLeft:="It is &T."|	It is 16:30:36.|
|G	|Image|	printInfo.headerLeftImage:=smiley<br>printInfo.headerLeft:="&G"	|![](assets/en/ViewPro/apx_vpPrintAttributes1.PNG) |
|S	|Strikethrough|	printInfo.headerLeft:="&SThis is text."	|~~This is text.~~|
|U	|Underline	|printInfo.headerLeft:="&UThis is text."|	<ins>This is text.</ins>|
|B|	Bold|	printInfo.headerLeft:="&BThis is text."	|**This is text.**|
|I	|Italic|	printInfo.headerLeft:="&IThis is text."	|*This is text.*|
|"	|Font prefix|	printInfo.headerLeft:="&\"Lucida Console\"&14This is text."	|![](assets/en/ViewPro/apx_vpPrintAttributes2.PNG)|
|K|	Text Color prefix|	printInfo.headerLeft:="&KFF0000This is text."|	<span style="color:red">This is text</span>. 
|F|	Workbook name|	printInfo.headerLeft:="&F"|	2019 Monthly Revenue Forecasts|
|A|	Spreadsheet name|	printInfo.headerLeft:="&A"|	June 2019 revenue forecast |

### Margins  

Margin attributes are used to specify the 4D View Pro area margins for printing. Expressed in hundreds of an inch.  

|Property|	Type|	Description|
|---|---|---|
|margin	|object	|The print margins|
||| <table> <tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>top</td><td> longint</td><td>Top margin, in hundredths of an inch.<p><p>Default value = 75</td></tr> <tr><td>bottom</td><td>longint</td><td>Bottom margin, in hundredths of an inch.<p><p>Default value = 75</td></tr> <tr><td>left</td><td>longint</td><td>Left margin, in hundredths of an inch.<p><p>Default value = 70</td></tr> <tr><td>right</td><td>longint</td><td>Right margin, in hundredths of an inch.<p><p>Default value = 70</td></tr><tr><td> header</td><td>longint</td><td>Header offset, in hundredths of an inch.<p><p>Default value = 30</td></tr> <tr><td>footer</td><td>longint</td><td>Footer offset, in hundredths of an inch.<p><p>Default value = 30</td></tr> </table>|

### Orientation  

Orientation attributes are used to specify the direction the printed page layout. 

>This attribute defines rendering information only.

|Property|	Type|	Description|
|---|---|---|
|orientation|	longint|	Page orientation |
|||<table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>[`vk print page orientation landscape`](vpconstRef.md#vk-print-page-orientation-landscape)</td><td>2</td><td>Landscape orientation</td></tr><tr><td>[`vk print page orientation portrait`](vpconstRef.md#vk-print-page-orientation-portrait)</td><td>1</td><td>Portrait orientation. (default)</td></tr></table>|

### Page  

Page attributes are used to specify general document print settings.

|Property|	Type|	Description|
|---|---|---|
|blackAndWhite|	boolean	|Printing in black and white only.<p><p>**Note**: PDFs are not affected by this attribute. Colors in PDFs remain.<p><p>Default value = "false"|
|centering|	longint|	How the contents are centered on the printed page:|
| 	|	|<table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>[`vk print centering both`](vpconstRef.md#vk-print-centering-both)</td><td>3</td><td>Printing is centered both horizontally and vertically on the page</td></tr><tr><td>[`vk print centering horizontal`](vpconstRef.md#vk-print-centering-horizontal)</td><td>1</td><td>Printing is centered horizontally on the page.</td></tr><tr><td>[`vk print centering none`](vpconstRef.md#vk-print-centering-none)</td><td>0</td><td>Printing is not centered. (default)</td></tr><tr><td>[`vk print centering vertical`](vpconstRef.md#vk-print-centering-vertical)</td><td>2</td><td>Printing is centered vertically on the page.</td></tr></table>|
|firstPageNumber|longint|The page number to print on the first page.<p><p>Default value = 1|
|pageOrder|	longint	|The order pages are printed:|
| |		|<table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>[`vk print page order auto`](vpconstRef.md#vk-print-page-order-auto)</td><td>0</td><td>Printing order is determined automatically. (default)</td></tr><tr><td>[`vk print page order down then over`](vpconstRef.md#vk-print-page-order-down-then-over)</td><td>1</td><td>Pages are printed in descending order, then across.</td></tr><tr><td>[`vk print page order over then down`](vpconstRef.md#vk-print-page-order-over-then-down)</td><td>2</td><td>Pages are printed across, then descending order.</td></tr></table>|
|pageRange	|text|	The range of pages for printing|
|qualityFactor	|longint|	The quality factor for printing (1 - 8).  The higher the quality factor, the better the printing quality, however printing performance may be affected.<p><p>Default value = 2|
|useMax	|boolean|	Only columns and rows with data are printed.<p><p>Default value = "true"|
|zoomFactor	|real|	The amount to enlarge or reduce the printed page.<p><p>Default value = 1|

### Paper Size  

Paper size attributes are used to specify the dimensions or model of paper to use for printing. There are two ways to define paper size:

*	Custom size - height and width attributes 
*	Standard size - kind attribute 
 
|Property|	Type|	Description|
|---|---|---|
|paperSize	|object	|Paper dimensions (height, width) or specific format (kind) for printing.|  
|||<table><tr><th>Property</th><th>Type</th><th>Description</th></tr> <tr><td>height</td><td> longint</td><td>Height of the paper, in hundredths of an inch.</td></tr> <tr><td>width</td><td>longint</td><td>Width of the paper, in hundredths of an inch.</td></tr> <tr><td>kind</td><td>text</td><td>Name of standard paper size (e.g., A2, A4, legal, etc.) returned by `Get Print Option`.<p><p>Default value = "letter"</td></tr></table>|

### Scale
  
Scale attributes are used to specify printing optimization and adjustments.

|Property|	Type|	Description|
|---|---|---|
|bestFitColumns|	boolean|	Column width is adjusted to fit the largest text width for printing.<p><p>Default value = "false"|
|bestFitRows|	boolean|	Row height is adjusted to fit the tallest text height for printing. <p><p>Default value = "false"  | 
|fitPagesTall|	longint|	The number of vertical pages (portrait orientation) to check when optimizing printing.<p><p> Default value = -1|
|fitPagesWide	|longint|	The number of horizontal pages (landscape orientation) to check when optimizing printing. <p><p>Default value = -1|

### Show / Hide 
 
Show / Hide attributes are used to specify the visibility (printing) of 4D View Pro area elements.  

|Property|	Type|	Description|
|---|---|---|
|showBorder|	boolean	|Prints the outline border.<p><p>Default value = "true"|
|showColumnHeader	|longint	|Column header print settings|
| |	|	<table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td><tr><td>[`vk print visibility hide`](vpconstRef.md#vk-print-visibility-hide)</td><td>1</td><td>The header is not visible.</td></tr><tr><td>[`vk print visibility inherit`](vpconstRef.md#vk-print-visibility-inherit)</td><td>0</td><td>Inherits the settings from the sheet (default)</td></tr><tr><td>[`vk print visibility show`](vpconstRef.md#vk-print-visibility-show)</td><td>2</td><td>The header is visible on every page.</td></tr><tr><td>[`vk print visibility show once`](vpconstRef.md#vk-print-visibility-show-once)</td><td>3</td><td>	The header is visible once.</td></tr></table>|
|showGridLine|	boolean	|Prints the gridlines.<p><p>Default value = "false"|
|showRowHeader	|longint	|Row headers print settings|
| 	|	|<table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td><tr><td>[`vk print visibility hide`](vpconstRef.md#vk-print-visibility-hide)</td><td>1</td><td>The header is not visible.</td></tr><tr><td>[`vk print visibility inherit`](vpconstRef.md#vk-print-visibility-inherit)</td><td>0</td><td>Inherits the settings from the sheet (default)</td></tr><tr><td>[`vk print visibility show`](vpconstRef.md#vk-print-visibility-show)</td><td>2</td><td>The header is visible on every page.</td></tr><tr><td>[`vk print visibility show once`](vpconstRef.md#vk-print-visibility-show-once)</td><td>3</td><td>	The header is visible once.</td></tr></table>|

### Watermark  

Watermark attributes are used to superimpose text or an image onto the 4D View Pro area.

|Property|	Type|	Description|
|---|---|---|
|watermark|	collection	|Collection of watermark settings.<p><p>Default value: undefined|
|||<table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td> \[ ].height</td><td>longint</td><td>The height of the watermark text / image.</td></tr> <tr><td>\[ ].imageSrc</td><td>picture &#124; text*</td><td>The watermark text / image.</td></tr><tr><td> \[ ].page</td><td>text</td><td>The page(s) where the watermark is printed.<p><p>For all pages: "all"<p><p>For specific pages: page numbers or page ranges separated by commas. Ex.: "1,3,5-12"</td></tr><tr><td> \[ ].width</td><td>longint</td><td>The width of the watermark text / image.</td></tr><tr><td> \[ ].x</td><td>longint</td><td>The horizontal coordinate of the top left point of the watermark text / image.</td></tr>
<tr><td> \[ ].y</td><td>longint</td><td>The vertical coordinate of the top left point of the watermark text / image.</td></tr></table>|
||| 		* If using text type, pass the filepath (absolute or relative) of the image. If you pass a relative path, the file should be located next to the database structure file. In Windows, the file extension must be indicated. No matter the type used to set an image, the image itself (not a reference) is stored in the 4D View Pro area and is returned by [VP Get print info](vpLanguageRef.md#vp-get-print-info).|