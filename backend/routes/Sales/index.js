var express = require("express");
var sales = express.Router();

var multer = require("multer");
var upload = multer();

var fs = require("fs");
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
  // http://localhost:3001/Sales/api/product?id=1&order=price&sort=desc&page=1&typeId=102
  // 需要五個參數，透過Query-> id 參照us_user資料表的id欄位(必備) | order 參照product_items的欄位 | sort 分ASC / DESC | Page 參照總頁數 | typeId 參照product_items資料表的type_id欄位
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
    let typeId = req.query.typeId ? req.query.typeId : "";

    // 兩個查詢第一個查詢商品，第二個查詢商品總數
    // 查詢商品需要三個變數，order依據 : order / order順序 : sort / Page頁數 : page
    // 預設為查詢第一頁，依照價格低到高
    let sql = `SELECT product_items.* , all_type.type
    FROM product_items
    INNER JOIN all_type
    on product_items.type_id = all_type.sid`;

    if (typeId.length != 0) {
      sql += ` WHERE product_items.type_id ='${typeId}'`;
    }

    sql += ` order by product_items.${order} ${sort}
    limit ${(activePage - 1) * rowsPerPage},${activePage * rowsPerPage};
    SELECT count(*) as totalItems FROM product_items;`;

    // 執行SQL語法，取得商品資料 & 商品總數
    const [datas] = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });

    // 查詢使用者喜愛的產品
    // 查詢LOVE需要一個變數，userID : id
    const sql2 = `SELECT * from product_love where user_id = ${req.query.id}`;

    // 執行SQL語法，取得使用者有哪些LOVE
    const [love] = await connection.query(sql2).catch((error) => {
      console.log(`執行 Query : ${sql2}時出錯 `);
    });

    // 比較取出的商品中，是否有被使用者點過LOVE(新增datas物件中的love屬性)
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

    // 分頁總數，加進陣列
    datas.push(pageCount);

    // 總共回傳，商品資料 / 商品總數 /  分頁總數
    res.json(datas);
  })
  // 新增商品，multipart/form-data
  // http://localhost:3001/Sales/api/product
  // 需要六個參數，透過Body -> authorName | productName | productCopy | price | picPath | typeId
  .post(upload.array(), async (req, res, next) => {
    // 驗證初始值為false
    let verify = true;
    // 通過驗證才可以新增
    if (verify) {
      const sql = `INSERT INTO product_items( author_name, product_name, product_copy, price, pic_path, type_id)
      VALUES ('${req.body.authorName}','${req.body.productName}','${req.body.productCopy}','${req.body.price}','${req.body.picPath}','${req.body.typeId}')`;
      // 執行SQL語法，新增商品資料
      const [datas] = await connection.query(sql).catch((error) => {
        console.log(`執行 Query : ${sql}時出錯 `);
      });
    }
    res.send("post : /api/product");
  });

sales
  .route("/api/product/:id")
  // 更新商品項目，multipart/form-data
  // http://localhost:3001/Sales/api/product/1
  // 需要六個參數，5個透過body傳的參數，1個Params傳的參數
  // 透過Body -> productName | productCopy | price | picPath | typeId
  // 透過Params -> 商品ID : id
  .put(upload.array(), async (req, res, next) => {
    const sql = `UPDATE product_items SET product_name='${req.body.productName}',
    product_copy='${req.body.productCopy}',price='${req.body.price}',
    pic_path='${req.body.picPath}',type_id='${req.body.typeId}' WHERE ID=${req.params.id}`;
    // 執行SQL語法，更新商品項目
    const [datas] = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });
    res.send("put : /api/product/:id");
  })
  // 刪除商品項目
  // http://localhost:3001/Sales/api/product/1
  // 需要一個參數，透過Params->商品ID  : id
  .delete(async (req, res, next) => {
    const sql = `DELETE FROM product_items WHERE ID = ${req.params.id}`;
    // 執行SQL，刪除商品項目
    const datas = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });
    res.send("delete : /api/product/:id");
  });

// 查詢單筆商品資料
// http://localhost:3001/Sales/api/product/1/2
// 需要兩個參數，透過Params -> 使用者ID : userID | 商品ID : productID
sales.get("/api/product/:userID/:productID", async (req, res, next) => {
  // 查詢商品需要一個變數，productID
  const sql = `SELECT product_items.* , all_type.type
  FROM product_items
  INNER JOIN all_type
  on product_items.type_id = all_type.sid
  WHERE ID=${req.params.productID}`;

  // 執行SQL，查詢商品的細項
  const [datas] = await connection.query(sql).catch((error) => {
    console.log(`執行 Query : ${sql}時出錯 `);
  });

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

/* 特定商品 
1. 功能：取得'使用者'，全部有按<3的商品資料。Method: GET。URL: /api/productUser?id=  完成
2. 功能：取得'店家'，全部商品資料。Method: GET。URL: /api/productShop?id= 完成
*/
sales
  .route("/api/productUser")
  // 取得使用者，全部有按<3的商品資料
  // http://localhost:3001/Sales/api/productUser?id=1&order=price&sort=desc&page=1
  // 需要四個參數，透過Query-> id 參照product_love資料表的user_id欄位(必備) | order 參照product_items欄位 | sort 分ASC / DESC | Page 參照總頁數
  .get(async (req, res, next) => {
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
    const sql = `SELECT product_items.* ,  product_love.* 
    FROM product_love
    INNER JOIN product_items
    ON product_love.product_ID  = product_items.ID
    WHERE product_love.user_id = '${req.query.id}'
    order by product_items.${order} ${sort}
    limit ${(activePage - 1) * rowsPerPage},${activePage * rowsPerPage};
    SELECT count(*) as totalItems FROM product_love WHERE product_love.user_id = '${
      req.query.id
    }';`;

    // 執行SQL語法，取得商品資料 & 商品總數
    const [datas] = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });

    // 計算 分頁總數
    if (Object.values(datas[1]) > 0) {
      pageCount = Math.ceil(Object.values(datas[1]) / rowsPerPage); //pageCount即分頁資料總頁數
    }

    // 分頁總數，加進陣列
    datas.push(pageCount);

    // 總共回傳，商品資料 / 商品總數 /  分頁總數
    res.json(datas);
  });

sales
  .route("/api/productShop")
  // 取得店家，全部商品資料
  // http://localhost:3001/Sales/api/productShop?id=1&order=price&sort=desc&typeId=102&page=1
  // 需要五個參數，透過Query-> id 參照us_user資料表的id欄位(必備) | order 參照product_items的欄位 | sort 分ASC / DESC | Page 參照總頁數 | typeId 參照product_items資料表的type_id欄位
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

    // 選擇什麼分類
    let typeId = req.query.typeId ? req.query.typeId : "";

    // 查詢店家名稱，需要一個變數，店家id : id
    let authorSql = `SELECT us_user.username FROM us_user WHERE id = ${req.query.id}`;
    const [authorData] = await connection.query(authorSql).catch((error) => {
      console.log(`執行 Query : ${authorSql}時出錯 `);
    });

    // 兩個查詢第一個查詢商品，第二個查詢商品總數
    // 查詢商品需要三個變數，order依據 : order / order順序 : sort / Page頁數 : page
    // 預設為查詢第一頁，依照價格低到高
    let sql = `SELECT product_items.* , all_type.type
    FROM product_items
    INNER JOIN all_type
    on product_items.type_id = all_type.sid
    WHERE product_items.author_name = '${authorData[0].username}'`;

    if (typeId.length != 0) {
      sql += ` and product_items.type_id ='${typeId}'`;
    }

    sql += ` order by product_items.${order} ${sort}
    limit ${(activePage - 1) * rowsPerPage},${activePage * rowsPerPage};
    SELECT count(*) as totalItems FROM product_items WHERE product_items.author_name = '${authorData[0].username}'`;

    if (typeId.length != 0) {
      sql += ` and product_items.type_id ='${typeId}'`;
    }

    // 執行SQL語法，取得商品資料 & 商品總數
    const [datas] = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });

    // 計算 分頁總數
    if (Object.values(datas[1]) > 0) {
      pageCount = Math.ceil(Object.values(datas[1]) / rowsPerPage); //pageCount即分頁資料總頁數
    }

    // 分頁總數，加進陣列
    datas.push(pageCount);

    // 總共回傳，商品資料 / 商品總數 /  分頁總數
    res.json(datas);
  });

/*訂單
1. 功能：取得使用者的全部訂單。Method: GET。URL: /api/order/orderShop Postman未驗證
2. 功能：取得使用者的訂單詳細內容。Method: GET。URL: /appi/ordershop/:id Postman未驗證
3. 功能：取得商家所有產品的銷售紀錄。Method: GET。URL: /api/order/orderUser Postman未驗證
4. 功能：新增訂單。Method: POST。URL: /api/order 要問老師! 
*/
sales
  .route("/api/orderShop")
  // 取得使用者的全部訂單 TO C
  // http://localhost:3001/Sales/api/orderShop?id=1&page=1
  // 需要參數兩個，透過query -> 使用者ID : id | 頁面 : page
  .get(async (req, res, next) => {
    // 頁面預設第一頁
    let activePage = req.query.page ? req.query.page : 1;

    // 一次取幾筆
    let rowsPerPage = 10;

    // 分頁數
    let pageCount = 0;

    // 查詢使用者的訂單 & 訂單總數
    const sql = `SELECT product_case.* 
    FROM product_case 
    WHERE product_case.user_ID  = ${req.query.id}
    limit ${(activePage - 1) * rowsPerPage},${activePage * rowsPerPage};
    SELECT count(*) as totalItems FROM product_case`;

    const [datas] = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });

    // 計算 分頁總數
    if (Object.values(datas[1]) > 0) {
      pageCount = Math.ceil(Object.values(datas[1]) / rowsPerPage); //pageCount即分頁資料總頁數
    }

    // 加進陣列 分頁總數
    datas.push(pageCount);

    res.send(datas);
  })
  // 新增訂單，處理multipart/form-data的狀態
  // 尚未完成
  .post(upload.array(), async (req, res, next) => {
    // 新增訂單，兩個參數

    // 抓現在時間

    // 紀錄
    let case_count = 1;
    let cs;
    let sql = `INSERT INTO product_case ( ID, user_ID, total_price) 
    VALUES ('${case_ID}','${req.body.userID}','${req.body.totalPrice}');
    INSERT INTO product_case_items ()`;

    case_count = case_count + 1;

    res.send("post : /api/order");
  });

// 取得使用者訂單的詳細內容 TO C
// http://localhost:3001/Sales/api/orderShop/1
// 需要一個參數，透過params-> 使用者ID : id
sales.get("/api/ordershop/:id", async (req, res, next) => {
  let sql = `SELECT product_case.ID , product_case.create_time , product_items.product_name , product_items.price
  FROM product_case_items
  JOIN product_case
  ON product_case_items.case_ID=product_case.ID
  JOIN product_items
  ON product_case_items.product_ID = product_items.ID
  WHERE product_case.user_ID='${req.params.id}'`;
  const [datas] = await connection.query(sql).catch((error) => {
    console.log(`執行 Query : ${sql}時出錯 `);
  });
  res.send(datas);
});

// 取得商家所有產品的銷售紀錄 TO B
// http://localhost:3001/Sales/api/orderUser?name=aaa&orderID=1&itemsName=1
// 需要四個參數，透過query -> name (必須)，
// 參考product_items的author_name | orderID，參考product_case_items的case_ID | itemsName，參考product_items的product_name / 頁面 : page 參照總頁數
sales.get("/api/orderUser", async (req, res, next) => {
  //
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
  WHERE product_items.author_name='${req.query.name}'
  `;
  // 查詢特定訂單 (可省)
  if (orderID.length != 0) {
    sql += ` and product_case_items.case_ID ='${req.query.orderID}'`;
  }
  // 查詢特定名稱 (可省)
  if (itemsName.length != 0) {
    sql += ` and product_items.product_name like '%%${req.query.itemsName}%%'`;
  }
  // 查詢範圍
  sql += `limit ${(activePage - 1) * rowsPerPage},${activePage * rowsPerPage};`;
  // 查詢筆數
  sql += `SELECT count(*) as totalItems 
  FROM product_case_items  
  JOIN product_items
  ON product_case_items.product_ID = product_items.ID 
  WHERE product_items.author_name='${req.query.name}' ;`;

  const [datas] = await connection.query(sql).catch((error) => {
    console.log(`執行 Query : ${sql}時出錯 `);
  });

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
  // 新增使用者對商品按<3
  // http://localhost:3001/Sales/api/love?productID=1&userID=1
  // 需要兩個參數，透過query -> 產品ID : productID， 使用者 : userID
  .post(async (req, res, next) => {
    const sql = `INSERT INTO product_love(product_ID, user_id) VALUES (${req.query.productID},${req.query.userID})`;
    // 執行SQL，新增使用者對商品按<3
    const [datas] = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });
    res.send(datas);
  })
  // 刪除使用者對哪個產品按<3
  // http://localhost:3001/Sales/api/love?productID=1&userID=1
  // 需要兩個參數，透過query -> 產品ID : productID， 使用者 : userID
  .delete(async (req, res, next) => {
    const sql = `DELETE FROM product_love WHERE product_ID = ${req.query.productID} and user_id = ${req.query.userID}`;
    // 執行SQL，新增使用者對商品按<3
    const [datas] = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });
    res.send(datas);
  });

/* 雜項
1. 功能 : 上傳圖片。Method: POST。URL: /api/upload  檔案儲存位置 fontend/src/Home/Assets/ProductImg 未驗證
2. 功能 : 刪除圖片。Method: POST。URL: /api/delete  未驗證
*/

// 設定multer內的參數，由前端限定上傳格式，檔案另存位置 & 檔名
var storage = multer.diskStorage({
  // 檔案上傳到這裡
  destination: function (req, file, cb) {
    cb(null, "../../../fontend/src/Home/Assets/ProductImg");
  },
  // 定義檔案名稱規範
  filename: function (req, file, cb) {
    cb(null, Date.now());
  },
});

upload = multer({ storage: storage });
// 新增圖片檔
// 前端input type="file" name="uploadedFiles"，限制5筆資料
sales.post(
  "/api/upload",
  upload.array("uploadedFiles", 5),
  async (req, res, next) => {
    res.send(JSON.stringify(req.files));
  }
);
// 刪除圖片檔
// 需要一個參數，以body -> 檔名
sales.post("/api/delete", async (req, res, next) => {
  const { name } = req.body;
  fs.unlink(`../../../fontend/src/Home/Assets/${name}`, (err) => {
    if (err) {
      console.log(err);
      res.send("刪除文件失敗");
    } else {
      res.send("刪除文件成功");
    }
  });
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
