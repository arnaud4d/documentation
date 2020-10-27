---
id: vpFormulas
title: 4D View Pro Formulas
---

## Overview 

4D View Pro functions are used in formulas. Every 4D View Pro formula is an expression that returns a value. All expressions are comprised of operands and operators:

*	**Operators**: see [Operators and values](#operators-and-values)
*	**Operands** are divided into several categories:
	*	values,
	*	references to other cells (relatives, absolutes, mixed or by name), 
	*	4D variables, fields and functions,
	*	4D methods (registered by `VP SET ALLOWED METHODS`), 
	*	4D formulas (via `VP SET CUSTOM FUNCTIONS`),
	*	4D View Pro functions.

To enter a formula:

1.	Select the cell into which you will enter the formula or function.
2.	Enter = (the equal sign).
3.	Type in the formula then hit the Enter key

>You can also create named formulas that can be called via their name. In this case, the formula is entered using the `VP ADD FORMULA NAME` command.

A large number of functions are available in 4D View Pro. This section describes a subset of essential functions. The complete list of functions supported by 4D View Pro can be found in the [Spreadsheets documentation](http://help.grapecity.com/spread/SpreadSheets11/webframe.html#FormulaFunctions.html).

 
 

## Operators and values  
 
### Operators by data types  

4D View Pro supports five types of data. For each data type, specific literal values and operators are supported.

|Data types	|Values|	Operators|
|---|---|---|
|Number	|1.2<br>1.2 E3<br>1.2E-3<br>10.3x|+ (addition)<br>- (subtraction)<br>* (multiplication)<br>/ (division)<br>^ (exponent, the number of times to multiply a number by itself)<br>% (percentage -- divide the number before the operator by one hundred)|
|Date|	10/24/2017	|+ (date + number of days -> date)<br>+ (date + time -> date + time of day)<br>- (date - number of days -> date)<br>- (date - date -> number of days between the two)|
|Time|	10:12:10	|Duration operators:<p>+ (addition)<br>- (subtraction)<br>* (duration * number -> duration)<br>/ (duration / number -> duration)|
|String|	'Sophie' or "Sophie"	|& (concatenation)|
|Boolean|	TRUE or FALSE|	-|


### Comparison operators 
 
The following operators can be used with two operands of the same type:

|Operator	|Comparison|
|---|---|
|=	|equal to|
|<>	|different than|
|>	|greater than|
|<	|less than|
|>=	|greater than or equal to|
|<=	|less than or equal to|


### Operator precedence  

List of operators from most to least important:

|Operator|	Description|
|---|---|
|()|	Parenthesis (for grouping)|
|-	|Negate|
|+	|Plus|
|%|	Percent|
|^	|Exponent|
|* and /|	Multiply and divide|
|+ and -|	Add and Subtract|
|&|	Concatenate
|=  > < >= <= <>|	Compare|



### Operand precedence in formulas  

When two or more different operands have the same name, 4D View Pro determines the type of each element according to the following order:

|Priority|	Element type|
|---|---|
|1|	Cell reference|
|2|	Cell name|
|3|	4D View Pro function|
|4|	Project method|
|5|	4D command|
|6|	Variable|




## Cell references 
 
 Formulas often refer to other cells by cell addresses. You can copy these formulas into other cells. For example, the following formula, entered in cell C8, adds the values in the two cells above it and displays the result.
= C6 + C7

This formula refers to cells C6 and C7. That is, 4D View Pro is instructed to refer to these other cells for values to use in the formula.

When you copy or move these formulas to new locations, each cell address in that formula will either change or stay the same, depending on how it is typed.

*	A reference that changes is called a relative reference, and refers to a cell by how far left/right and up/down it is from the cell with the formula.

*	A reference that always points to a particular cell is called an absolute reference.

*	You can also create a mixed reference which always points to a fixed row or column.



### Reference Notation  

If you use only cell coordinates, for example, C5, 4D View Pro interprets the reference as relative. You may make the reference an absolute reference by putting a dollar sign in front of the letter and the number, as in $C$5.

You can mix absolute and relative references by inserting a dollar sign in front of the letter or the number alone, for example, $C5 or C$5. A mixed reference allows you to specify either the row or the column as absolute, while allowing the other portion of the address to refer relatively.

A convenient, fast and accurate way to specify an absolute reference is to name the cell and use that name in place of the cell address. A reference to a named cell is always absolute. You can create or modify named cells or named cell ranges using the `VP ADD RANGE NAME` command.

The following table shows the effect of the different notations:

|Example	|Type of reference	|Description|
|---|---|---|
|C5	|Relative	|Reference is to the relative location of cell C5, depending on the location of the cell in which the reference is first used
|$C$5	|Absolute	|Reference is absolute. Will always refer to cell C5 no matter where it is used.|
|$C5	|Mixed	|Reference is always to column C, but the row reference is relative to the location of the cell in which the reference is first used.|
|C$5	|Mixed	|Reference is always to row 5, but the column reference is relative to the location of the cell in which the reference is first used|
|Cell name	|Absolute	|Reference is absolute. Will always refer to the named cell no matter where the reference is used.|



## Converting 4D View plug-in formulas  
 
As stated in the Converting 4D View documents page, most of the 4D View plug-in document contents and properties can be converted in 4D View Pro documents.

Formulas are also converted. However, the formula languages of 4D View and 4D View Pro are somewhat different and 4D View Pro implements default security features that control access to database data. As a result, some adaptations can sometimes be necessary regarding operators, constants and functions, as well as references to methods and database fields.

Three compatibility cases can occur:

*	a 4D View feature (operator, constant, function) is exactly the same in 4D View Pro: in this case, the conversion is transparent.

*	a 4D View feature or a 4D command is supported in 4D View Pro through a different function or operator: in this case, an automatic mapping is performed

*	a 4D View feature is partially or not supported in 4D View Pro: in this case, it will be necessary to adapt your converted formulas to make them work as expected. This is the case for references to methods, variables, or fields.

The following sections list 4D View formula features and their correspondences in 4D View Pro.



### Operators

|Type|Operator|4D View|	4D View Pro|
|---|---|---|---|
|**Numeric**|Addition|	+|	+|
||Subtraction|	-|	-|
||Multiplication|	*|	*|
||Division|	/|	/|
||Remainder|	\ |	MOD|
||Integer division|	÷	|TRUNC(a/b)|
||Exponent|	^	|^|
||Percentage	|%	|%|
|||||
|**Boolean**|AND|	&|	AND|
||OR	| &#124;	|OR|
||Not	|~	|NOT|
|||||
|**String**|concatenation|	+	|&|
||destruction|	-	|SUBSTITUTE, ex: "Down Trend"-"Down" is replaced by SUBSTITUTE("Down Trend","Down","")|
||position|	\	|FIND (case sensitive) or SEARCH (case insensitive)|
|||||
|**Date**|date+days->date|	+	|+|
||date+time->date+time of day|	+|	+|
||date-days->date	|-|	-|
||date-date->number of days|	-|	-|
|||||
|**Duration**|addition	|+	|+|
||subtraction	|-|	-|
||multiplication|	*	|*|
||division|	/|	/|
|||||
|**Comparison**|equality|	=	|=|
||difference|	#	|<>|
||greater than|	>	|>|
||less than|	<	|<|
||greater than or equal to|	>=	|>=|
||less than or equal to|	<=	|<=|
























 ABS  

 ACOS  

 AND  

 ASIN  

 ATAN  

 AVERAGE  

 COLUMNLETTER  

 COS  

 COUNTA  

 EXP  

 FALSE  

 FINDCELL  

 FV  

 IF  

 INDIRECT  

 ISBLANK  

 LEN  

 LN  

 LOOKUP  

 MAX  

 MID  

 MIN  

 NOT  

 NOW  

 NPER  

 OR  

 PI  

 PMT  

 PV  

 RAND  

 RATE  

 ROUND  

 ROW  

 RUNTIME_CURRENT_TIME  

 RUNTIME_DATE  

 RUNTIME_STRING  

 RUNTIME_TIME  

 RUNTIME_VIEW_STRING  

 SIN  

 SQRT  

 STDEV.P  

 SUBSTITUTE  

 SUM  

 TAN  

 TEXT  

 TODAY  

 TRUE  

 TYPE  

 VAR.P  