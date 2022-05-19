var express = require("express");
var sales = express.Router();

// 範例
// 避免佔據過多空間，把邏輯都寫在另一個檔案
// 引入寫好的Function
var square = require("./product.js");
let a = square(8);
sales.get("/", function (req, res, next) {
  res.send(`test :${a} `);
});

/* 商品 
1. 功能：取得全部商品資料。Method: GET。URL: /api/product
2. 功能：取得單筆商品資料。Method: GET。URL: /api/product/:id
3. 功能：新增商品。Method: POST。URL: /api/product
4. 功能：修改商品。Method: PUT。URL: /api/product/:id
5. 功能：刪除商品。Method: DELETE。URL: /api/product/:id 
*/
sales
  .route("/api/product")
  .get(function (req, res, next) {
    res.send("a");
  })
  .post(function (req, res, next) {
    res.send("b");
  });

sales
  .route("/api/product/:id")
  .get(function (req, res, next) {
    res.send("a");
  })
  .put(function (req, res, next) {
    res.send("a");
  })
  .delete(function (req, res, next) {
    res.send("a");
  });

/*訂單
1. 功能：取得全部訂單資料。Method: GET。URL: /api/order
2. 功能：取得單筆訂單資料。Method: GET。URL: /api/order/:id
3. 功能：新增訂單。Method: POST。URL: /api/order
*/
sales
  .route("/api/order")
  .get(function (req, res, next) {
    res.send("a");
  })
  .post(function (req, res, next) {
    res.send("b");
  });

sales.route("/api/order/:id").get(function (req, res, next) {
  res.send("a");
});
/* 店家
1. 功能：取得店家資料。Method: GET。URL: /api/shop/:id
2. 功能：新增店家。Method: POST。URL: /api/shop
3. 功能：修改店家。Method: PUT。URL: /api/shop/:id
*/
sales.route("/api/shop").post(function (req, res, next) {
  res.send("b");
});

sales
  .route("/api/shop/:id")
  .get(function (req, res, next) {
    res.send("a");
  })
  .put(function (req, res, next) {
    res.send("a");
  });

/* 愛心
1. 功能：取得全部Like資料。Method: GET。URL: /api/like 
2. 功能：新增Like。Method: POST。URL: /api/like 
3. 功能：刪除Like。Method: DELETE。URL: /api/like /:id
*/
sales
  .route("/api/like")
  .get(function (req, res, next) {
    res.send("a");
  })
  .post(function (req, res, next) {
    res.send("b");
  });

sales
  .route("/api/like/:id")
  .delete(function (req, res, next) {
    res.send("a");
  });

/* 追蹤
1. 功能：取得全部track資料。Method: GET。URL: /api/track
2. 功能：新增track。Method: POST。URL: /api/track
3. 功能：刪除track。Method: DELETE。URL: /api/track/:id
*/
sales
  .route("/api/track")
  .get(function (req, res, next) {
    res.send("a");
  })
  .post(function (req, res, next) {
    res.send("b");
  });

sales
  .route("/api/track/:id")
  .delete(function (req, res, next) {
    res.send("a");
  });
/*聊天室
1. 功能：取得全部對話資料。Method: GET。URL: /api/talk 
2. 功能：取得單人對話資料。Method: GET。URL: /api/talk/:id
3. 功能：新增對話紀錄。Method: POST。URL: /api/talk 
*/
sales
  .route("/api/talk")
  .get(function (req, res, next) {
    res.send("a");
  })
  .post(function (req, res, next) {
    res.send("b");
  });

sales
  .route("/api/talk/:id")
  .get(function (req, res, next) {
    res.send("a");
  });

module.exports = sales;
