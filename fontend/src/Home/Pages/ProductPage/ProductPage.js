// 功能：取得單筆商品資料。Method: GET。URL: /api/product/:id
// 功能：加入購物車，Session productList(key) 買那些產品  / productID(key) 產品ID
// 按圖片會放大 且可以切換上(下)一張
// 顯示超過4張，右邊最後一張要加半黑濾鏡(+N)

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductPage.module.css";
//component
import LoginNav from "../../Components/LoginNav/LoginNav";
// icon
import { MdLocationOn, MdCalendarToday } from "react-icons/md";

function ProductPage() {
  const [products, setProducts] = useState({
    pic_path: "",
  });

  // 連線檔
  const catchUserId = useParams();
  const fetchProducts = async () => {
    //向遠端伺服器get資料 http://localhost:3000/Sales/api/product?id=1
    const response = await fetch(
      //取單一商品資料
      `http://localhost:3000/Sales/api/product/${catchUserId.UserId}/${catchUserId.ProductID}`
    );
    const data = await response.json();
    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setProducts(data[0]);
  };
  // console.log(products);
  // didMount
  useEffect(() => {
    fetchProducts();
  }, []);

  const a = products.pic_path.split(" ");

  // 小圖
  let p = [];
  for (let i = 0; i < a.length; i++) {
    p.push(
      <button className={style.smallImg}>
        <img
          className={style.smallImg2}
          alt="圖片顯示失敗"
          src={`http://localhost:3001/ProductImg/${a[i]}`}
        />
      </button>
    );
  }
  return (
    <>
      <LoginNav />
      {/* 商品名稱 */}
      <section className={style.ProductPage}>
        {/* 圖片放置區 */}

        <div className={style.displayFlex}>
          <img
            className={style.bigImg}
            alt=""
            src={`http://localhost:3001/ProductImg/${a[0]}`}
          />
          <div>
            {p}
          </div>
          {/* 價格，數量，加入購物車按鈕，收藏按鈕 */}
          <div className={style.priceDiv}>
            <h3>
              {products.product_name}
              <div className={style.displayFlex}>
                <p className={style.littleInformation}>
                  刊登時間：{products.create_time}
                </p>
                <p className={style.littleInformation}>
                  已售出：{products.sell_count}
                </p>
              </div>
            </h3>
            <p className={style.price}>${products.price}</p>
            <div className={style.displayFlex}>
              <div>
                <p className={style.littleInformation}>繳交檔案格式：</p>
                <pre className={style.littleInformation}>
                  {products.file_type}
                </pre>
              </div>
              <div className={style.buyNumber}>
                <div className={style.sellNumber}>
                  <p className={style.title}>購買數量</p>
                  <input
                    id="thePrice"
                    className={style.inputTextStyle}
                    type="number"
                    placeholder="1"
                    min="1"
                    required
                  ></input>
                </div>
                <button className={style.shoppingCar}>加入購物車</button>
              </div>
            </div>

            {/* 關於設計師 */}
            <div className={style.ProductTitle}>關於設計師</div>
            <div className={style.displaySpaceAround}>
              <img
                className={style.designerPicture}
                alt=""
                src={require("../../Assets/charming_logo.png")}
              />
              <div>
                <p className={style.aboutDesigner}>{products.author_name}</p>
                <div className={style.icon}>
                  <div>
                    <MdLocationOn />
                    所在地
                  </div>
                  <div>
                    <MdCalendarToday />
                    加入時間
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 商品簡介 */}
        <article className={style.ProductText}>
          <div className={style.ProductTitle}>商品介紹</div>
          <pre>{products.product_copy}</pre>
        </article>
      </section>
    </>
  );
}
export default ProductPage;
