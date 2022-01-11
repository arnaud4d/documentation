---
id: general
title: General page
---

The General page contains options to configure generic parameters for the 4D project.

## Design  

This area contains the **Display toolbar** option. When it is checked, the 4D toolbar is displayed in the Design environment. 

## General

You use this area to set options concerning project startup and operation.

### Startup Environment  

You use this menu to select the default startup mode for the database: **Design** or **Application**. Unless specified, 4D opens by default in the Design environment if a password access system is not activated. 

## Component

This area allows component developers to configure how their component classes and functions will be exposed in the 4D method editor once the component is installed.

### Component namespace in the class store

Use this area to define a namespace for the component classes and functions in the code. By default, this area in empty: component classes are not available outside of the component context. 

When you enter a value, you declare that component classes and functions will be available in the host projet code through the `cs.component-name` namespace. 

> The component designation must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

For example, you have developed a component creating shapes and you write "eGeometry" in the component namespace area. Assuming that you have created a `Rectangle` class containing a `getArea()` function, once your project is installed as a component, the developer of the host project can write:

```
var $rect: cs.eGeometry.Rectangle 
$rect:=cs.eGeometry.Rectangle.new(10;20)

$area:=$rect.getArea()
```

Of course, it is recommended to use a distinguished name to avoid any conflict with the other installed components. If a user class with the same name as a component already exists in the project, the user class is taken into account and the component classes are ignored.


### Generate syntax file for code completion when compiled

When you wheck this option, 

The file is automaticaly created in the \Resources\en.lproj folder of the project. If the component namespace is not present, the resources for the classes are not generated.

