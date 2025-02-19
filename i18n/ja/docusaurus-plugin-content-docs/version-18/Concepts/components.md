---
id: components
title: コンポーネント
---

4D のコンポーネントとは、他のデータベースにインストール可能な、1つ以上の機能を持つ 4D メソッドやフォームの一式です。 たとえば、メールの送受信をおこない、それらを 4D データベースに格納するための機能を持ったコンポーネントを作成できます。

4D コンポーネントの作成とインストールは直接 4D を使用しておこないます。 4D では、コンポーネントは [プラグイン](Concepts/plug-ins.md) のように扱われ、以下の原則が適用されます:

- コンポーネントは、標準のアーキテクチャーまたはパッケージ (.4dbase 拡張子) の形をしたストラクチャーファイル ( コンパイルまたは非コンパイル) で構成されます。
- データベースにコンポーネントをインストールするには、データベースのストラクチャーファイルと同階層の "Components" フォルダーにコンポーネントをコピーします。
- コンポーネントは次の 4D の要素を呼び出すことができます: プロジェクトメソッド、プロジェクトフォーム、メニューバー、選択リスト、ライブラリピクチャーなど。 反面、コンポーネントが呼び出せないものは、データベースメソッドとトリガーです。
- コンポーネント内で標準のテーブルやデータファイルを使用することはできません。 しかし、外部データベースのメカニズムを使用すればテーブルやフィールドを作成し、そこにデータを格納したり読み出したりすることができます。 外部データベースは、メインの 4D データベースとは独立して存在し、SQLコマンドでアクセスします。

## 定義

4D のコンポーネント管理メカニズムでは、以下の用語とコンセプトを使います:

- **マトリクスデータベース**: コンポーネント開発に使用する4D データベース。 マトリクスデータベースは特別な属性を持たない標準のデータベースです。 マトリクスデータベースはひとつのコンポーネントを構成します。 マトリクスデータベースは、コンポーネントを使用するデータベース (ホストデータベース) の Components フォルダーにコピーして使います。コンパイルされていてもいなくてもかまいません。
- **ホストデータベース**: コンポーネントがインストールされ、それを使用するデータベース。
- **コンポーネント**: ホストデータベースによって使用される目的で、同データベースの Components フォルダーにコピーされたマトリクスデータベース (コンパイル済みまたは非コンパイル)。

データベースは "マトリクス" にも "ホスト" にもなりえます。言い換えれば、マトリクスデータベース自体も1 つ以上のコンポーネントを使用できます。 しかしコンポーネントが "サブコンポーネント" を使用することはできません。

### コンポーネントの保護: コンパイル

コンポーネントとしてインストールされたマトリクスデータベースのプロジェクトメソッドは、ホストデータベースからデフォルトでアクセス可能です。 特に:

- エクスプローラーのメソッドページに存在する共有のプロジェクトメソッドは、ホストデータベースのメソッドから呼び出し可能です。 エクスプローラーのプレビューエリアでそれらの内容を選択してコピーすることが可能です。 また、その内容はデバッガーで見ることもできます。 しかし、それらをメソッドエディター上で開いたり編集したりすることはできません。
- マトリクスデータベースの他のプロジェクトメソッドはエクスプローラーに現れません。しかし、ホストデータベースのデバッガーには内容が表示されます。

コンポーネントのプロジェクトメソッドを効果的に保護するには、マトリクスデータベースをコンパイルして、インタプリターコードを含まない .4dc ファイルとして提供します。 コンパイルされたマトリクスデータベースがコンポーネントとしてインストールされると:

- エクスプローラーのメソッドページに存在する共有のプロジェクトメソッドは、ホストデータベースのメソッドから呼び出し可能です。 しかし、その内容はプレビューエリアにもデバッガーにも表示されません。
- マトリクスデータベースの他のプロジェクトメソッドは一切表示されません。

## プロジェクトメソッドの共有

マトリクスデータベースのすべてのプロジェクトメソッドは 、コンポーネントに含まれます。つまり、マトリクスデータベースをコンポーネント化しても、これらのプロジェクトメソッドは同コンポーネントにて呼び出して実行することができます。

他方、デフォルトでは、これらのプロジェクトメソッドはホストデータベースに表示されず、呼び出すこともできません。 プロジェクトメソッドをホストデータベースと共有するには、 マトリクスデータベース側でそのメソッドをそのように明示的に設定しなければなりません。 設定することで、それらのプロジェクトメソッドはホストデータベースにて呼び出せるようになります (しかしホストデータベースのメソッドエディターで編集することはできません)。 これらのメソッドはコンポーネントの **エントリーポイント** となります。

**注:** セキュリティのため、デフォルトでは、コンポーネントはホストデータベースのプロジェクトメソッドを実行することはできません。 特定の場合に、ホストデータベースのプロジェクトメソッドにコンポーネントがアクセスできるようにする必要があるかもしれません。 そうするには、ホストデータベースのプロジェクトメソッド側で、コンポーネントからのアクセスを可能にするよう明示的に指定しなければなりません。

![](../assets/en/Concepts/pict516563.en.png)

## 変数の渡し方

ローカル、プロセス、インタープロセス変数は、コンポーネントとホストデータベース間で共有されません。 ホストデータベースからコンポーネントの変数、またはその逆にアクセスする唯一の方法はポインターを使用することです。

配列を使用した例:

```4d
// ホストデータベース側:
     ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

// コンポーネント側で AMethod プロジェクトメソッドは以下の通りです:
     APPEND TO ARRAY($1->;2)
```

変数を使用した例:

```4d
 C_TEXT(myvariable)
 component_method1(->myvariable)
 C_POINTER($p)
 $p:=component_method2(...)
```

ホストデータベースとコンポーネント間でポインターを使用して通信をおこなうには、以下の点を考慮する必要があります:

- `Get pointer` をコンポーネント内で使用した場合、このコマンドはホストデータベースの変数へのポインターを返しません。また逆にこのコマンドをホストデータベースで使用した場合も同様です。

- コンパイル済みデータベースでは、コンパイルされたコンポーネントしか使用できませんが、インタープリターデータベースの場合には、インタープリターおよびコンパイル済みコンポーネントを同時に使用することができます。 この場合、ポインターの利用は以下の原則を守らなければなりません: インタープリターモードでは、コンパイルモードにおいて作成されたポインターを解釈できます。逆にコンパイルモードでは、インタープリターモードにて作成されたポインターを解釈することはできません。 以下の例でこの原則を説明します: 同じホストデータベースにインストールされた 2つのコンポーネント C ( コンパイル済) と I ( インタープリタ) があるとします:
- コンポーネントC が定義する変数 `myCvar` があるとき、コンポーネントI はポインター `->myCvar` を使用して変数の値にアクセスすることができます。
- コンポーネントI が定義する変数 `myIvar` があるとき、コンポーネントC はポインター `->myIvar` を使用しても変数の値にアクセスすることはできません。 このシンタックスは実行エラーを起こします。

- `RESOLVE POINTER` を使用したポインターの比較はお勧めできません。 変数の分離の原則により、ホストデータベースとコンポーネント (あるいは他のコンポーネント) で同じ名前の変数が存在することができますが、根本的にそれらは異なる内容を持ちます。 両コンテキストで、変数のタイプが違うことさえありえます。 ポインター `myptr1` と `myptr2` がそれぞれ変数を指すとき、以下の比較は正しくない結果となるかもしれません:

```4d
     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)
     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)
     If(vVarName1=vVarName2)
      // 変数が異なっているにもかかわらず、このテストはtrue を返します
```

このような場合には、ポインターを比較しなければなりません:

```4d
     If(myptr1=myptr2) // このテストはFalse を返します
```

## ホストデータベースのテーブルへのアクセス

コンポーネントでテーブルを使用することはできませんが、ホストデータベースとコンポーネントはポインターを使用して通信を行うことができます。 たとえば、以下はコンポーネントで実行可能なメソッドです:

```4d
// コンポーネントメソッドの呼び出し
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

コンポーネント内の `methCreateRec` メソッドのコード:

```4d
C_POINTER($1) // ホストデータベースのテーブルへのポインター
C_POINTER($2) // ホストデータベースのフィールドへのポインター
C_TEXT($3) // 代入する値

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

## ランゲージコマンドのスコープ

[使用できないコマンド](#使用できないコマンド) を除き、コンポーネントではすべての 4D ランゲージコマンドが使用できます。

コマンドがコンポーネントから呼ばれると、コマンドはコンポーネントのコンテキストで実行されます。ただし `EXECUTE METHOD` コマンドは除きます。このコマンドは、パラメーターにて指定されたメソッドのコンテキストを使用します。 また、ユーザー＆グループテーマの読み出しコマンドはコンポーネントで使用することができますが、読み出されるのはホストデータベースのユーザー＆グループ情報であることに注意してください (コンポーネントに固有のユーザー＆グループはありません)。

`SET DATABASE PARAMETER` と `Get database parameter` コマンドは例外となります: これらのコマンドのスコープはグローバルです。 これらのコマンドがコンポーネントから呼び出されると、結果はホストデータベースに適用されます。

さらに、`Structure file` と `Get 4D folder` コマンドは、コンポーネントで使用するための設定ができるようになっています。

`COMPONENT LIST` コマンドを使用して、ホストデータベースにロードされたコンポーネントのリストを取得できます。

### 使用できないコマンド

(読み取り専用モードで開かれるため) ストラクチャーファイルを更新する以下のコマンドは、コンポーネントで使用することができません。 コンポーネント中で以下のコマンドを実行すると、-10511, "CommandName コマンドをコンポーネントでコールすることはできません" のエラーが生成されます:

- `ON EVENT CALL`
- `Method called on event`
- `SET PICTURE TO LIBRARY`
- `REMOVE PICTURE FROM LIBRARY`
- `SAVE LIST`
- `ARRAY TO LIST`
- `EDIT FORM`
- `CREATE USER FORM`
- `DELETE USER FORM`
- `CHANGE PASSWORD`
- `EDIT ACCESS`
- `Set group properties`
- `Set user properties`
- `DELETE USER`
- `CHANGE LICENSES`
- `BLOB TO USERS`
- `SET PLUGIN ACCESS`

**注:**

- `Current form table` コマンドは、プロジェクトフォームのコンテキストで呼び出されると `Nil` を返します。 ゆえにこのコマンドをコンポーネントで使用することはできません。
- SQLデータ定義言語のコマンド (`CREATE TABLE`、`DROP TABLE`等) をコンポーネントのフレームワークで使用することはできません。 ただし、外部データベースの場合は使用することができます (`CREATE DATABASE` SQL コマンド参照)。

## エラー処理

`ON ERR CALL` コマンドによって実装された [エラー処理メソッド](Concepts/error-handling.md) は、実行中のデータベースに対してのみ適用されます。 コンポーネントによって生成されたエラーの場合、ホストデータベースの `ON ERR CALL` エラー処理メソッドは呼び出されず、その逆もまた然りです。

## フォームの使用

- 特定のテーブルに属さない" プロジェクトフォーム" のみが、コンポーネント内で利用できます。 マトリクスデータベースのプロジェクトフォームはすべて、コンポーネントで使用することができます。
- コンポーネントはホストデータベースのテーブルフォームを使用できます。 この場合、コンポーネントのコードでフォームを指定するにあたっては、テーブル名ではなく、テーブルへのポインターを使用しなければならないことに注意してください。

**注:** コンポーネントが `ADD RECORD` コマンドを使用すると、ホストデータベースのコンテキストで、ホストデータベースのカレントの入力フォームが表示されます。 したがって、その入力フォーム上に変数が含まれている場合、コンポーネントはその変数にアクセスできません。

- コンポーネントフォームをホストデータベース内でサブフォームとして公開することができます。 これは具体的には、グラフィックオブジェクトを提供するコンポーネントを開発できることを意味します。 たとえば、4D社が提供するウィジェットはコンポーネントのサブフォーム利用に基づいています。

## テーブルやフィールドの利用

コンポーネントは、マトリクスデータベースのストラクチャーで定義されたテーブルやフィールドを使用することはできません。 しかし外部データベースを作成し、そのテーブルやフィールドを必要に応じ利用することはできます。 外部データベースの作成と管理は SQL を用いておこないます。 外部データベースは、メインの 4Dデータベースから独立している別の 4Dデータベースですが、メインデータベースから操作が可能です。 外部データベースの利用は、そのデータベースを一時的にカレントデータベースに指定することです。言い換えれば、4Dが実行する SQL クエリのターゲットデータベースとして外部データベースを指定します。 外部データベースの作成は SQL の `CREATE DATABASE` コマンドを使用します。

### 例題

以下のコードはコンポーネントに実装されており、外部データベースに対して3つの基本的なアクションをおこないます:

- 外部データベースを作成します (存在しない場合)
- 外部データベースにデータを追加します
- 外部データベースからデータを読み込みます

外部データベースの作成:

```4d
<>MyDatabase:=Get 4D folder+"\MyDB" // (Windows) データを許可されているディレクトリに保存します
 Begin SQL
        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];
        USE DATABASE DATAFILE :[<>MyDatabase];
        CREATE TABLE IF NOT EXISTS KEEPIT
        (
        ID INT32 PRIMARY KEY,
        kind VARCHAR,
        name VARCHAR,
        code TEXT,
        sort_order INT32
        );

        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);

        USE DATABASE SQL_INTERNAL;

 End SQL
```

外部データベースへのデータ書き込み:

```4d
 $Ptr_1:=$2 // ホストデータベースへのデータアクセスはポインターを通じておこないます
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6
 Begin SQL

        USE DATABASE DATAFILE :[<>MyDatabase];

        INSERT INTO KEEPIT
        (ID, kind, name, code, sort_order)
        VALUES
        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);

        USE DATABASE SQL_INTERNAL;

 End SQL
```

外部データベースからデータを読み込み:

```4d
 $Ptr_1:=$2 // ホストデータベースへのデータアクセスはポインターを通じておこないます
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6

 Begin SQL

    USE DATABASE DATAFILE :[<>MyDatabase];

    SELECT ALL ID, kind, name, code, sort_order
    FROM KEEPIT
    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;

    USE DATABASE SQL_INTERNAL;

 End SQL
```

## リソースの使用

コンポーネントはリソースを使用することができます。 リソース管理の原則に従い、コンポーネントが .4dbase 形式の場合 (推奨されるアーキテクチャー)、Resources フォルダーは .4dbase フォルダーの中に置かれます。

これによって自動メカニズムが有効となり、コンポーネントの Resources フォルダー内で見つかった XLIFF ファイルは、 同コンポーネントによってロードされます。

1つ以上のコンポーネントを含むホストデータベースでは、ホストデータベースと同様にそれぞれのコンポーネントも固有のリソースチェーンを持っています。 リソースは異なるデータベース間で分離されます。コンポーネントA のリソースにコンポーネントB やホストデータベースからアクセスすることはできません。

## コンポーネントのオンラインヘルプ

コンポーネントにオンラインヘルプを追加できるように、専用のメカニズムが実装されています。 原理は 4D データベースに提供されているものと同じです:

- コンポーネントヘルプは拡張子が .htm, .html または (Windows のみ) .chm で提供されます。
- ヘルプファイルはコンポーネントのストラクチャーファイルと同階層に置かれ、ストラクチャーと同じ名前でなくてはなりません。
- このファイルは自動的にアプリケーションのヘルプメニューに、" ヘルプ: ヘルプファイル名" のタイトルでロードされます。
