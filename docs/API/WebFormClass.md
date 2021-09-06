---
id: WebFormClass
title: WebForm
---

When working in [4D Web Studio](../web-studio/web-studio.md), the `WebForm `class allows you to handle the behavior of your webform and its components on the server side.

### WebForm Objects

`WebForm` objects are instantiated with the [WEB Form](#web-form) command.

### Summary 
||
|---|
|[<!-- INCLUDE #_command_.WEB Form.Syntax -->](#web-form)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.WEB Form.Summary --> |
|[<!-- INCLUDE #_command_.WEB Event.Syntax -->](#web-event)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.WEB Event.Summary --> |

## WEB Form

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R3|Added|
</details>

<!-- REF #_command_.WEB Form.Syntax -->
**WEB Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.WEB Form.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.WebForm|<-|New `WebForm` object
<!-- END REF -->

#### Description
The `WEB Form` command <!-- REF #_command_.WEB Form.Summary --> returns a `4D.WebForm` object that references a webform.<!-- END REF -->

Each property of the returned object is an object of the [4D.WebFormItem](WebFormItemClass.md) class.

The command returns `Null` if it is called in a request that does not originate from [4D Web Studio](../web-studio/web-studio.md).

## WEB Event

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R3|Added|
</details>

<!-- REF #_command_.WEB Event.Syntax -->
**WEB Form** : Object<!-- END REF -->

<!-- REF #_command_.WEB Event.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-| Object
<!-- END REF -->

#### Description

**WEB Event** <!-- REF #_command_.WEB Event.Summary --> returns an object with information on a triggered event linked to a webform component.<!-- END REF --> 

The function must be called in the context of a web form handled by the web server

The returned object contains the following properties:

| Property | Type | Description |
|----|----|----|
| caller | Text | Server-side reference of the component triggering the event |
| eventType | Text | Event type (onclick, onchange, onmouseover...) |
| data	| Object	| For Tabs component: contains an index property (Number) with the index of the clicked Tab (index starts at 0) |

*eventType* can contain the following events: 

* blur
* focus
* auxclick
* click
* dblclick
* mouseenter
* mouseleave
* mouseover
* keydown
* keyup
* change
* On Load

The On Load event is triggered when the `WebForm` component loads.

#### Example

The objective is to display help when the user hovers over the component:

![alt-text](assets/en/web-studio/web-event-2.png)

To attach an `onmouseover` event to an Input Text component that displays the information:

![alt-text](assets/en/web-studio/web-event-1.png)

In the above image: 

* The Text Input component has `orderNumber` as server reference
* The component has an `onmouseover` event attached to it
* The exposed function `help` attached to the `onmouseover` event contains the following code: 

#### Example 

```4d
var $event : Object
var $webForm : 4D.WebForm

$webForm:=WEB Form
$event:=WEB Event
$componentRef:=$event.caller

If ($event.eventType="onmouseover")  // event is onmouseover 
$webForm["helpOn_"+$componentRef].show()  // show the help on "orderNumber" by showing the text component with reference "helpOn_orderNumber" 
Else 
$webForm["helpOn_"+$componentRef].hide()  // hide the help on orderNumber
End if 
```


