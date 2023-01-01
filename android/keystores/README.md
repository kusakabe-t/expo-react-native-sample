# ビルド & デプロイについて
このフォルダ直下にkeystoreを追加してください
以下のコマンドで新しく作成するか、既に作成済みのものを用意してください

```shell
keytool -genkey -v -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -storepass <KEYSTOREパスワード> -keypass <KEYパスワード> -alias <Keyのエイリアス> -keystore <internal | release>.keystore -dname "CN=<アプリ名>,OU=,O=,L=,S=,C=JP"
```

ビルド時に以下のようにファイルの場所やパスワードを聞かれます

```shell
eas build --platform android

📝  Android application id Learn more: https://expo.fyi/android-package
✔ What would you like your Android application id to be? … xxxxx
✔ Using remote Android credentials (Expo server)
✔ Generate a new Android Keystore? … no

In this mode, we won't be able to make sure that your credentials are valid.
Double check that you're uploading valid files for your app otherwise you may encounter strange errors!
When building for IOS make sure you've created your App ID on the Apple Developer Portal, that your App ID
is in app.json as `bundleIdentifier`, and that the provisioning profile you
upload matches that Team ID and App ID.

✔ Path to the Keystore file. … android/keystores/release.keystore
✔ Keystore password … *********
✔ Key alias … react-native-sample
✔ Key password … *********
✔ Created keystore

Compressing project files and uploading to EAS Build. Learn more: https://expo.fyi/eas-build-archive
✔ Uploaded to EAS 

Build details: https://expo.dev/accounts/kusakabe-t/projects/react-native-sample/builds/xxxxx

Waiting for build to complete. You can press Ctrl+C to exit.
✔ Build finished

🤖 Android app:
https://expo.dev/artifacts/eas/xxxxx.aab
```
