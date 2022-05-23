// 功能：取得單筆商品資料。Method: GET。URL: /api/product/:id
// 功能：修改商品。Method: PUT。URL: /api/product/:id

import React from "react";
import LoginNav from "../../Components/LoginNav/LoginNav";
import Footer from "../../Components/Footer/Footer";
import PhoneFooter from "../../Components/PhoneFooter/PhoneFooter";
import ProductBtobButton from "../../Components/ProductBtobButton"

function EditProduct() {
  return (
    <>
      <LoginNav />
      <ProductBtobButton/>
      <section>
        <a href="">商品總覽</a>
        <a href="">銷售記錄</a>
        <a href="">新增及修改商品</a>
      </section>
      <Footer />
      <PhoneFooter />
    </>
  );
}
export default EditProduct;
