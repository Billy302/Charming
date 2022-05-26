// 功能：取得單筆商品資料。Method: GET。URL: /api/product/:id
// 功能：加入購物車，Session productList(key) 買那些產品  / productID(key) 產品ID
// 按圖片會放大 且可以切換上(下)一張
// 顯示超過4張，右邊最後一張要加半黑濾鏡(+N)

import React from "react";
import LoginNav from "../../Components/LoginNav/LoginNav";
import style from "./ProductPage.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import Designer from "../../Components/Designer/Designer";

function Product() {
  return (
    <>
      <LoginNav />
      {/* 商品名稱 */}
      <section className={style.ProductPage}>
        <h3>商品總攬 Page</h3>
        {/* 圖片放置區 */}
        <div className={style.displayFlex}>
          <div className={style.bigImg}>
            <a href=""></a>
          </div>
          <div className={style.smallImg}>
            <a href="" ></a>
            <a href="" ></a>
            <a href="" ></a>
            <a href="" ></a>
          </div>
        </div>
        <div className={style.displayFlex}>
          <p >刊登時間{}</p>
          <p>檔案格式{}</p>
        </div>
        {/* 價格，數量，加入購物車按鈕，收藏按鈕 */}
        <div>
          <p>price</p>
          <p>購買數量</p>
          <div>
            <button>加入購物車</button>
            <button>收藏商品</button>
          </div>
        </div>
        {/* 商品簡介 */}
        <article className={style.displayFlex}>
          <div>商品介紹</div>
          <div>
        {/* 關於設計師 */}
            <div>關於設計師</div>
            <Designer />
          </div>
        </article>
      </section>
    </>
  );
}
export default Product;
