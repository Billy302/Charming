// 取得商家所有產品的銷售紀錄 TO B
// http://localhost:3000/BtocPage/MySale
// 還沒做完，Fetch處 還沒改為變數

import React, { useEffect, useState } from "react";
import Style from "./Order.module.css";
// component
import LoginNav from "../../../Home/Components/LoginNav/LoginNav";
import Pagination from "../../Components/Pagination/Pagination";
import ProductBtobButton from "../../../Home/Components/ProductBtobButton/ProductBtobButton";
import NoSale from "./NoSale";

function MySale() {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(
      "http://localhost:3001/Sales/api/orderShop?name=aaa&orderID=1&itemsName=1&page=1"
    );
    const data = await response.json();
    setProducts(data[0]);
    setTotalPage(data[2]);
  };

  // 模擬componentDidMount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <LoginNav />
      <section className={Style.flex}>
        <ProductBtobButton />
        <div>
          <NoSale />
          <table className={Style.shoppingListS}>
            <thead className={Style.listTitle}>
              <tr>
                <th scope="col" className={Style.blockSizeM}>
                  訂單編號
                </th>
                <th scope="col" className={Style.blockSizeXL}>
                  產品名稱
                </th>
                <th scope="col" className={Style.blockSizeM}>
                  產品價格
                </th>
                <th scope="col" className={Style.blockSizeL}>
                  訂單日期
                </th>
              </tr>
            </thead>
            {/* ——————————————接資料處————————————————— */}

            <tbody className={`${Style.phoneCart} ${Style.listItem}`}>
              {products.map((v, i) => {
                const { ID, product_name, create_time, price } = v;
                return (
                  <tr className={Style.listItem2}>
                    <th className={Style.blockSizeM} scope="row">
                      訂單編號 : {ID}
                    </th>
                    <td className={Style.blockSizeXL}>
                      產品名稱 : {product_name}
                    </td>
                    <td className={`${Style.blockSizeS} ${Style.price}`}>
                      產品價格 : {price}
                    </td>
                    <td className={Style.blockSizeL}>
                      訂單日期 : {create_time}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination totalPages={totalPage} />
        </div>
      </section>
      {/* 總頁數 */}
    </>
  );
}
export default MySale;
