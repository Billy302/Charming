// 功能：取得全部商品資料。Method: GET。URL: /api/product
// Where -> 產品名稱 & 使用者
// 計算筆數 => Json轉陣列
// 功能：刪除商品。Method: DELETE。URL: /api/product/:id
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Style from "./EditProduct.module.css";
import EditCard from "../EditCard/EditCard";
import productItem from "../../Mockdata/product_items.json"

function EditProduct() {

  const [products, setProducts] = useState([])
  const catchUserId = useParams()
  // console.log(catchUserId.UserId)
  const fetchProducts = async () => {
    //向遠端伺服器get資料 http://localhost:3000/Sales/api/product?id=1
    const response = await fetch(`http://localhost:3000/Sales/api/product?id=${catchUserId.UserId}`)
    const data = await response.json();
    //測試
    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setProducts(data[0]);
    // console.log(products[0])
  }
  
  // didMount
  useEffect(() => {
    fetchProducts() 
  }, [])

  return (
    <>
      <div className={Style.arrangement}>
        <ul className={Style.cardFlex}>
            {products.map((r) => (
              <div key={r.ID}>
              <EditCard ID={r.ID} author_name={r
              .author_name} product_name={r['product_name']} product_copy={r.product_copy} price={r.price} pic_path={r.pic_path} sell_count={r.sell_count}/>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
}
export default EditProduct;
