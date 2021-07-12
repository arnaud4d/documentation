---
id: 4DNetkit
title: 4DNetkit
---

The 4DNetKit component allows you to interact with third-party web services and  their APIs (such as [Microsoft Graph](https://docs.microsoft.com/en-us/graph/overview), for example).

## OAuth2
Inside the 4D Netkit component, the OAuth2 method returns the OAuth2 [class store](../Concepts/classes.html#class-stores).

## The Provider Class
The `Provider` class allows you to send requests for authentication tokens to third-party web service providers. 

### OAuth2.Provider.new()

#### Syntax 
**OAuth2.Provider.new**( paramObj : Object ) : Object

#### Parameters 
|Parameter|Type||Description|
|---------|--- |:---:|------|
|paramObj|Object|->| object that determines the properties of the 4D.OAuth2Provider object to be returned |
|Result|Object|<-| object

#### Description
`OAuth2.Provider.new()` instantiates an object of the OAuth2.Provider class.

In `paramObj`, pass an object that determines the properties of the returned object. 

The available properties of `paramObj` are:

|Parameter|Type|Description|
|---------|--- |------|
| name | text | Name of the provider. For example "Microsoft" |
| permission | text | "signedIn": Azure AD will sign in the user and ensure they gave their consent for the permissions your app requests. Requires opening a web browser. "service": call Microsoft Graph with their own identity.|
| applicationId | text | The Application ID  assigned to the app by the registration portal|
| redirectURI | text | (optional in service mode) The redirect_uri of your app, the location where the authorization server sends the user once the app has been successfully authorized.|
| scope | text or collection | text: A space-separated list of the Microsoft Graph permissions that you want the user to consent to.</br> collection: Collection of Microsoft Graph permissions |
| tenant | text | The {tenant} value in the path of the request can be used to control who can sign into the application. The allowed values are *"common"* for both Microsoft accounts and work or school accounts, *"organizations"* for work or school accounts only, *"consumers"* for Microsoft accounts only, and *tenant identifiers* such as the tenant ID or domain name. Default is "common" |
| authenticateURI | text | Uri used to do the Authorization request. By default: "https://login.microsoftonline.com/{tenant}/oauth2/v2.0/authorize" |
| tokenURI | text | Uri used to request an access token. By default: "https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token" |
| applicationSecret | text | (optional) The application secret that you created for your app on the app registration portal. Required for web apps. |
| token | token object | If this property exists, the `getToken()` function uses this token object to calculate which request must be sent. It is automaticaly updated with the token received by the `getToken()` function.   |
| timeout|real| Waiting time in second (by default 120s)|
|expiration | text | Timestamp (ISO 8601 UTC) that represents the expiration time |

#### Value of the returned object

The returned object contains the token `property`, as well as optional additional information returned by the server, like information defined in your token configuration:

Property|Object properties|Type|Description |
|--- |---------| --- |------|
|expiration || text | Timestamp (ISO 8601 UTC) that represents the expiration time |
|token||object| Token returned  |
|| expires_in | text | How long the access token is valid (in seconds). |
|| access_token | text | The requested access token. |
|| refresh_token | text | Your app can use this token to acquire additional access tokens after the current access token expires. Refresh tokens are long-lived, and can be used to retain access to resources for extended periods of time. Available only if the value of the `permission` property is "signedIn" |
|| token_type | text | Indicates the token type value. The only token type that Azure AD supports is "Bearer". |
||scope|text| The permissions (scopes) that the access_token is valid for.|

### .getToken()

`4D.OAuth2Provider.getToken()` returns an object:

#### Syntax

**4D.OAuth2Provider.getToken**() : Object

#### Description 

If the value of `token` is "empty", the command sends a request for a new token.

If the token has expired: 
*   If the token object has the `refreshToken` property, the command sends a new request to refresh the token and returns it.
*   If the token object does not have the `refreshToken` property, the command automatically sends a request for a new token. 

If the 4D.OAuth2Provider object has the "signedIn" property, the command opens a web browser to request authorization.

## Tutorial: Sending an email using Microsoft Graph 

This tutorial walks you through the process of sending an email using Microsoft Graph.

### Prerequisites 

*   You have registered your app on the [Microsoft identity platform](https://docs.microsoft.com/en-us/graph/auth-register-app-v2) to get an application ID.

> Here, the term "application" does not refer to an application built in 4D. It refers to an entry point you create on the Azure portal, and which allows you to call Microsoft Graph.

*   You have an email address compatible with Microsoft Graph

Once you have your app ID, you can establish a connection to your Azure application and send an email using the SMTP transporter:

```4d

// Establish a connection to Microsoft Graph
var $oAuth2 : Object
var $token : Object

$param:=New object()
$param.name:="Microsoft"
$param.permission:="signedIn"
$param.applicationId:="your-application-id"
$param.redirectURI:="http://127.0.0.1:50993/authorize/"

$param.scope:="https://outlook.office.com/SMTP.Send"

$oAuth2:=OAuth2.Provider.new($param)

$token:=$oAuth2.getToken()

// Configure SMTP
$address:="your-email-address"

$parameters:=New object
$parameters.accessTokenOAuth2:=$token.accessToken
$parameters.authenticationMode:=SMTP authentication OAUTH2
$parameters.host:="smtp.office365.com"
$parameters.port:=587
$parameters.user:=$address

$parameters.logFile:="smtp.log"

// Send an email
$smtp:=SMTP New transporter($parameters)

$statusSMTP:=$smtp.checkConnection()
If ($statusSMTP.success)
	$statusSend:=$smtp.send(mail($address))
Else 
	ALERT("Access denied to SMTP server")
End if 
```

Set the contents of the mail: 

> TODO -> Explain the code


```4d
#DECLARE($from : Text)->$email : Object

$email:=New object
$email.subject:="my first mail "+Timestamp
$email.from:=$from
//$email.to:="recipient-email-address"
//$email.attachments:=New collection(MAIL New attachment("c:\\tmp\\28619330.pdf"))

$email.to:=New collection
$email.to.push(New object("email"; "recipient-email-address"))
$email.textBody:="Test mail \r\n This is just a test e-mail \r\n Please ignore it"
$email.htmlBody:="<html><body><h1>Test mail </h1> This is just a test e-mail <br /> Please ignore it</html><body>"
```