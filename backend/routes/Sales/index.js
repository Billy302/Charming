var express = require("express");
var sales = express.Router();
const connection = require("../../modules/mysql_config");

// 範例
// 避免佔據過多空間，把邏輯都寫在另一個檔案
// 引入寫好的Function
var square = require("./product.js");
let a = square(8);
sales.get("/", function (req, res, next) {
  res.send(`testTS :${a} `);
});

/* 商品 
1. 功能：取得全部商品資料。Method: GET。URL: /api/product?id=  完成
2. 功能：取得單筆商品資料。Method: GET。URL: /api/product/:userID/:productID 完成
3. 功能：新增商品。Method: POST。URL: /api/product 可以寫入但驗證未寫，上傳檔案未做
4. 功能：修改商品。Method: PUT。URL: /api/product/:id  待postman驗證
5. 功能：刪除商品。Method: DELETE。URL: /api/product/:id  待postman驗證
*/

sales
  .route("/api/product")
  .get(async (req, res, next) => {
    // 取得使用者查詢的頁數
    let activePage = req.query.page ? req.query.page : 1;
    // 一次取幾筆
    let rowsPerPage = 15;
    // 分頁數
    let pageCount = 0;
    //  預設排序依照 價格 asc
    let order = req.query.order ? req.query.order : "price";
    let sort = req.query.sort ? req.query.sort : "ASC";

    // 兩個查詢第一個查詢商品，第二個查詢商品總數
    // 查詢商品需要三個變數，order依據 : order / order順序 : sort / Page頁數 : page
    // 預設為查詢第一頁，依照價格低到高
    const sql = `SELECT product_items.* , all_type.type
    FROM product_items
    INNER JOIN all_type
    on product_items.type_id = all_type.sid
    order by product_items.${order} ${sort}
    limit ${(activePage - 1) * rowsPerPage},${activePage * rowsPerPage};
    SELECT count(*) as totalItems FROM product_items;`;

    // 執行SQL語法，取得商品資料 & 商品總數
    const [datas] = await connection.query(sql);
    // 查詢查詢使用者喜愛的產品
    // 查詢LOVE需要一個變數，userID : id
    const sql2 = `SELECT * from product_love where user_id = ${req.query.id}`;

    // 執行SQL語法，取得使用者有哪些LOVE
    const [love] = await connection.query(sql2);

    // 比較取出的商品中，是否有被使用者點過LOVE(新增商品屬性love)
    // 如果有就將商品資料中love為true
    for (let i = 0; i < Object.keys(datas[0]).length; i++) {
      for (let j = 0; j < Object.keys(love).length; j++) {
        if (datas[0][i]["ID"] == love[j]["product_ID"]) {
          datas[0][i]["love"] = "true";
        }
      }
      if (!datas[0][i]["love"]) {
        datas[0][i]["love"] = "false";
      }
    }

    // 計算 分頁總數
    if (Object.values(datas[1]) > 0) {
      pageCount = Math.ceil(Object.values(datas[1]) / rowsPerPage); //pageCount即分頁資料總頁數
    }

    // 加進陣列 分頁總數
    datas.push(pageCount);

    // 總共回傳，商品資料 / 商品總數 /  分頁總數
    res.json(datas);
  })
  .post(async (req, res, next) => {
    // 驗證初始值為false
    let verify = true;
    // // 通過驗證才可以新增
    if (verify) {
      const sql = `INSERT INTO product_items( author_name, product_name, product_copy, price, pic_path, type_id)
      VALUES ('${req.body.authorName}','${req.body.productName}','${req.body.productCopy}','${req.body.price}','${req.body.picPath}','${req.body.typeId}')`;
      // 執行SQL語法，新增商品資料
      const [datas] = await connection.query(sql);
    }
    res.send("post : /api/product");
  });

sales
  .route("/api/product/:id")
  .put(async (req, res, next) => {
    const sql = `UPDATE product_items SET product_name='${req.body.productName}',
    product_copy='${req.body.productCopy}',price='${req.body.price}',
    pic_path='${req.body.picPath}',type_id='${req.body.typeId}' WHERE ID=${req.params.id}`;
    const [datas] = await connection.query(sql);
    res.send("put : /api/product/:id");
  })
  .delete(async (req, res, next) => {
    const sql = `DELETE FROM product_items WHERE ID=${req.params.id}`;
    const datas = await connection.query(sql);
    res.send("delete : /api/product/:id");
  });

sales.get("/api/product/:userID/:productID", async (req, res, next) => {
  // 查詢ID為?的商品資料
  // 查詢商品需要一個變數，productID
  const sql = `SELECT product_items.* , all_type.type
  FROM product_items
  INNER JOIN all_type
  on product_items.type_id = all_type.sid
  WHERE ID=${req.params.productID}`;

  // 執行SQL語法，取得ID為?的商品資料
  const [datas] = await connection.query(sql);

  // 查詢查詢使用者喜愛的產品
  // 查詢LOVE需要一個變數，userID
  const sql2 = `SELECT * from product_love where user_id = ${req.params.userID} and product_ID = ${req.params.productID}`;

  // 執行SQL語法，取得使用者有哪些LOVE
  const [love] = await connection.query(sql2);

  // 如果查詢有值，datas中的lover存為True
  if (love.length) {
    datas[0]["love"] = "true";
  } else {
    datas[0]["love"] = "false";
  }
  res.send(datas);
});

/*訂單
1. 功能：取得全部訂單資料。Method: GET。URL: /api/order
2. 功能：取得單筆訂單資料。Method: GET。URL: /api/order/:id
3. 功能：新增訂單。Method: POST。URL: /api/order
*/
sales
  .route("/api/order")
  .get(function (req, res, next) {
    res.send("get : /api/order");
  })
  .post(function (req, res, next) {
    res.send("post : /api/order");
  });

sales.route("/api/order/:id").get(function (req, res, next) {
  res.send("get : /api/order/:id");
});

/* 愛心
2. 功能：新增love。Method: POST。URL: /api/love  待postman驗證
3. 功能：刪除love。Method: DELETE。URL: /api/love/:id 待postman驗證
*/

sales.post("/api/love", async (req, res, next) => {
  // 新增love，需要兩參數，產品ID : productID， 使用者 : userID
  const sql = `INSERT INTO product_love(product_ID, user_id) VALUES (${req.query.productID},${req.query.userID})`;
  res.send("POST : /api/love");
});
sales.delete("/api/love/:id", async (req, res, next) => {
  // 刪除love，需要一參數，產品ID : id
  const sql = `DELETE FROM product_love WHERE product_ID = ${req.params.id}`;
  const [datas] = await connection.query(sql);
  res.send("delete : /api/love/:id");
});

/* 店家
1. 功能：取得店家資料。Method: GET。URL: /api/shop/:id
2. 功能：新增店家。Method: POST。URL: /api/shop
3. 功能：修改店家。Method: PUT。URL: /api/shop/:id
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
*/
module.exports = sales;

