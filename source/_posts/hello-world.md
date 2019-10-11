---
title: 使用 Hexo 快速建立 Github 部落格
date: 2019-10-02 
tags: 
  - Hexo
  - Github page
categories:
  - 小技術分享
cover: https://lh3.google.com/u/2/d/1K7wmM7pS5pz5CD4Ej-oTDzGPR9JZezpT=w1918-h892-iv1
---
今天決定把自己的 blog 建立在 github 上。在網路上查了其他人都如何在 github 建立，發現有很多工具可以使用 ! 在這邊我介紹我今天使用的工具 [Hexo](https://hexo.io/)!

# Quick Start 

### 環境架設
下載 Hexo。(首先要有 [Nodejs](https://nodejs.org/en/))
```bash
$ npm install -g hexo-cli
```
下載完後，就可以建立 blog 的資料夾了。
```bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```
資料夾內結構大概看起來長這樣:
```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```
首先看看網站長如何 (預設 port 4000)
```bash
$ hexo server [-p port]
```
更多資訊可以參考 [官網 server](https://hexo.io/docs/server.html)

恭喜我們可以開始建立部落格了。



### 基本設定與操作

#### 設定  _config.yml 檔案

```yml
title: <網站首頁標題>
subtitle: <網站首頁子標題>
description: <網站說明，不會顯示出來，只會在 html 裡>
keywords: <網站關鍵字>
author: <你?>
language: <網站語言，預設 en，若要調為繁體中文，則設為 zh-TW>
timezonde: <網站的時間區域，如果是台灣的話就設 Asia/Taipei>

/**
* 其他都可以先用預設
**/

// 這邊介紹可以建立在 github page 的設定
deploy:
  type: git
  repository: http://github.com/<your github name>/<repository name>.git
  branch: master
```

其他可以去 [官網 configuration](https://hexo.io/docs/configuration) 看看

設定完後，可以重新整理網頁(如果你的 hexo server還開著的話)，會發現網頁有些不太一樣，這樣就成功了。

#### 建立新的文章

```bash
$ hexo new post "你的檔案名稱"
```

command 下完後，可以在 source/_post 裡面看見 "你的檔案名稱.md"，然後就可以開始用 Markdown 語法開始寫作你的文章了。

寫完之後，你的網站並不會多那篇文章，因為 hexo 還沒幫你產生它的網頁，所以需要打以下指令:

```bash
$ hexo generate
```

他就會幫你產生新的網頁，然後一樣重新整理網頁，應該就會有新的文章囉。



### 建立在 Github

hexo 可以透過 git 把你建立完的網頁 push 到你的 repository 裡。

不過需要先下載 hexo-deployer-git

```bash
$ npm install hexo-deployer-git --save
```

下載完後你就可以把你的網頁 deploy 到你的 github page了

```bash
$ hexo d -g 	#他會先 generate 後再 deploy
```

然後恭喜你就可以去 github page看看了!


