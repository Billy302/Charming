// 功能：取得全部商品資料。Method: GET。URL: /api/product
// Where -> 產品名稱 & 使用者
// 計算筆數 => Json轉陣列
// 功能：刪除商品。Method: DELETE。URL: /api/product/:id
import React from "react";
import Style from "./MyProduct.module.css";
import LoginNav from "../../Components/LoginNav/LoginNav";

function MyProduct() {
  return (
    <>
      <LoginNav />
      <h3>To B - 個人商品總攬 Page</h3>
    </>
  );
}
export default MyProduct;
