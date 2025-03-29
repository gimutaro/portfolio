# GIMU Portfolio

GIMUのゲームクリエイターポートフォリオサイトです。PC向けゲームとモバイル向けゲームの情報を掲載しています。

## プロジェクト構成

```
gimu-portfolio/
├── index.html        # メインのHTMLファイル
├── css/
│   └── styles.css    # スタイルシート
├── js/
│   └── main.js       # JavaScriptファイル
└── images/           # 画像ディレクトリ
    ├── game1.jpg     # ゲーム画像1（追加予定）
    └── game2.jpg     # ゲーム画像2（追加予定）
```

## デプロイ方法

### GitHub

1. GitHubでリポジトリを作成
2. 以下のコマンドでリポジトリをプッシュ

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [GitHubリポジトリのURL]
git push -u origin main
```

### Vercel

1. [Vercel](https://vercel.com/)にログイン
2. 「New Project」をクリック
3. GitHubリポジトリをインポート
4. デフォルト設定のまま「Deploy」をクリック

## 画像について

`images`ディレクトリに以下の画像ファイルを追加してください：

- `game1.jpg` - "Secrets of the AI Laboratory"ゲームの画像
- `game2.jpg` - "Find Clowns"ゲームの画像

## 更新履歴

- 2025/03/30 - 初期バージョン作成