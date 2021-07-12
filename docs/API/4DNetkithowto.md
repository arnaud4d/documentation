---
id: 4DNetkithowto
title: How to Send an Email using the Microsoft Graph API
---

This tutorial will walk you through the process of sending an email in 4D using the Microsoft Graph API. We'll cover how to send a token request using the Provider class, and how to send an email using the SMTP tansporter class.

## Prerequisites

You have [basic knowledge on authentication and authorization](https://docs.microsoft.com/en-us/graph/auth/auth-concepts).

You have registered an app with the [Microsoft Identity platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) and obtained your application ID.

> Here, the term "application" does not refer to an application built in 4D. It refers to an entry point you create on the Azure portal. Once it's done, you can use the generated application ID to tell your 4D application to trust the Microsoft identity platform.

You have installed the 4DNetkit component.

You have an email adress compatible with Microsoft Graph, such as "myadress@outlook.com" for example.

## Establishing a connection to your Azure application

Once you have your app ID, you can establish a connection to your Azure application: 

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
```

In a separate method, you can set the contents of the email: 

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

Back to the first method, here's how to request a token: 

```4d
// Configure SMTP
$address:="your-email-address"
$parameters:=New object
$parameters.accessTokenOAuth2:=$token.accessToken
$parameters.authenticationMode:=SMTP authentication OAUTH2
$parameters.host:="smtp.office365.com"
$parameters.port:=587
$parameters.user:=$address

$parameters.logFile:="smtp.log"
```

And finally, add these lines to send the email:

```4d
$smtp:=SMTP New transporter($parameters)

$statusSMTP:=$smtp.checkConnection()
If ($statusSMTP.success)
	$statusSend:=$smtp.send(mail($address))
Else 
	ALERT("Access denied to SMTP server")
End if 
```

Now you can execute the method and check if you get the email.