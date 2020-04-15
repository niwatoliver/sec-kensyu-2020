# セキュリティ研修用アプリケーション2020
https://sec-kensyu-2020.web.app/

## セットアップ方法
### リポジトリをクローン
```shell script
$ git clone https://github.com/minakawa-daiki/sec-kensyu-2020.git
```

### Firebaseプロジェクトの作成
https://console.firebase.google.com/ からプロジェクトを作成してください。
作成が完了したら、`Firestore`や`Storage`、`Hosting`、`Functions`の設定を行い、
アプリを追加し、各種キーの取得をしておいてください。

### Firebase Authenticationの設定
今回、Firebaseのパスワードログインを問題に組み込んでいるため、
`Firebase Authentication`の`Sign-in method`から「ログイン プロバイダ」の「メール / パスワード」を
有効にしてください。

### サービスアカウントから秘密鍵の生成
Firebase上のサービスアカウントから新しい秘密鍵の生成をし、
`./admin/serviceAccount.json`という形で配置してください。

**このファイルは機密情報ですので、大事に扱ってください**

### `.firebaserc`の設定
```shell script
$ cp .firebaserc.sample .firebaserc
```

`.firebaserc` ファイルの `default` に、作成したFirebaseのプロジェクトIDを設定してください。

### `.env`の設定
`.env`ファイルに、作成したFirebaseの情報や、問題に使用する内容をセットしてください。

- `SITE_TITLE`: サイトのヘッダー部分に表示するタイトル
- `PRIMARY_COLOR`: サイトで使用するメインの色（先頭に`\`を付けてください）
- `SECONDARY_COLOR`: サイトで使用するサブの色（先頭に`\`を付けてください）
- `Q1 ~ Q10`: 各問題の答え
- `Q5_EMAIL`: `Q5`で使用するEmail
- `Q5_PASSWORD`: `Q5`で使用するパスワード 

### 初期設定
```shell script
$ yarn
$ npx firebase login
$ make
```

## デプロイ方法
```shell script
$ make build_and_deploy
```

## ローカルでの起動方法
```shell script
$ yarn dev
```

## 本番アクセス
https://{FirebaseのプロジェクトID}.web.app

## ライセンスについて
このソフトウェアは、MIT Licenseのもとで公開されています。
