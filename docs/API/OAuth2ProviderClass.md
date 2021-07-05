---
id: OAuth2ProviderClass
title: OAuth2Provider
---

The OAuth2.Provider class allows you to send authentication token requests to third-party service providers in order to use their APIs (such as [Microsoft Graph](https://docs.microsoft.com/en-us/graph/overview), for example).

### Summary 
||
|---|
|[<!-- INCLUDE #OAuth2.Provider.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #OAuth2.Provider.new().Summary --> |

## OAuth2.Provider.new()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R3|Added|
</details>

<!-- REF #OAuth2.Provider.new().Syntax -->
**OAuth2.Provider.new()** ( paramObj ) : Object<!-- END REF -->

<!-- REF #OAuth2.Provider.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|paramObj|Object|->|Object containing parameters corresponding to the attributes of the resulting Oauth2Provider object|
|Result|Object|<-|OAuth2Provider object
<!-- END REF -->

#### Description
<!-- REF #OAuth2.Provider.new().Summary --> `OAuth2.Provider.new()` instantiates an object of the OAuth2.Provider class. 
<!-- END REF --> 

In `paramObj`, pass an object containing parameters corresponding to the attributes of the resulting Oauth2Provider object 

The available parameters are: 

|Parameter|Type|Description|
|---------|--- |------|
| name | text | value="Microsoft" |
| permission | text | "signedIn": Azure AD will sign the user in and ensure their consent for the permissions your app requests. Need to open a web browser. "service": call Microsoft Graph with their own identity.|
| applicationId | text | The Application ID that the registration portal assigned the app |
| redirectURI | text | The redirect_uri of your app, where authentication responses can be sent and received by your app. |
| scope | text / collection | text: A space-separated list of the Microsoft Graph permissions that you want the user to consent to. collection: collection of Microsoft Graph permissions |
| tenant | text | The {tenant} value in the path of the request can be used to control who can sign into the application. The allowed values are *"common"* for both Microsoft accounts and work or school accounts, *"organizations"* for work or school accounts only, *"consumers"* for Microsoft accounts only, and *tenant identifiers* such as the tenant ID or domain name. By default, "common" |
| authenticateURI | text | Uri used to do the Authorization request. By default: "https://login.microsoftonline.com/{tenant}/oauth2/v2.0/authorize" |
| tokenURI | text | Uri used to request an access token. By default: "https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token" |
| applicationSecret | text | The application secret that you created in the app registration portal for your app. Required for web apps. |
| token | token object | If present, getToken() function uses this token object to calculate wich request must be sent. It is automaticaly updated with the token received by getToken() function.   |
| timeout|real| Waiting time in second (by default 120s)|

## .getToken()

Property|Object properties|Type|Description |
|--- |---------| --- |------|
|token||object| token returned  |
||expiration | text | timestamp (ISO 8601 UTC) that represent the expiration time |
|| expiresIn | text | How long the access token is valid (in seconds). |
|| accessToken | text | The requested access token. |
|| refreshToken | text | Your app can use this token to acquire additional access tokens after the current access token expires. Refresh tokens are long-lived, and can be used to retain access to resources for extended periods of time. Available only if permission="signedIn" |
|| tokenType | text | Indicates the token type value. The only type that Azure AD supports is "Bearer". |
||scope|text| The permissions (scopes) that the access_token is valid for.|
