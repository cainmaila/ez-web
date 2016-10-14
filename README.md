# ez-web Vue2 Web app 

v1.5.2 加入head與範本，組織架構
v1.5.1 加入vue各種資源與bootstrap3，後台專用<br>
v1.5.0 支援vue2<br>
v1.1.2 支援html版型控制<br>
v1.11 支援圖片打包<br>
v1.10 支援Less<br>
v1.00 打包js，及時更新效果<br>

## 安裝

```
npm install webpack-dev-server -g
npm install
```

ERROR in Vue packages version mismatch:
```
npm up -d
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
