# Charming 柴米網
資展國際高雄前端工程師養成班125期 期末專題。
## 網站介紹
柴米網是一個專門販售專業技術的電商平台，四人團隊
## 動機與目的
我們的動機發想源自於fiverr這個自由業者平台，

2016年，台灣被選為世界設計之都，代表台灣人有無限的創意、滿腹的才華，
可巧婦難為無米之炊，英雄苦無用武之地，
為什麼專業技能不能像在蝦皮買東西一樣，容易取得、種類多樣、還能貨比三家呢？
因此我們建了個網站———Charming 柴米網！
## 影片
<h3> <a href="https://www.youtube.com/watch?v=DOxdF6H7_KE&ab_channel=ZitingLiu">影片連結</a> </h3>

|順序| 負責功能 | 負責人 | 時間 |
|---------|---------|---------|---------|
|1|引言 & 視覺|劉芷廷|開始  ~ 11:45|
|2|會員|鍾立婷|11:45 ~ 16:55|
|3|電商 | 謝協昌(組長)|16:55 ~ 24:05|
|4|部落格|蔡璨鴻|24:05 ~ 28:50|
|5|結語|謝協昌|28:52 ~  結束|

## 特色
* 溫和明亮的視覺介面
* 前端 & 後端都是自行編寫
* 前端排版全手刻

## 使用技術
* 前端開發：HTML5、CSS3、Javascript、React.js
* 設計工具：Figma、Photoshop、Illustrator
* 後端技術：Node.js、Express
* 資料庫：MySQL
* 版本控制：Git、Github

## 功能介紹

### 主視覺(劉芷廷) : 整體風格、電商系統切版
網站的主視覺創意的發想源自於『柴米油鹽』這四個字，
我們取頭兩個字『柴米』作為網站的中文名稱，
英文名稱則以諧音『Charming』呼應創意和才華所帶來的魅力光輝， 
我們的LOGO使用Fiverr logo maker製作，
主色調呼應『柴』字，而以咖啡色、黃色和綠色為主。
版面配置以電腦版 1440 & 手機板 375 為版面寬度

### 會員管理(鍾立婷)：會員註冊、登入登出、忘記密碼、會員中心
	使用ajax的方式連結後端做帳號重複的驗證
	透過Fetch將表單送到後端並寫進資料庫
	以api讀取會員資料庫資料並顯示於會員中心
	檢查localstorage內的值來顯示會員的登入或登出狀態
	以nodemail套件做忘記密碼功能的連結來修改為新密碼

### 電商(謝協昌): 商品、購物流程、訂單
	無論前後端都有編寫註解，讓團隊成員方便閱讀
	所有資料在輸入時都有進行前後端的驗證，前端自行編寫驗證，後端使用套件
	前端使用 React 的 Hook ，Local Storage 來完成整個專案，網站架構三層
	useEffect 控制渲染畫面的時機(生命週期)
	useState 控制會影響畫面的狀態
	useLocation 、useParams 取得網址的資料，來完成傳API時所需的條件、組合切換到不同頁面時的網址
	LocalStorage 暫存購物車的資料
	後端編寫參考自 RESTful API 規則，分為商品、特殊商品、訂單等分類
	nodemailer 寄送 Mail，考量到 gmail 的二階段認證問題，選用 hotmail 作為發信源頭
	multer 處理 form-data格式資料 & 檔案格式
	express-validator 做基本驗證
	mysql2 處理 與資料庫相關的工作，Ex: 商品的CRUD等...
>EX:
1. 功能：取得使用者的全部訂單。Method: GET。URL: /api/order/orderUser 
2. 功能：取得使用者的訂單詳細內容。Method: GET。URL: /appi/orderUser/:id 
...

### 部落格(蔡璨鴻) : 部落格文章、留言、社群分享、訂閱、賣家中心
	部落格文章閱讀、作者文章總覽
	留言功能、社群網站分享
	訂閱文章功能、追蹤作者功能
	使用者動態更新、大頭照上傳、封面相片上傳

## 如何引用
```bash
1. git clone https://github.com/Billy302/Charming.git
2. backend 新增 .nev檔在根目錄
	MYSQL_HOST = localhost
	MYSQL_USER = username
	MYSQL_PASSWORD =  password
	MYSQL_DB = charming
	GMAIL_USER = mailname
	GMAIL_PASSWORD = mailpassword
3. 執行npm install (fontend 與 backend都需要)
3. 匯入MySQL_charming.sql
4. 分別啟動 fontend 與 backend
```
## 資料夾導覽

主要按照個人進行分類，前後端都有屬於各自的資料夾

    |-- MySQL_charming.sql (MySQL資料)
	|-- Charming報告簡報 (PDF)
    |-- backend (後端)
    |   |-- .env (請自行建立，格式參照下方介紹)
    |   |-- app.js (設定路由)
    |   |-- modules
    |   |   |-- mysql_config.js (SQL設定)
    |   |-- routes
    |   |   |-- Account (鍾立婷 會員)
    |   |   |   |-- users.js
    |   |   |-- Blog (蔡璨鴻 部落格)
    |   |   |   |-- index.js
    |   |   |-- Sales (謝協昌 電商)
    |   |       |-- index.js
    |-- fontend (前端)
        |-- public (存放圖片)
        |   |-- index.html
        |   |-- Account (鍾立婷 會員)
        |   |-- Blog (蔡璨鴻 部落格)
        |   |-- Home (謝協昌 & 劉芷廷 電商)
        |-- src
            |-- App.js
            |-- App.module.css
            |-- Account (鍾立婷 會員)
            |   |-- Components
            |   |-- images
            |   |-- Pages
            |-- Blog (蔡璨鴻 部落格)
            |   |-- Components
            |   |-- Page
            |-- Home (謝協昌 & 劉芷廷 電商-商品)
            |   |-- Assets
            |   |-- Components
            |   |-- Pages
            |-- Sales (謝協昌 & 劉芷廷  電商-訂單&購物車)
                |-- Assets
                |-- Components
                |-- Pages
