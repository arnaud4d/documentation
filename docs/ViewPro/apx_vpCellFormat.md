---
id: vpCellFormat
title:  4D View Pro Cell Format
---

Defining a format pattern ensures that the content of your 4D View Pro documents is displayed the way you intended. 4D View Pro has built-in formats for numbers, dates, times, and text, but you can also create your own patterns to format the contents of cells using special characters and codes.

For example, when using the [VP SET VALUE](vpLanguageRef.md#vp-set-value) or [VP SET NUM VALUE](vpLanguageRef.md#vp-set-num-value) commands to enter amounts in an invoice, you may want the currency symbols ($, €, ¥, etc.) to be aligned regardless of the space required by the number (i.e., whether the amount is $5.00 or $5,000.00). You could use formatting characters and spectify the pattern _($* #,##0.00_) which would display amounts as shown:

![](assets/en/ViewPro/apx_vpCellFormat1.PNG)

Note that when creating your own format patterns, only the display of the data is modified. The value of the data remains unchanged.

### Number and text formats  

Number formats apply to all number types (e.g., positive, negative, and zeros).


|Character|	Description|	Example|
|---|---|---|
|0|	Placeholder that displays zeros.|	#.00 will display 1.1 as 1.10  |
|.|	Displays a decimal point|	0.00 will display 1999 as 1999.00|
|,	|Displays the thousands separator in a number.<p><p> Thousands are separated by commas if the format contains a comma enclosed by number signs "#" or by zeros. A comma following a digit placeholder scales the number by 1,000.|	#,0 will display 12200000 as 12,200,000|
|\_	|Skips the width of the next character.	|Usually used in combination with parentheses to add left and right indents, \_( and _) respectively.|
|@|	Formatter for text. Applies the format to all text in the cell|	"\[Red]@" applies the red font color for text values.|
|*	|Repeats the next character to fill the column width.|	0*- will include enough dashes after a number to fill the cell, whereas *0 before any format will include leading zeros.|
|" "	|Displays the text within the quotes without interpreting it.|	"8%" will display as: 8%|
|%	|Displays numbers as a percentage of 100.|	8% will be displayed as .08|
|\#	|Digit placeholder that does not display extra zeros. If a number has more digits to the right of the decimal than there are placeholders, the number is rounded up.|	#.# will display 1.54 as 1.5 |
|?|	Digit placeholder that leaves space for extra zeros, but does not display them. Typically used to align numbers by decimal point.|	$?? displays a maximum of 2 decimals and causes dollar signs to line up for varying amounts.|
|\	|Displays the character following it.|	#.00\? will display 123 as 123.00?|
|/	|When used with numbers, displays them as fractions. When used with text, date or time codes, displayed "as-is".	|#/# will display .75 as 3/4|
|\[ ]	|Creates conditional formats.	|\[>100]\[GREEN]#,##0;\[<=-100]\[YELLOW]#,##0;\[BLUE]#,##0|
|E|	Scientific notation format.	|#E+# - will display 1,500,500 as 2E+6|
|\[color]	|Formats the text or number in the color specified|	\[Green]###.##\[Red]-###.###|


#### Example  


```4d
//Set the cell value as $125,571.35
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)")
```

### Date and time formats  

4D View Pro provides the following constants for ISO 8601 date and time patterns:

|Constant|	Value|	Comment|
|---|---|---|
|[`vk pattern full date time`](vpconstRef.md#vk-pattern-full-date-time)|	"_fullDateTimePattern_"	|ISO 8601 format for the full date and time in current localization.<p><p>USA default pattern: "dddd, dd MMMM yyyy HH:mm:ss"|
|[`vk pattern long date`](vpconstRef.md#vk-pattern-long-date)|	"_longDatePattern_"	|ISO 8601 format for the full date in current localization.<p><p>USA default pattern: "dddd, dd MMMM yyyy"|
|[`vk pattern long time`](vpconstRef.md#vk-pattern-long-time)|	"_longTimePattern_"	|ISO 8601 format for the time in current localization.<p><p>USA default pattern: "HH:mm:ss"|
|[`vk pattern month day`](vpconstRef.md#vk-pattern-month-day)|	"_monthDayPattern_"	|ISO 8601 format for the month and day in current localization.<p><p>USA default pattern: "MMMM dd"|
|[`vk pattern short date`](vpconstRef.md#vk-pattern-short-date)|	"_shortDatePattern_"	|Abbreviated ISO 8601 format for the date in current localization.<p><p>USA default pattern: "MM/dd/yyyy"|
|[`vk pattern short time`](vpconstRef.md#vk-pattern-short-time)|	"_shortTimePattern_"|	Abbreviated ISO 8601 format for the time in current localization.<p><p>USA default pattern: "HH:mm"|
|[`vk pattern sortable date time`](vpconstRef.md#vk-pattern-sortable-date-time)|	"_sortableDateTimePattern_"	|ISO 8601 format for the date and time in current localization which can be sorted.<p><p>USA default pattern: "yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss"|
|[`vk pattern universal sortable date time`](vpconstRef.md#vk-pattern-universal-sortable-date-time)|	"_universalSortableDateTimePattern_"	|ISO 8601 format for the date and time in current localization using UTC which can be sorted.<p><p>USA default pattern: "yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'"|
|[`vk pattern year month`](vpconstRef.md#vk-pattern-year-month)	|"_yearMonthPattern_"|	ISO 8601 format for the month and year in current localization.<p><p>USA default pattern: "yyyy MMMM"|


#### Example  


```4d
//Set the cell value as specific date and time
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))
```

### Custom date and time formats  

To create your own date and time patterns, in your current localization, you can use combinations of the following codes:
 

||Code<br>(not case-sensitive)|	Description|Example|
|---|---|---|---|
|Date|		|	|(January 1, 2019)|
||m	|Month number without leading zero|	1|
||mm	|Month number with leading zero	|01|
||mmm	|Month name, short	|Jan|
||mmmm	|Month name, long	|January|
||d	|Day number without leading zero|	1|
||dd	|Day number with leading zero|	01|
||ddd	|Day of week, short	|Tue|
||dddd	|Day of week, long|	Tuesday|
||yy	|Year, short	|19|
||yyyy	|Year, long|	2019|
|Time	||		|(2:03:05 PM)|
||h	|Hour without leading zero. 0-23|	2|
||hh	|Hour with leading zero. 00-23|	02|
||m	|Minutes without leading zero. 0-59|	3|
||mm|	Minutes with leading zero. 00-59|	03|
||s	|Seconds without leading zero. 0-59|	5|
||ss	|Seconds with leading zero. 00-59|	05|
||\[h]	|Elapsed time in hours	|14 (can exceed 24)|
||\[mm]|	Elapsed time in minutes|	843|
||\[ss]|	Elapsed time in seconds|	50585|
||AM/PM|	Periods of day. 24 hour fomat used if omitted.|	PM|

>The code 'm' is interpreted depending on its position in the pattern. If it's immediately after 'h' or 'hh' or immediately before 's' or 'ss', it will be interpreted as minutes, otherwise it will be interpreted as months.

### Additional symbols  

In addition to the special characters and codes described in the previous sections, there are additional characters and symbols that can be used in your format patterns. These additional characters and symbols do not require a \ or "" and do not impact the interpretation of the format pattern. They appear "as-is" within the pattern.

|Character|	Description|Example|
|---|---|---|
|+ and -	|Plus and minus signs|	### + ### = ###,###|
|( )	|Left and right parenthesis|	(-###.##)|
|:	|Colon|	hh:mm:ss|
|^	|Caret|	#\^#|
|'	|Apostrophe|	'######|
|{ }	|Curly brackets|	{###,###,###}|
|< >	|Less-than and greater than signs|	## >##|
|=	|Equal sign|	#+#=##|
|/	|Forward slash. When used with numbers, displays them as fractions.|	mm/dd/yyyy|
|!	|Exclamation point|	$###.00!|
|&	|Ampersand|	"Hello" & "Welcome"|
|~	|Tilde|	~##|
| 	|Space character|	|
|€	|Euro|	€###.00|
|£	|British Pound|	£###.00|
|¥	|Japanese Yen|	¥###.00|
|$	|Dollar sign|	$###.00|
|¢	|Cent sign|	.00¢|