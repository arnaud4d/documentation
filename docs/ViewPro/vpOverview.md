---
id: vpOverview
title: 4D View Pro Overview
---

4D View Pro is a component and a 4D form area that allow developers to embed advanced spreadsheet features in their forms. 


## Installation and activation  

4D View Pro features are directly included in 4D itself, making it easy to deploy and manage. No additional installation is required.

However, 4D View Pro requires the a license. You need to have this license installed in your application in order to use its features. When the 4D View Pro license is not installed, the contents of an object that requires a 4D View Pro feature are not displayed at runtime and an error message is displayed instead.

In this example, a 4D View Pro license is missing while displaying a 4D View Pro spreadsheet area:

![](assets/en/ViewPro/licenseError.PNG)

## Defining a 4D View Pro area     

4D View Pro allows you to insert and display a spreadsheet area in your 4D forms. A spreadsheet is an application containing a grid of cells into which you can enter information, execute calculations, or display pictures.

Once you use 4D View Pro areas in your forms, you can import and export spreadsheets documents using the 4D View Pro commands.

### Creating the area  

4D View Pro documents are displayed and edited manually in a 4D form object named 4D View Pro. This object is available as part of the last tool (Plug-in Area, Web Area, etc.) found in the object bar:

![](assets/en/ViewPro/vpArea.PNG)

A 4D View Pro form area is configured by means of standard properties found in the Property List, such as **Object Name** and **Variable or Expression**, **Coordinates**, **Display**, **Action**, and **Events**. 

![](assets/en/ViewPro/vpPropertyList.PNG)

*	**Object Name**: name of the 4D form area that contains and displays the 4D View Pro document.
*	**Variable or Expression**: name of the 4D View Pro form area variable.

When the form is executed, the 4D View Pro area displays a spreadsheet by default:

![](assets/en/ViewPro/vpSpreadsheet.PNG)

## Using a 4D View Pro area     

 
When executed in forms, 4D View Pro areas provide basic spreadsheet features including cell editing and formula entry. More advanced features are available through the 4D View Pro language.

### Selection, Input and Navigation Basics  

Spreadsheets are composed of rows and columns. A number is associated with each row. A letter (or group of letters once the number of columns surpasses the number of letters in the alphabet) is associated with each column. The intersection of a row and a column makes a cell. Cells can be selected and their contents edited.

#### Selection  

*	To select a cell, simply click on it or use the direction arrows on the keyboard. Its content (or formula) is displayed within the cell.

*	To select several continuous cells, drag the mouse from one end of the selection to the other. You can also click on the two ends of the selection while holding down the Shift key.

*	To select all cells in the spreadsheet, click on the cell at the top left of the area:
	![](assets/en/ViewPro/vpSelectAll.PNG)
	
*	To select a column, click on the corresponding letter (or set of letters).

*	To select a row, click on the corresponding number.

*	To select a group of cells that are not continuous, hold down the **Ctrl** key (Windows) or **Command** key (Mac) and click on each cell to be selected.

*	To deselect cells, simply click anywhere within the spreadsheet.

#### Input and navigation  

Double-clicking on a cell allows passing into input mode in the relevant cell. If the cell is not empty, the insertion cursor is placed after the content of the cell.

![](assets/en/ViewPro/vpInput.PNG)

Data can be entered directly once a cell is already selected, even if the insertion cursor is not visible. The input then
replaces the content of the cell.

The **Tab** key validates the cell input and selects the cell to its right. Combining the **Shift + Tab** keys validates the cell input and selects the cell to its left.

The **Carriage return** key validates the cell input and selects the cell below it. Combining the **Shift + Carriage return** keys validates the cell input and selects the cell above it.

The direction keys (arrows) allow you to move a cell in the direction indicated by the arrow.

### User Interfaces  

You can add an interface to 4D View Pro areas to allow end users to perform basic modifications and data manipulations. 4D offers two optional interfaces to choose from, Ribbon and Toolbar. These interfaces can be enabled or disabled from either the Property List or dynamically with code:

*	**Property List**: In the Appearance section:  
	![](assets/en/ViewPro/vpUserInterface.PNG)
	
*	**Dynamically**: Via a JSON file (see Dynamic Forms)
	*	"userInterface": Default value is "none". To enable a toolbar, it can be set to "ribbon" or "toolbar".
	*	"withFormulaBar": Default value is "false". To enable the formular bar, it can be set to "true" . **Note**: Available only for the "toolbar" interface. 

Both the Ribbon and the Toolbar interfaces group related actions into the following tabs: 	

|Tab| 	Actions	|Ribbon Interface|	Toolbar Interface|
|---|---|:---:|:---:|
|File|File manipulation|X| |	 
|Home|Text appearance|X|X|
|Insert|Add items| X| X|
|Formulas|Formula calculation and library|	 X|X|
|Data|Data manipulation|X| X|
|View|Visual presentation| X| X|
|Settings|Sheet presentation reference|X| |	 


User-defined modifications are saved in the 4D View Pro object when the user saves the document.

#### Ribbon  

The Ribbon interface allows end users to perform comprehensive modifications and data manipulations:

![](assets/en/ViewPro/vpRibbon.PNG)

#### Toolbar  

The Toolbar interface allows end users to perform basic modifications and data manipulations. 

Enabling the Toolbar interface displays the Show Formula Bar option. When selected, the formula bar is visible below the Toolbar interface. If not selected, the formula bar is hidden.

With visible formula bar:

![](assets/en/ViewPro/vpToolbar1.PNG)

With formula bar hidden:

![](assets/en/ViewPro/vpToolbar2.PNG)

### Entering a Formula, a Function or a Reference  

To enter a formula or a function in a 4D View Pro area:

1.	Select the cell into which you will enter the formula or function.
2.	Enter = (the equal sign).
3.	Enter the formula.  
	OR  
	Click on a cell to enter its reference in the formula.  
	![](assets/en/ViewPro/vpFormula1.PNG)  
	OR  
	Type the first letter of the function to enter. A pop-up menu listing the available functions and references appears, allowing you to select the desired elements:  
	![](assets/en/ViewPro/vpFormula2.PNG)
	
	
### Context Menu  

4D View Pro areas benefit from an automatic context menu that provides users with standard editing features such as copy and paste, but also with basic spreadsheet features:

![](assets/en/ViewPro/vpContext.PNG)

>The Copy/Cut and Paste features of the context menu only work within the spreadsheet area, they do not have access to the system pasteboard. System shortcuts such as **Ctrl+c/Ctrl+v** works however and can be used to exchange data between the area and other applications.

This menu proposes additional features depending on the clicked area:

*	click on a column or row header: **Insert**, **Delete**, **Hide**, or **Unhide** the contents
*	click on a cell or a cell range:
	*	**Filter**: allows hiding row through filters (see [Filtering rows](http://help.grapecity.com/spread/SpreadSheets11/webframe.html#filter.html) in the SpreadJS documentation).
	*	**Sort**: sorts the column contents.
	*	**Insert Comment**: allows user to enter a comment for an area. When a comment has been entered for an area, the top left cell of the area displays a small red triangle:  
		![](assets/en/ViewPro/vpContext2.PNG)
