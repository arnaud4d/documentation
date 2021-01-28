---
id: vpRangeObjectProperties
title:  4D View Pro Range Object Properties
---

4D View Pro range objects are composed of several properties:

*	area - The name of the 4D View Pro area
*	ranges - A collection of range object(s). Available properties within each range object depend on the range object type. For example, a column range object will only include the *.column* and *.sheet* properties. 

|Property|		|Type	|Description|	Available for|
|---|---|---|---|---|
|area||		text|	4D View Pro area form object name|	always available|
|ranges	||	collection|	Collection of range(s)|	always available
||\[ ].name	|text|	Range name	|name|
||\[ ].sheet|	number|	Sheet index (current sheet index by default) (counting begins at 0)	|cell, cells, row, rows, column, columns, all, name|
||\[ ].row	|number	|Row index (counting begins at 0)	|cell, cells, row, rows|
||\[ ].rowCount	|number	|Row count|	cells, rows|
||\[ ].column	|number	|Column index (counting begins at 0)	|cell, cells, column, columns
||\[ ].columnCount	|number	|Column count|	cells, columns