// 功能：取得全部商品資料。Method: GET。URL: /api/product
// Where -> 產品名稱 & 使用者
// 計算筆數 => Json轉陣列
// 功能：刪除商品。Method: DELETE。URL: /api/product/:id
import React from "react";
import Style from "./MyProduct.module.css";

// component
import LoginNav from "../../Components/LoginNav/LoginNav";
import ProductBtobButton from "../../Components/ProductBtobButton/ProductBtobButton";
import EditProduct from "../../Components/EditProduct/EditProduct";
//json資料

function MyProduct() {
  return (
    <>
      <LoginNav />
      <section>
        <div className={Style.buttonPosition}>
          <a href="/AddProduct">
            <button className={Style.addButton}>新增商品</button>
          </a>
        </div>
        <div className={Style.arrangement}>
          <ProductBtobButton />
          <EditProduct />
        </div>
      </section>
    </>
  );
}
export default MyProduct;
