---
id: directory
title: '$directory'
---

ディレクトリは RESTリクエストを介したユーザーアクセスに対応します。


## $directory/login

4Dアプリケーション上で RESTセッションを開き、ユーザーをログインします。

### 詳細
RESTを介して 4Dアプリケーション上でセッションを開き、ユーザーをログインするには、`$directory/login` を使います。 デフォルトの 4Dセッションタイムアウトを変更することもできます。

パラメーターはすべて、POST の **ヘッダー** に渡す必要があります:

| ヘッダーキー             | ヘッダー値                                 |
| ------------------ | ------------------------------------- |
| username-4D        | ユーザー (任意)                             |
| password-4D        | パスワード (任意)                            |
| hashed-password-4D | ハッシュ化パスワード (任意)                       |
| session-4D-length  | セッション非アクティブタイムアウト (分単位)。 60 以上の値 (任意) |


### 例題

```4d
C_TEXT($response;$body_t)
ARRAY TEXT($hKey;3)
ARRAY TEXT($hValues;3)
$hKey{1}:="username-4D"
$hKey{2}:="hashed-password-4D"
$hKey{3}:="session-4D-length"
$hValues{1}:="john"
$hValues{2}:=Generate digest("123";4D digest)
$hValues{3}:=120
$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)
```

**結果**:

ログインに成功した場合の結果:

```
{
    "result": true
}
```

それ以外の場合の結果:

```
{
     "result": false
}
```
