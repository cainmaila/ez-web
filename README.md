# ez-web Web App框架(vue2 + es6 + less) + WebPack Dev Server 

v1.4.0 Web App框架 vue-router<br>
v1.3.1 新增html模板<br>
v1.30 vue 2 支援<br>
v1.21 支援圖片打包<br>
v1.20 支援es6寫法<br>
v1.10 支援Less<br>
v1.00 打包js，及時更新效果 

## 安裝

```
npm install webpack-dev-server -g
npm install
```

## 使用

編譯的js與less請對應 **webpack.config.js**

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
