# ez-web 基本Web頁面(es6 + less) + WebPack Dev Server 

v1.20 支援es6寫法
v1.10 支援Less
v1.00 打包js，及時更新效果 

## 安裝

```
npm install webpack-dev-server -g
npm install
```

## 使用

編譯的js與less請對應 **webpack.config.js**

自動更新的頁面請增加
```
<script src="http://localhost/webpack-dev-server.js"></script>
```

## 開發與編譯

* 開發模式
```
num run dev 
```
開啟瀏覽器的 http://127.0.0.1/，修改對應的js頁面自動更新
<hr>
* 編譯js
```
npm run build
```
<hr>
* 發布版本
```
npm run deploy
```
生成壓縮的js
