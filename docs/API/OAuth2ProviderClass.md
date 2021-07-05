---
id: OAuth2ProviderClass
title: OAuth2Provider
---

The OAuth2.Provider class allows you to send authentication token requests to third-party service providers in order to use their APIs (such as [Microsoft Graph](https://docs.microsoft.com/en-us/graph/overview), for example).

### Summary 
||
|---|
|[<!-- INCLUDE #OAuth2.Provider.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #OAuth2.Provider.new().Summary --> |
|[<!-- INCLUDE #4D.OAuth2Provider.getToken().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.OAuth2Provider.getToken().Summary -->|

## OAuth2.Provider.new()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R3|Added|
</details>

<!-- REF #OAuth2.Provider.new().Syntax -->
**OAuth2.Provider.new**( paramObj : Object ) : Object<!-- END REF -->

<!-- REF #OAuth2.Provider.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|paramObj|Object|->| object that determines the properties of the 4D.OAuth2Provider object to be returned |
|Result|Object|<-| object
<!-- END REF -->

#### Description
`OAuth2.Provider.new()`<!-- REF #OAuth2.Provider.new().Summary -->instantiates an object of the OAuth2.Provider class. 
<!-- END REF --> 

In `paramObj`, pass an object that determines the properties of the returned 4D.Oauth2Provider object. The available properties are:

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

### The `token` property

The value of `token` is an object that can contain optional additional information returned by the server, like information defined in your token configuration:

Property|Object properties|Type|Description |
|--- |---------| --- |------|
|token||object| Token returned  |
||expiration | text | Timestamp (ISO 8601 UTC) that represents the expiration time |
|| expiresIn | text | How long the access token is valid (in seconds). |
|| accessToken | text | The requested access token. |
|| refreshToken | text | Your app can use this token to acquire additional access tokens after the current access token expires. Refresh tokens are long-lived, and can be used to retain access to resources for extended periods of time. Available only if the value of the `permission` property is "signedIn" |
|| tokenType | text | Indicates the token type value. The only token type that Azure AD supports is "Bearer". |
||scope|text| The permissions (scopes) that the access_token is valid for.|

## .getToken()

`4D.OAuth2Provider.getToken()`<!-- REF #4D.OAuth2Provider.getToken().Summary -->returns the `token` property of the `4D.Oauth2Provider` object 
<!-- END REF -->  

<!-- REF #4D.OAuth2Provider.getToken().Syntax -->
**4D.OAuth2Provider.getToken**() : Object<!-- END REF -->

#### Description 

If the value of the `token` property is "empty", the command sends a request for a new token.

If the token has expired: 
*   If the token object has the `refreshToken` property, the command sends a new request to refresh the token and returns it.
*   If the token object does not have the `refreshToken` property, the command automatically sends a request for a new token. 

If the 4D.OAuth2Provider object has the "signedIn" property, the command opens a web browser to request authorization.




