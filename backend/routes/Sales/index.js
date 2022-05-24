var express = require("express");
var sales = express.Router();

var multer = require("multer");
var upload = multer()

const connection = require("../../modules/mysql_config");

// 全部都要加回傳訊息，成功或失敗 參考 https://reurl.cc/WrAgDL
// 圖片上傳 & 刪除 參考 https://reurl.cc/Gx5veA
// 處理multipart/form-data https://reurl.cc/n1q27X
// 前端表單驗證 https://reurl.cc/yrD0k8
// 後端表單驗證 https://reurl.cc/vdp2kN

/* 商品 
1. 功能：取得全部商品資料。Method: GET。URL: /api/product?id=  完成
2. 功能：取得單筆商品資料。Method: GET。URL: /api/product/:userID/:productID 完成
3. 功能：新增商品。Method: POST。URL: /api/product 待驗證(透過form-data)、驗證未寫
4. 功能：修改商品。Method: PUT。URL: /api/product/:id  待驗證(透過form-data)、驗證未寫
5. 功能：刪除商品。Method: DELETE。URL: /api/product/:id  完成
*/

sales
  .route("/api/product")
  // 取得全部商品資料
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
  // 新增商品，處理multipart/form-data的狀態
  .post(upload.array(), async (req, res, next) => {
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
  // 更新商品項目
  .put(async (req, res, next) => {
    // 共六個參數，5個透過body傳的參數，1個Params傳的參數
    // Body -> productName | productCopy | price | picPath | typeId
    // Params -> id
    const sql = `UPDATE product_items SET product_name='${req.body.productName}',
    product_copy='${req.body.productCopy}',price='${req.body.price}',
    pic_path='${req.body.picPath}',type_id='${req.body.typeId}' WHERE ID=${req.params.id}`;
    const [datas] = await connection.query(sql);
    res.send("put : /api/product/:id");
  })
  // 刪除商品項目
  .delete(async (req, res, next) => {
    // 1個Params傳的參數 => Params -> id
    const sql = `DELETE FROM product_items WHERE ID = ${req.params.id}`;
    const datas = await connection.query(sql);
    res.send("delete : /api/product/:id");
  });
// 查詢商品細項，依照使用者ID & 商品ID
sales.get("/api/product/:userID/:productID", async (req, res, next) => {
  // 查詢商品需要一個變數，productID
  const sql = `SELECT product_items.* , all_type.type
  FROM product_items
  INNER JOIN all_type
  on product_items.type_id = all_type.sid
  WHERE ID=${req.params.productID}`;

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
1. 功能：取得使用者的全部訂單。Method: GET。URL: /api/order/orderShop Postman未驗證
2. 功能：取得使用者的訂單詳細內容。Method: GET。URL: /appi/ordershop/:id Postman未驗證
3. 功能：取得商家所有產品的銷售紀錄。Method: GET。URL: /api/order/orderUser Postman未驗證
4. 功能：新增訂單。Method: POST。URL: /api/order 要問老師! 
*/
sales
  .route("/api/orderShop")
  // 取得使用者的全部訂單
  .get(async (req, res, next) => {
    let activePage = req.query.page ? req.query.page : 1;
    // 一次取幾筆
    let rowsPerPage = 10;
    // 分頁數
    let pageCount = 0;
    // 查詢使用者的訂單 & 訂單總數
    // 兩個參數 使用者ID : id / 頁面 : page /
    const sql = `SELECT product_case.* 
    FROM product_case 
    WHERE product_case.user_ID  = ${req.query.id}
    limit ${(activePage - 1) * rowsPerPage},${activePage * rowsPerPage};
    SELECT count(*) as totalItems FROM product_case`;
    const [datas] = await connection.query(sql);

    // 計算 分頁總數
    if (Object.values(datas[1]) > 0) {
      pageCount = Math.ceil(Object.values(datas[1]) / rowsPerPage); //pageCount即分頁資料總頁數
    }

    // 加進陣列 分頁總數
    datas.push(pageCount);

    res.send(datas);
  })
  // 新增訂單，處理multipart/form-data的狀態
  .post(upload.array(),async (req, res, next) => {
    let sql = `INSERT INTO product_case ( ID, user_ID, total_price) 
    VALUES ('${req.body.ID}','[value-2]','[value-3]')
    `;
    res.send("post : /api/order");
  });

// 取得使用者訂單的詳細內容
sales.get("/api/ordershop/:id", async (req, res, next) => {
  let sql = `SELECT product_case.ID , product_case.create_time , product_items.product_name , product_items.price
  FROM product_case_items
  JOIN product_case
  ON product_case_items.case_ID=product_case.ID
  JOIN product_items
  ON product_case_items.product_ID = product_items.ID
  WHERE product_case.user_ID='${req.params.id}'`;
  const [datas] = await connection.query(sql);
  res.send(datas);
});

// 取得商家所有產品的銷售紀錄
sales.route("/api/orderUser").get(async (req, res, next) => {
  // 需要四個參數，使用者ID : useID (必須要)/ 訂單ID : orderID / 商品名稱 : itemsName / 頁面 : page
  let orderID = req.query.orderID ? req.query.orderID : "";
  let itemsName = req.query.itemsName ? req.query.itemsName : "";
  let activePage = req.query.page ? req.query.page : 1;
  // 一次取幾筆
  let rowsPerPage = 10;
  // 分頁數
  let pageCount = 0;

  // 查詢使用者的訂單 & 訂單總數
  // 兩個參數 使用者ID : id / 頁面 : page /
  let sql = `SELECT product_case.ID , product_case.create_time , product_items.product_name , product_items.price
  FROM product_case_items
  JOIN product_case
  ON product_case_items.case_ID=product_case.ID
  JOIN product_items
  ON product_case_items.product_ID = product_items.ID
  WHERE product_items.author_name='${req.query.useID}'
  limit ${(activePage - 1) * rowsPerPage},${activePage * rowsPerPage}`;

  if (orderID.length == 0) {
    sql += ` and product_items.case_ID =${req.query.orderID}`;
  }
  if (itemsName.length == 0) {
    sql += ` and product_items.product_name likr '%%${req.query.itemsName}'%%`;
  }
  const [datas] = await connection.query(sql);

  // 計算 分頁總數
  if (Object.values(datas[1]) > 0) {
    pageCount = Math.ceil(Object.values(datas[1]) / rowsPerPage); //pageCount即分頁資料總頁數
  }

  // 加進陣列 分頁總數
  datas.push(pageCount);

  res.send(datas);
});

/* 愛心
1. 功能：新增love。Method: POST。URL: /api/love  完成
2. 功能：刪除love。Method: DELETE。URL: /api/love/:id 完成
*/

sales
  .route("/api/love")
  // 新增使用者對哪個產品按<3
  .post(async (req, res, next) => {
    // 新增love，需要兩參數，產品ID : productID， 使用者 : userID
    const sql = `INSERT INTO product_love(product_ID, user_id) VALUES (${req.query.productID},${req.query.userID})`;
    const [datas] = await connection.query(sql);
    res.send(datas);
  })
  // 新增使用者對哪個產品取消<3
  .delete(async (req, res, next) => {
    // 刪除love，需要兩參數，產品ID : productID， 使用者 : userID
    const sql = `DELETE FROM product_love WHERE product_ID = ${req.query.productID} and user_id = ${req.query.userID}`;
    const [datas] = await connection.query(sql);
    res.send(datas);
  });

/* 雜項
1. 功能 : 上傳圖片。Method: POST。URL: /api/upload  檔案儲存位置 fontend/src/Home/Assets/ProductImg 
2. 功能 : 刪除圖片。Method: POST。URL: /api/delete  
*/

var storage = multer.diskStorage({
  // 檔案上傳到這裡
  destination: function (req, file, cb) {
    cb(null, "../../../fontend/src/Home/Assets/ProductImg"); 
  },
  // 定義檔案名稱規範
  filename: function (req, file, cb) {
    // 要改
    cb(null, Date.now() + "-" + file.originalname);
  },
});

upload = multer({ storage: storage });

sales
  .route("/api/upload")
  // 前端form的name要等於uploadedFiles
  .post(upload.array("uploadedFiles",5), async (req, res, next) => {
    res.send(JSON.stringify(req.files));
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
