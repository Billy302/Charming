// 引用套件
const { body, validationResult, check } = require("express-validator");
var nodemailer = require("nodemailer");
var express = require("express");
var multer = require("multer");
var fs = require("fs");
// 引用
const connection = require("../../modules/mysql_config");
var sales = express.Router();
var upload = multer();

/* 商品 
1. 功能：取得全部商品資料。Method: GET。URL: /api/product?id=  完成
2. 功能：取得單筆商品資料。Method: GET。URL: /api/product/:userID/:productID 完成
3. 功能：新增商品。Method: POST。URL: /api/product 完成
4. 功能：修改商品。Method: PUT。URL: /api/product/:id  完成
5. 功能：刪除商品。Method: DELETE。URL: /api/product/:id  完成
*/

sales
  .route("/api/product")
  // 取得全部商品資料
  // http://localhost:3001/Sales/api/product?id=1&order=price&sort=desc&page=1&typeID=102&itemsName=?
  // 需要五個參數，透過Query-> id 參照us_user資料表的id欄位 | order 參照product_items的欄位 | sort 分ASC / DESC | Page 參照總頁數(必備) | typeID 參照product_items資料表的type_id欄位
  .get(async (req, res, next) => {
    // 取得使用者查詢的頁數
    let activePage = req.query.page ? req.query.page : 1;

    // 一次取幾筆
    let rowsPerPage = 20;

    // 分頁數
    let pageCount = 0;

    //  預設排序依照 價格 asc
    let userID = req.query.id ? req.query.id : "";
    let order = req.query.order ? req.query.order : "price";
    let sort = req.query.sort ? req.query.sort : "ASC";
    let typeID = req.query.typeID ? req.query.typeID : "";
    let itemsName = req.query.itemsName ? req.query.itemsName : "";

    // 兩個查詢第一個查詢商品，第二個查詢商品總數
    // 查詢商品需要三個變數，order依據 : order / order順序 : sort / Page頁數 : page
    // 預設為查詢第一頁，依照價格低到高
    let sql = `SELECT product_items.* , all_type.type
    FROM product_items
    INNER JOIN all_type
    on product_items.type_id = all_type.sid`;

    if ((typeID.length != 0) & (itemsName.length != 0)) {
      sql += ` WHERE product_items.type_id ='${typeID}'`;
      sql += ` and ( product_items.product_name like '%%${itemsName}%%'`;
      sql += ` or product_items.author_name like '%%${itemsName}%%')`;
    } else if (typeID.length != 0) {
      sql += ` WHERE product_items.type_id ='${typeID}'`;
    } else if (itemsName.length != 0) {
      sql += ` WHERE ( product_items.product_name like '%%${itemsName}%%'`;
      sql += ` or product_items.author_name like '%%${itemsName}%%')`;
    }

    sql += ` order by product_items.${order} ${sort}
    limit ${(activePage - 1) * rowsPerPage},20;
    SELECT count(*) as totalItems FROM product_items`;

    if ((typeID.length != 0) & (itemsName.length != 0)) {
      sql += ` WHERE product_items.type_id ='${typeID}'`;
      sql += ` and ( product_items.product_name like '%%${itemsName}%%'`;
      sql += ` or product_items.author_name like '%%${itemsName}%%')`;
    } else if (typeID.length != 0) {
      sql += ` WHERE product_items.type_id ='${typeID}'`;
    } else if (itemsName.length != 0) {
      sql += ` WHERE ( product_items.product_name like '%%${itemsName}%%'`;
      sql += ` or product_items.author_name like '%%${itemsName}%%')`;
    }

    // 執行SQL語法，取得商品資料 & 商品總數
    const [datas] = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });

    // 判斷有沒有登入
    if (userID) {
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
    }

    // 計算 分頁總數
    if (Object.values(datas[1][0]) > 0) {
      pageCount = Math.ceil(Object.values(datas[1][0]) / rowsPerPage); //pageCount即分頁資料總頁數
    }

    // 分頁總數，加進陣列
    datas.push(pageCount);

    // 總共回傳，商品資料 / 商品總數 /  分頁總數
    res.json(datas);
  })
  // 新增商品，multipart/form-data
  // http://localhost:3001/Sales/api/product
  // 需要六個參數，透過Body -> authorName | productName | productCopy |
  // 驗證 : authorName -> 不驗證 | productName 不能為空 & 最多45個字 | productCopy 不能為空
  // 驗證 : price 不能為空 & 只能數字 | picPath 不能為空 | typeID 不能為空
  .post(
    upload.array(),
    [
      body("productName")
        .notEmpty()
        .withMessage("商品名稱不得為空")
        .isLength({ max: 50 })
        .withMessage("商品名稱長度錯誤"),
      body("productCopy").notEmpty().withMessage("商品文案不得為空"),
      body("price")
        .notEmpty()
        .withMessage("價格不得為空")
        .matches(/^(0|[1-9][0-9]*)$/)
        .withMessage("只能輸入數字"),
      body("picPath").notEmpty().withMessage("照片不得為空"),
      body("typeID").notEmpty().withMessage("分類不得為空"),
    ],
    async (req, res, next) => {
      // 驗證結果
      const error = validationResult(req);

      // 有錯誤就回傳，沒錯誤就跑SQL
      if (!error.isEmpty()) {
        res.send({ error: error.array() });
      } else {
        const sql = `INSERT INTO product_items( author_name, product_name, product_copy, price, pic_path, type_id)
      VALUES ('${req.body.authorName}','${req.body.productName}','${req.body.productCopy}','${req.body.price}','${req.body.picPath}','${req.body.typeID}')`;
        // 執行SQL語法，新增商品資料
        const [datas] = await connection.query(sql).catch((error) => {
          console.log(`執行 Query : ${sql}時出錯 `);
        });
        res.send("成功");
      }
    }
  );

sales
  .route("/api/product/:id")
  // 修改商品項目，multipart/form-data
  // http://localhost:3001/Sales/api/product/1
  // 需要六個參數，5個透過body傳的參數，1個Params傳的參數
  // 透過Body -> productName | productCopy | price | picPath | typeID
  // 透過Params -> 商品ID : id
  // 驗證 : authorName -> 不驗證 | productName 不能為空 & 最多45個字 | productCopy 不能為空
  // 驗證 : price 不能為空 & 只能數字 | picPath 不能為空 | typeID 不能為空
  .put(
    upload.array(),
    [
      body("productName")
        .notEmpty()
        .withMessage("商品名稱不得為空")
        .isLength({ max: 45 })
        .withMessage("商品名稱長度錯誤"),
      body("productCopy").notEmpty().withMessage("商品文案不得為空"),
      body("price")
        .notEmpty()
        .withMessage("價格不得為空")
        .matches(/^(0|[1-9][0-9]*)$/)
        .withMessage("只能輸入數字"),
      body("picPath").notEmpty().withMessage("照片不得為空"),
      body("typeID").notEmpty().withMessage("分類不得為空"),
    ],
    async (req, res, next) => {
      const sql = `UPDATE product_items SET product_name='${req.body.productName}',
    product_copy='${req.body.productCopy}',price='${req.body.price}',
    pic_path='${req.body.picPath}',type_id='${req.body.typeID}' WHERE ID=${req.params.id}`;
      // 執行SQL語法，更新商品項目
      const [datas] = await connection.query(sql).catch((error) => {
        console.log(`執行 Query : ${sql}時出錯 `);
      });
      res.send("put : /api/product/:id");
    }
  )
  // 刪除商品項目
  // http://localhost:3001/Sales/api/product/1
  // 需要一個參數，透過Params->商品ID  : id
  .delete(async (req, res, next) => {
    const sql = `DELETE FROM product_items WHERE ID = '${req.params.id}'`;
    // 執行SQL，刪除商品項目
    const datas = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });
    res.send("delete : /api/product/:id");
  })
  // 查詢單筆商品資料(FOR遊客 或 編輯)
  // http://localhost:3001/Sales/api/product/2
  // 需要一個參數，透過Params ->商品ID : id
  .get(async (req, res, next) => {
    // 查詢商品需要一個變數，productID
    const sql = `SELECT product_items.* , all_type.type
    FROM product_items
    INNER JOIN all_type
    on product_items.type_id = all_type.sid
    WHERE ID=${req.params.id}`;

    // 執行SQL，查詢商品的細項
    const [datas] = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });
    res.send(datas);
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
  WHERE ID=${req.params.productID} `;

  // 執行SQL，查詢商品的細項
  const [datas] = await connection.query(sql).catch((error) => {
    console.log(`執行 Query : ${sql}時出錯 `);
  });

  // 查詢LOVE需要一個變數，userID
  const sql2 = `SELECT * from product_love where user_id = ${req.params.userID} and product_ID = ${req.params.productID}`;

  // 執行SQL語法，取得使用者有哪些LOVE
  const [love] = await connection.query(sql2);

  // 如果查詢有值，datas中的lover存為True
  if (love != "") {
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
    let rowsPerPage = 20;

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
    limit ${(activePage - 1) * rowsPerPage},20;
    SELECT count(*) as totalItems FROM product_love WHERE product_love.user_id = '${
      req.query.id
    }';`;

    // 執行SQL語法，取得商品資料 & 商品總數
    const [datas] = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });

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
    if (Object.values(datas[1][0]) > 0) {
      pageCount = Math.ceil(Object.values(datas[1][0]) / rowsPerPage); //pageCount即分頁資料總頁數
    }

    // 分頁總數，加進陣列
    datas.push(pageCount);

    // 總共回傳，商品資料 / 商品總數 /  分頁總數
    res.json(datas);
  });

sales
  .route("/api/productShop")
  // 取得店家，全部商品資料
  // http://localhost:3001/Sales/api/productShop?id=1&order=price&sort=desc&typeID=102&page=1
  // 需要五個參數，透過Query-> id 參照us_user資料表的id欄位(必備) | order 參照product_items的欄位 | sort 分ASC / DESC | Page 參照總頁數 | typeID 參照product_items資料表的type_id欄位
  .get(async (req, res, next) => {
    // 取得使用者查詢的頁數
    let activePage = req.query.page ? req.query.page : 1;

    // 一次取幾筆
    let rowsPerPage = 20;

    // 分頁數
    let pageCount = 0;

    //  預設排序依照 價格 asc
    let order = req.query.order ? req.query.order : "price";
    let sort = req.query.sort ? req.query.sort : "ASC";

    // 選擇什麼分類
    let typeID = req.query.typeID ? req.query.typeID : "";

    // 查詢店家名稱，需要一個變數，店家id : id
    let authorSql = `SELECT us_user.username FROM us_user WHERE id = ${req.query.id}`;
    const [authorData] = await connection.query(authorSql).catch((error) => {
      console.log(`執行 Query : ${authorSql}時出錯 `);
    });

    // 兩個查詢第一個查詢商品，第二個查詢商品總數
    // 查詢商品需要三個變數，order依據 : order / order順序 : sort / Page頁數 : page
    // 預設為查詢第一頁，依照價格低到高

    if (authorData.length) {
      let sql = `SELECT product_items.* , all_type.type
      FROM product_items
      INNER JOIN all_type
      on product_items.type_id = all_type.sid
      WHERE product_items.author_name = '${authorData[0].username}'`;

      if (typeID.length != 0) {
        sql += ` and product_items.type_id ='${typeID}'`;
      }

      sql += ` order by product_items.${order} ${sort}
      limit ${(activePage - 1) * rowsPerPage},20;
      SELECT count(*) as totalItems FROM product_items WHERE product_items.author_name = '${
        authorData[0].username
      }'`;

      if (typeID.length != 0) {
        sql += ` and product_items.type_id ='${typeID}'`;
      }

      // 執行SQL語法，取得商品資料 & 商品總數
      const [datas] = await connection.query(sql).catch((error) => {
        console.log(`執行 Query : ${sql}時出錯 `);
      });
      // 計算 分頁總數
      if (Object.values(datas[1][0]) > 0) {
        pageCount = Math.ceil(Object.values(datas[1][0]) / rowsPerPage); //pageCount即分頁資料總頁數
      }

      // 分頁總數，加進陣列
      datas.push(pageCount);

      // 總共回傳，商品資料 / 商品總數 /  分頁總數
      res.json(datas);
    }
  });

/*訂單
1. 功能：取得使用者的全部訂單。Method: GET。URL: /api/order/orderUser 
2. 功能：取得使用者的訂單詳細內容。Method: GET。URL: /appi/orderUser/:id 
3. 功能：取得使用者 指定 訂單的詳細內容 。Method: GET。URL: /api/orderUser/:userID/:caseID
4. 功能：取得商家所有產品的銷售紀錄。Method: GET。URL: /api/order/orderShop 
5. 功能：新增訂單。Method: POST。URL: /api/order  
*/
sales
  .route("/api/orderUser")
  // 取得使用者的全部訂單 TO C
  // http://localhost:3001/Sales/api/orderUser?id=1&page=1
  // 需要參數兩個，透過query -> 使用者ID : id (必要)| 頁面 : page (必要)
  .get(async (req, res, next) => {
    // 頁面預設第一頁
    let activePage = req.query.page ? req.query.page : 1;

    // 一次取幾筆
    let rowsPerPage = 20;

    // 分頁數
    let pageCount = 0;

    // 查詢使用者的訂單 & 訂單總數
    const sql = `SELECT product_case.* 
    FROM product_case 
    WHERE product_case.user_ID  = '${req.query.id}'
    limit ${(activePage - 1) * rowsPerPage},20;
    SELECT count(*) as totalItems FROM product_case WHERE product_case.user_ID  = '${
      req.query.id
    }'`;

    const [datas] = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });

    // 計算 分頁總數
    if (Object.values(datas[1][0]) > 0) {
      pageCount = Math.ceil(Object.values(datas[1][0]) / rowsPerPage); //pageCount即分頁資料總頁數
    }

    // 加進陣列 分頁總數
    datas.push(pageCount);
    res.send(datas);
  })
  // 新增訂單 & 訂單詳細，處理multipart/form-data的狀態
  // http://localhost:3001/Sales/api/orderUser
  // 前端傳值 addUser & addItemList
  // addUser : 1 | 150  (用戶ID | 總價)
  // addItemList :
  // [{"ID":26,
  // "pic_path":"illustration1-1.jpeg",
  // "author_name":"mohammadkasim",
  // "product_name":"建立原創的兒童書籍插圖和封面",
  // "price":150}]
  .post(upload.array(), async (req, res, next) => {
    // 接值
    let { addUser, addItemList } = req.body;
    // [1],[150]
    addUser = addUser.split(" | ");
    // 轉換型別
    addItemList = JSON.parse(addItemList);

    // 新增訂單資料
    let sql = `INSERT INTO product_case( user_ID, total_price) 
    VALUES ('${addUser[0]}','${addUser[1]}');`;

    const [order] = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });
    // 取得訂單總數，總數 = 最後一筆的ID
    sql = `SELECT ID  FROM product_case ORDER by create_time desc LIMIT 1`;

    const [orderCount] = await connection.query(sql).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });

    // 新增訂單細項(多筆資料)
    let sql2 = "INSERT INTO product_case_items(case_ID, product_ID) VALUES";
    for (let i = 0; i < addItemList.length; i++) {
      if (i < addItemList.length - 1) {
        sql2 += `('${orderCount[0]["ID"]}','${addItemList[i]["ID"]}'),`;
      } else {
        sql2 += `('${orderCount[0]["ID"]}','${addItemList[i]["ID"]}')`;
      }
    }
    console.log(sql2);
    const [orderDetail] = await connection.query(sql2).catch((error) => {
      console.log(`執行 Query : ${sql}時出錯 `);
    });

    let orderID = [];
    orderID.push(parseInt(addUser[0]), orderCount[0]["total"]);
    res.send("成功");
  });

// 取得使用者訂單的詳細內容 TO C
// http://localhost:3001/Sales/api/orderUser/1
// 需要一個參數，透過params-> 使用者ID : id
sales.get("/api/orderUser/:id", async (req, res, next) => {
  let sql = `SELECT product_case.ID as CaseID, product_case.create_time, product_case.total_price , product_items.pic_path ,
  product_items.author_name ,product_items.product_name , product_items.price
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

// 取得使用者指定訂單的詳細內容 TO C
// http://localhost:3001/Sales/api/orderUser/1/17
// 需要一個參數，透過params-> 使用者ID : userID | 訂單ID : caseID
sales.get("/api/orderUser/:userID/:caseID", async (req, res, next) => {
  let sql = `SELECT product_case.ID as CaseID, product_case_items.product_ID as productID, product_case.create_time, product_case.total_price , product_items.pic_path ,
  product_items.author_name ,product_items.product_name , product_items.price
  FROM product_case_items
  JOIN product_case
  ON product_case_items.case_ID=product_case.ID
  JOIN product_items
  ON product_case_items.product_ID = product_items.ID
  WHERE product_case.user_ID='${req.params.userID}' and product_case.ID ='${req.params.caseID}' `;
  const [datas] = await connection.query(sql).catch((error) => {
    console.log(`執行 Query : ${sql}時出錯 `);
  });
  res.send(datas);
});

// 取得商家所有產品的銷售紀錄 TO B
// http://localhost:3001/Sales/api/orderShop?id=4&orderID=19&itemsName=?&page=1
// 需要四個參數，透過query -> id (必須)，orderID，itemsName,page
// 參考us_user的id | orderID，參考product_case_items的case_ID | itemsName，參考product_items的product_name / 頁面 : page 參照總頁數
sales.get("/api/orderShop", async (req, res, next) => {
  //
  let orderID = req.query.orderID ? req.query.orderID : "";
  let itemsName = req.query.itemsName ? req.query.itemsName : "";
  let activePage = req.query.page ? req.query.page : 1;
  // 一次取幾筆
  let rowsPerPage = 20;
  // 分頁數
  let pageCount = 0;

  // 查詢使用者的訂單 & 訂單總數
  // 兩個參數 使用者ID : id / 頁面 : page /
  let sql = `SELECT username from us_user where id = '${req.query.id}' `;

  const [userName] = await connection.query(sql).catch((error) => {
    console.log(`執行 Query : ${sql}時出錯 `);
  });

  sql = `SELECT product_case.ID , product_case.create_time , product_items.product_name , product_items.price
  FROM product_case_items
  JOIN product_case
  ON product_case_items.case_ID=product_case.ID
  JOIN product_items
  ON product_case_items.product_ID = product_items.ID
  WHERE product_items.author_name='${userName[0]["username"]}'
  `;
  // 查詢特定訂單 (可省)
  if (orderID.length != 0) {
    sql += ` and product_case_items.case_ID ='${orderID}'`;
  }
  // 查詢特定名稱 (可省)
  if (itemsName.length != 0) {
    sql += ` and product_items.product_name like '%%${itemsName}%%'`;
  }
  // 查詢範圍
  sql += `limit ${(activePage - 1) * rowsPerPage},20;`;
  // 查詢筆數
  sql += `SELECT count(*) as totalItems 
  FROM product_case_items  
  JOIN product_items
  ON product_case_items.product_ID = product_items.ID 
  WHERE product_items.author_name='${userName[0]["username"]}'`;
  // 查詢特定訂單 (可省)
  if (orderID.length != 0) {
    sql += ` and product_case_items.case_ID ='${req.query.orderID}'`;
  }
  // 查詢特定名稱 (可省)
  if (itemsName.length != 0) {
    sql += ` and product_items.product_name like '%%${req.query.itemsName}%%'`;
  }

  const [datas] = await connection.query(sql).catch((error) => {
    console.log(`執行 Query : ${sql}時出錯 `);
  });

  // 計算 分頁總數
  if (Object.values(datas[1][0]) > 0) {
    pageCount = Math.ceil(Object.values(datas[1][0]) / rowsPerPage); //pageCount即分頁資料總頁數
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
圖片檔案儲存位置 fontend/src/Home/Assets/ProductImg
1. 功能 : 上傳圖片。Method: POST。URL: /api/upload  
2. 功能 : 刪除圖片。Method: POST。URL: /api/delete  
3. 功能 : 寄送Mail。Method: POST。URL: /api/Mail  
4. 功能 : 取得會員資料。 MEethod GET。URL: /api/member
*/

// 設定multer內的參數，由前端限定上傳格式，檔案另存位置 & 檔名
var storage = multer.diskStorage({
  // 檔案上傳到這裡
  destination: function (req, file, cb) {
    cb(null, "../fontend/public/Home/ProductImg");
  },

  // 定義檔案名稱規範
  filename: function (req, file, cb) {
    cb(null, Date.now().toString() + file.originalname.substr(-5));
  },
});

upload = multer({ storage: storage });
// 新增圖片檔
// 前端input type="file"
// http://localhost:3001/Sales/api/upload
sales.post(
  "/api/upload",
  upload.array("theFile1", 5),
  function (req, res, next) {
    console.log(req.files);
    // {"fieldname":"theFile1",
    // "originalname":"Andrew.png",
    // "encoding":"7bit",
    // "mimetype":"image/png",
    // "destination":"uploads",
    // "filename":"1649758841069.jpge",
    // "path":"uploads\\1649758841069-Andrew.jpge",
    // "size":8810
    // }
    res.send(req.files);
  }
);
// 刪除圖片檔
// 需要一個參數，以body -> 檔名 : name
// http://localhost:3001/Sales/api/delete
sales.post("/api/delete", async (req, res, next) => {
  fs.unlink(`../fontend/public/Home/ProductImg/${req.body.name}`, (err) => {
    if (err) {
      console.log(err);
      res.send("刪除文件失敗");
    } else {
      res.send("刪除文件成功");
    }
  });
});

// Mail設定，用hotmail寄送，SMTP
var mailTransport = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});
// 寄送mail
// 當前測試只能用hotmail，無論發送者或接收者
// http://localhost:3001/Sales/api/mail
// 前端傳值 addUser & addItemList
// addUser : 1 | 150  (用戶ID | 總價)
// addItemList :
// [{"ID":26,
// "pic_path":"illustration1-1.jpeg",
// "author_name":"mohammadkasim",
// "product_name":"建立原創的兒童書籍插圖和封面",
// "price":150}]
sales.post("/api/mail", upload.none(), async (req, res, next) => {
  // 取得用戶的信箱
  let { addUser, addItemList } = req.body;
  addUser = addUser.split(" | ");
  // 轉換型別
  addItemList = JSON.parse(addItemList);
  // addItemList[i]["pic_path"] 檔案名稱

  const sql = `SELECT username , email FROM us_user WHERE  id = '${addUser[0]}'`;
  const [data] = await connection.query(sql).catch((error) => {
    console.log(`執行 Query : ${sql}時出錯 `);
  });
  let picPath = [];
  for (let i = 0; i < addItemList.length; i++) {
    picPath.push({
      filename: addItemList[i]["pic_path"],
      path: `../fontend/public/Home/ProductImg/${addItemList[i]["pic_path"]}`,
    });
  }
  mailTransport.sendMail({
    from: process.env.GMAIL_USER,
    to: data[0]["email"],
    subject: "Charming網，您的商品已送達",
    html: `<div>親愛的會員${data[0]["username"]}，</div><div>    您所購買的商品已送達，請參照附件</div>`,
    attachments: picPath,
  });
  res.send("成功");
});

// http://localhost:3001/Sales/api/member?id=1
sales.get("/api/member", async (req, res, next) => {
  const sql = `SELECT username , join_at FROM us_user WHERE id = '${req.query.id}'`;
  const [data] = await connection.query(sql).catch((error) => {
    console.log(`執行 Query : ${sql}時出錯 `);
  });
  res.send(data[0]);
});

module.exports = sales;
