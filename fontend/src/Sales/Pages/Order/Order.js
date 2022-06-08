// 取得使用者訂單的詳細內容 TO C
// http://localhost:3000/BtobPage/Order/1

import React, { useEffect, useState } from "react";
import Style from "./Order.module.css";
import { useParams } from "react-router-dom";
import LoginNav from "../../../Home/Components/LoginNav/LoginNav";

function Order() {
  // 取得使用者id
  const params = useParams();
  const paramsID = params.id;
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(
      `http://localhost:3001/Sales/api/orderUser/${paramsID}`
    );
    const data = await response.json();
    // 只需要商品的第一張圖
    // 先取得全部圖名，進行切割
    let picFirst = data[0].pic_path.split(" ");
    for (let i = 0; i < data.length; i++) {
      // 將products的商品路徑改為新的路徑(只有第一張)
      data[i]["pic_path"] = picFirst[0];
    }
    setProducts(data);
  };

  // 模擬componentDidMount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <LoginNav />
      {/* <h3>To C -購買清單-細項 Page</h3> */}
      {/* {products.map((v, i) => {
        const {
          ID,
          create_time,
          total_price,
          pic_path,
          author_name,
          product_name,
          price,
        } = v
        return (
          <div>
            <div>訂單ID : {ID}</div>
            <div>訂單創立時間 : {create_time}</div>
            <div>訂單總價 : {total_price}</div>
            ---------------------------------------
            <div>圖片位址 : {pic_path}</div>
            <div>商品作者 : {author_name}</div>
            <div>商品名稱 : {product_name}</div>
            <div>商品價格 : {price}</div>
          </div>
        )
      })} */}
      <section className={Style.Orderflex}>
        {/* 上方資訊部分 */}
        <hgroup className={Style.orderInfo}>
          <div>
            <p>訂單ID：</p>
            <p>2342344234234</p>
          </div>
          <div>
            <p>訂單創立時間：</p>
            <p>2022/6/17</p>
          </div>
          <div>
            <p>訂單總價：</p>
            <p className={Style.price}>$999</p>
          </div>
        </hgroup>
        {/* 商品資訊部分 */}
        <table className={Style.shoppingListS}>
          <thead className={Style.listTitle}>
            <tr>
              <th scope="col" className={Style.blockSizeL}>
                No.
              </th>
              <th scope="col" className={Style.blockSizeL}>
                商品圖
              </th>
              <th scope="col" className={Style.blockSizeL}>
                品項名稱
              </th>
              <th scope="col" className={Style.blockSizeL}>
                商品價格
              </th>
            </tr>
          </thead>
          {/* ——————————————接資料處————————————————— */}

          <tbody className={`${Style.phoneCart} ${Style.listItem}`}>
            {/* 範例 */}
            <tr className={Style.listItem2}>
              <th className={Style.blockSizeL} scope="row">
                1
              </th>
              {/* 商品圖 */}
              <td className={Style.blockSizeL}>
                <img
                  className={Style.blockSizeM}
                  alt="圖片無法顯示"
                  src={`http://localhost:3000/Home/ProductImg/logo1-1.jpeg`}
                />
              </td>
              <td className={Style.blockSizeL}>
                sdfsdfsfsfsdfsdsdfsdfsdfaaaaaaaaa
              </td>
              <td className={`${Style.blockSizeL} ${Style.price}`}>5600</td>
            </tr>
            <tr className={Style.listItem2}>
              <th className={Style.blockSizeL} scope="row">
                1
              </th>
              {/* 商品圖 */}
              <td className={Style.blockSizeL}>
                <img
                  className={Style.blockSizeM}
                  alt="圖片無法顯示"
                  src={`http://localhost:3000/Home/ProductImg/logo1-1.jpeg`}
                />
              </td>
              <td className={Style.blockSizeL}>
                sdfsdfsfsfsdfsdsdfsdfsdfaaaaaaaaa
              </td>
              <td className={`${Style.blockSizeL} ${Style.price}`}>5600</td>
            </tr>
            <tr className={Style.listItem2}>
              <th className={Style.blockSizeL} scope="row">
                1
              </th>
              {/* 商品圖 */}
              <td className={Style.blockSizeL}>
                <img
                  className={Style.blockSizeM}
                  alt="圖片無法顯示"
                  src={`http://localhost:3000/Home/ProductImg/logo1-1.jpeg`}
                />
              </td>
              <td className={Style.blockSizeL}>
                sdfsdfsfsfsdfsdsdfsdfsdfaaaaaaaaa
              </td>
              <td className={`${Style.blockSizeL} ${Style.price}`}>5600</td>
            </tr>
            <tr className={Style.listItem2}>
              <th className={Style.blockSizeL} scope="row">
                1
              </th>
              {/* 商品圖 */}
              <td className={Style.blockSizeL}>
                <img
                  className={Style.blockSizeM}
                  alt="圖片無法顯示"
                  src={`http://localhost:3000/Home/ProductImg/logo1-1.jpeg`}
                />
              </td>
              <td className={Style.blockSizeL}>
                sdfsdfsfsfsdfsdsdfsdfsdfaaaaaaaaa
              </td>
              <td className={`${Style.blockSizeL} ${Style.price}`}>5600</td>
            </tr>
          </tbody>
        </table>
        <a className={Style.turnBack}>返回上一頁</a>
      </section>
    </>
  );
}
export default Order;
