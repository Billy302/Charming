// 功能：取得全部商品資料。Method: GET。URL: /api/product
// Where -> 產品名稱 & 使用者
// 計算筆數 => Json轉陣列
// 功能：刪除商品。Method: DELETE。URL: /api/product/:id
import React, { useEffect, useState } from "react";
import Style from "./Product.module.css";
import Card from "../Card/Card";
import productItem from "../../Mockdata/product_items.json"


function MyProduct() {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    //向遠端伺服器get資料 http://localhost:3000/Sales/api/product?id=1
    const response = await fetch('http://localhost:3000/Sales/api/product?id=1')
    const data = await response.json();
    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setProducts(data);
  }
  
  // didMount
  useEffect(() => {
    fetchProducts()
    console.log(products);
  }, [])
  
  const doFirst = () => {
    // 先跟 HTML 畫面產生關聯，再建事件聆聽功能
    document.getElementById("theFile").onchange = fileChange;
  };
  const fileChange = () => {
    let file = document.getElementById("theFile").files[0];
    let image = document.getElementById("image").files[0];
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener("load", function () {
      image.src = readFile.result;
      image.style.maxWidth = "500px";
      image.style.maxHeight = "500px";
    });
  };
  window.addEventListener("load", doFirst);
  return (
    <>
      <div className={Style.arrangement}>
        <ul className={Style.cardFlex}>
            {productItem.map((r) => (
              <div>
              <Card key={r.id} ID={r.id} author_name={r
              .author_name} product_name={r['product_name']} product_copy={r.product_copy} price={r.price} pic_path={r.pic_path} sell_count={r.sell_count}/>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
}
export default MyProduct;
