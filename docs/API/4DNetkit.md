---
id: 4DNetKit
title: 4D NetKit
---

# Overview
The 4D NetKit component is a built-in 4D component that allows you to interact with third-party web services and  their APIs (such as [Microsoft Graph](https://docs.microsoft.com/en-us/graph/overview), for example).

# Table of contents

* [Component method and class store](#oauth2-method-and-class-store)
* [The Provider class](#the-provider-class)
* [Class Methods](#class-methods)
* [Tutorial](#tutorial)


## Component method
Inside the 4D NetKit component, the `New OAuth2 provider` method returns an object which is an instance of the `Provider` [class](https://developer.4d.com/docs/en/Concepts/classes.html).

## The Provider Class
The `Provider` class allows you to send requests for authentication tokens to third-party web service providers. 

#### Syntax 
**New OAuth2 provider**( paramObj : Object ) : Object

#### Parameters 
|Parameter|Type||Description|
|---------|--- |:---:|------|
|paramObj|Object|->| determines the properties of the object to be returned |
|Result|Object|<-| object

#### Description
`New OAuth2 provider` instantiates an object of the `Provider` class.

In `paramObj`, pass an object that determines the properties of the returned object. 

The available properties of `paramObj` are:

|Parameter|Type|Description|
|---------|--- |------|
| name | text | Name of the provider. For example "Microsoft" |
| permission | text | "signedIn": Azure AD will sign in the user and ensure they gave their consent for the permissions your app requests (opens a web browser). "service": the app calls Microsoft Graph [with its own identity](https://docs.microsoft.com/en-us/graph/auth-v2-service) (access without a user).|
| clientId | text | The client ID assigned to the app by the registration portal|
| redirectURI | text | (optional in service mode) The redirect_uri of your app, the location where the authorization server sends the user once the app has been successfully authorized.|
| scope | text or collection | text: A space-separated list of the Microsoft Graph permissions that you want the user to consent to.</br> collection: Collection of Microsoft Graph permissions |
| tenant | text | The {tenant} value in the path of the request can be used to control who can sign into the application. The allowed values are *"common"* for both Microsoft accounts and work or school accounts, *"organizations"* for work or school accounts only, *"consumers"* for Microsoft accounts only, and *tenant identifiers* such as the tenant ID or domain name. Default is "common" |
| authenticateURI | text | Uri used to do the Authorization request. By default: "https://login.microsoftonline.com/{tenant}/oauth2/v2.0/authorize" |
| tokenURI | text | Uri used to request an access token. By default: "https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token" |
| clientSecret | text | (optional) The application secret that you created for your app in the app registration portal. Required for web apps. |
| token | object | If this property exists, the `getToken()` function uses this token object to calculate which request must be sent. It is automatically updated with the token received by the `getToken()` function.   |
| timeout|real| Waiting time in seconds (by default 120s)|
|tokenExpiration | text | Timestamp (ISO 8601 UTC) that represents the expiration time |
### .getToken()

`.getToken()` returns an object that contains a `token` property (as defined by the [IETF](https://datatracker.ietf.org/doc/html/rfc6749#section-5.1)), as well as optional additional information returned by the server:

Property|Object properties|Type|Description |
|--- |---------| --- |------|
|tokenExpiration || text | Timestamp (ISO 8601 UTC) that indicates the expiration time of the token|
|token||object| Token returned |
|| expires_in | text | How long the access token is valid (in seconds). |
|| access_token | text | The requested access token. |
|| refresh_token | text | Your app can use this token to acquire additional access tokens after the current access token expires. Refresh tokens are long-lived, and can be used to retain access to resources for extended periods of time. Available only if the value of the `permission` property is "signedIn" |
|| token_type | text | Indicates the token type value. The only token type that Azure AD supports is "Bearer". |
||scope|text| A space separated list of the Microsoft Graph permissions that the access_token is valid for.|

#### Syntax

**.getToken**() : Object

#### Description 

If the value of `token` is empty, the command sends a request for a new token.

If the token has expired: 
*   If the token object has the `refresh_token` property, the command sends a new request to refresh the token and returns it.
*   If the token object does not have the `refresh_token` property, the command automatically sends a request for a new token. 

When requesting access on behalf of a user ("signedIn" mode) the command opens a web browser to request authorization.


# Tutorial : Send an email by calling the Microsoft Graph API

## Objectives 

Establish a connection to the Microsoft Graph and send an email using 4D NetKit and the [SMTP Transporter class](http://developer.4d.com/docs/fr/API/SMTPTransporterClass.html)

## Prerequisites

You have registered an application with the [Microsoft Identity platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) and obtained your application ID (also called client ID).

> Here, the term "application" does not refer to an application built in 4D. It refers to an entry point you create on the Azure portal. You use the generated client ID to tell your 4D application to trust the Microsoft identity platform.

You have an email adress compatible with Microsoft Graph, such as "myaddress@outlook.com".

You know how to use the [SMTP Transporter class](http://developer.4d.com/docs/fr/API/SMTPTransporterClass.html)

## Overview

[Microsoft's documentation on client credentials flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow) is a great resource to understand the authorization workflow.

In this example, we get access [on behalf of a user](https://docs.microsoft.com/en-us/graph/auth-v2-user).

## Steps

Once you have your client ID, you can establish a connection to your Azure application. 

1. Create a method and insert the following code:

```4d

// Establish a connection to your Azure application
var $oAuth2 : Object
var $token : Object

$param:=New object()
$param.name:="Microsoft"
$param.permission:="signedIn"
$param.clientId:="your-client-id"
$param.redirectURI:="http://127.0.0.1:50993/authorize/"

$param.scope:="https://outlook.office.com/SMTP.Send"

$oAuth2:=New OAuth2 provider($param)

$token:=$oAuth2.getToken()
```

2. Create a second method that contains the contents of the email:

```4d
#DECLARE($from : Text)->$email : Object

$email:=New object
$email.subject:="my first mail "+Timestamp
$email.from:=$from

// Add the recipient's email address. You can use your own email address to send an email to yourself.
$email.to:=New collection
$email.to.push(New object("email"; "recipient-email-address"))

// Contents of the email 
$email.textBody:="Test mail \r\n This is just a test e-mail \r\n Please ignore it"
$email.htmlBody:="<html><body><h1>Test mail </h1> This is just a test e-mail <br /> Please ignore it</html><body>"
```

3. Back to the first method, insert the following code to configure SMTP authentication:

```4d
// Configure SMTP
$address:="your-email-address"
$parameters:=New object
$parameters.accessTokenOAuth2:=$token.token.access_token
$parameters.authenticationMode:=SMTP authentication OAUTH2
$parameters.host:="smtp.office365.com"
$parameters.port:=587
$parameters.user:=$address

$parameters.logFile:="smtp.log"
```

4. Add these lines to check the connection and send the email:

```4d
$smtp:=SMTP New transporter($parameters)

$statusSMTP:=$smtp.checkConnection()
If ($statusSMTP.success)
	$statusSend:=$smtp.send(mail($address))
Else 
	ALERT("Access denied to SMTP server")
End if 
```

5. Execute the method, your browser opens a page, allowing you to authenticate.

6. Log in to your Microsoft Outlook account and check that you've received the email.
