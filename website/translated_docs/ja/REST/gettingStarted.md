---
id: gettingStarted
title: はじめに
---

4D provides you with a powerful REST server, that allows direct access to data stored in your 4D applications.

The REST server is included in 4D and 4D Server, it is automatically available in your 4D applications [once it is configured](configuration.md).

この章では、簡単な例題を使用して REST機能を紹介します。 これから、実際に次のことをしてみましょう:
- create and configure a basic 4D application project
- access data from the 4D project through REST using a standard browser.

To keep the example simple, we’re going to use 4D and a browser that are running on the same machine. もちろん、リモートアーキテクチャーを使うことも可能です。



## Creating and configuring the 4D project

1. Launch your 4D or 4D Server application and create a new project. 名前は仮に "Emp4D" とします。

2. ストラクチャーエディターを開き、[Employees] テーブルを作成して、次のフィールドを追加します:
    - Lastname (文字列)
    - Firstname (文字列)
    - Salary (倍長整数)

![](assets/en/REST/getstarted1.png)

> テーブルおよび各フィールドの "RESTリソースとして公開" オプションはデフォルトで選択されています。これを変更しないでください。

3. フォームを作成し、何名かの社員レコードを作成します:

![](assets/en/REST/getstarted2.png)

4. Display the **Web/REST resource** page of the Settings dialog box and [check the Expose as REST server](configuration.md#starting-the-rest-server) option.

5. 上部の **実行** メニューから、必要に応じて **Webサーバー開始** を選択し、次に同メニューから **Webサーバーテスト** を選択します。

規定のブラウザーが開かれ、4D Webサーバーのデフォルトホームページが表示されます。


## ブラウザーから 4D データにアクセスする

これで、RESTリクエストを使った 4D のデータの読み込み・編集が可能になりました。

4D の REST URL リクエストは必ず、`address:port` エリアの後に入る `/rest` から始まります。 たとえば、4Dデータストアの内容を確認するには、次のように書けます:

```
http://127.0.0.1/rest/$catalog
```

RESTサーバーの応答です:

```
{
    "__UNIQID": "96A49F7EF2ABDE44BF32059D9ABC65C1",
    "dataClasses": [
        {
            "name": "Employees",
            "uri": "/rest/$catalog/Employees",
            "dataURI": "/rest/Employees"
        }
    ]
}
```

これは、データストアに Employees データクラスが格納されていることを意味します。 データクラス属性を確認するには、次のように書きます:

```
/rest/$catalog/Employees
```

また、Employees データクラスの全エンティティを取得するには:

```
/rest/Employees
```

**Response:**

```
{
    "__entityModel": "Employees",
    "__GlobalStamp": 0,
    "__COUNT": 3,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "1",
            "__TIMESTAMP": "2020-01-07T17:07:52.467Z",
            "__STAMP": 2,
            "ID": 1,
            "Lastname": "Brown",
            "Firstname": "Michael",
            "Salary": 25000
        },
        {
            "__KEY": "2",
            "__TIMESTAMP": "2020-01-07T17:08:14.387Z",
            "__STAMP": 2,
            "ID": 2,
            "Lastname": "Jones",
            "Firstname": "Maryanne",
            "Salary": 35000
        },
        {
            "__KEY": "3",
            "__TIMESTAMP": "2020-01-07T17:08:34.844Z",
            "__STAMP": 2,
            "ID": 3,
            "Lastname": "Smithers",
            "Firstname": "Jack",
            "Salary": 41000
        }
    ],
    "__SENT": 3
}
```

取得するデータをフィルターする方法も多数あります。 たとえば、2番目のエンティティの "Lastname" 属性値のみを取得するには、次のように書きます:

```
/rest/Employees(2)/Lastname
```

**Response:**

```
{
    "__entityModel": "Employees",
    "__KEY": "2",
    "__TIMESTAMP": "2020-01-07T17:08:14.387Z",
    "__STAMP": 2,
    "Lastname": "Jones"
}
```

The 4D [REST API](REST_requests.md) provides various commands to interact with the 4D applications.  
