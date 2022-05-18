import React from "react";
import style from "./UnloginHome.module.css";
import UnloginNav from "../../components/unloginNav/UnloginNav";
import { ImSearch } from "react-icons/im";

//匯入圖片
import product1 from "../../assets/communication2.png";
import product2 from "../../assets/Join.png";
import product3 from "../../assets/mainPageBlog.png";
import introduce1 from "../../assets/charmingMan.png";
import introduce2 from "../../assets/blog.png";
import introduce3 from "../../assets/communication.png";

function UnloginHome() {
  return (
    <header>
      <UnloginNav />
      <hgroup className={style.backgroundImg}>
        <div className={style.headerSlogan}>
          <h1 className={style.heading2}>有才有財，柴米網</h1>
          <p className={style.heading3}>集結台灣優質設計師</p>
          <p className={style.heading3}>全台最大數位設計產品販售平台</p>
        </div>
        <div className={style.searchbar}>
          <input
            className={style.searchInput}
            type="search"
            placeholder="Search.."
            onChange={(e) => {
              console.log(e);
            }}
          />
          <button
            onClick={alert["visualViewpo1"]}
            className={style.searchButton}
          >
            <p>
              <ImSearch />
              搜尋
            </p>
          </button>
        </div>
        <div className={style.tags}>
            <a href="product">
              <button className={style.serchTag}>中秋節</button>
            </a>
            <a href="product">
              <button className={style.serchTag}>中秋節</button>
            </a>
            <a href="product">
              <button className={style.serchTag}>中秋節</button>
            </a>
            <a href="product">
              <button className={style.serchTag}>中秋節</button>
            </a>
        </div>
      </hgroup>
      <div className={style.product}>
        <a href="product">
          <button className={style.productType}>UI/UX</button>
        </a>
        <a href="product">
          <button className={style.productType}>品牌宣傳</button>
        </a>
        <a href="product">
          <button className={style.productType}>插圖</button>
        </a>
        <a href="product">
          <button className={style.productType}>網頁設計</button>
        </a>
        <a href="product">
          <button className={style.productType}>攝影</button>
        </a>
      </div>
      <div className={style.product}>
        <div>
          <img className={style.productPicture} src={product1} alt="product" />
          <p className={style.heading4}>快速媒合，即時交流</p>
        </div>
        <div>
          <img className={style.productPicture} src={product2} alt="product" />
          <p className={style.heading4}>需求客製，快速出貨</p>
        </div>
        <div>
          <img className={style.productPicture} src={product3} alt="product" />
          <p className={style.heading4}>藝企合作，共創雙贏</p>
        </div>
      </div>
      <a href="product">
        <button className={style.joinButton}> {"> "}查看所有商品</button>
      </a>
      <div className={style.portfolio}>
        <hgroup className={style.pageMargin}>
          <p className={style.heading3}>柴米武林招開中</p>
          <p className={style.heading3}>快來加入成為柴米榜榜主吧！</p>
          <p className={style.heading4}>
            柴米榜，集結全臺數位領域專家，既是作品集，也是商品的展示中心
          </p>
        </hgroup>
        <a href="portfolio">
          <img
            className={style.introducePicture}
            src={introduce1}
            alt="introduce"
          />
        </a>
      </div>
      <div className={style.portfolio}>
        <a href="blog">
          <img
            className={style.introducePicture2}
            src={introduce2}
            alt="introduce"
          />
        </a>
        <hgroup>
          <p className={style.heading3}>最新設計新聞快報</p>
          <p className={style.heading3}>掌握時事，掌握先機！</p>
          <p className={style.heading4}>
            每日搜集國內外設計情報，隨時掌握設計藝術界快訊
          </p>
        </hgroup>
      </div>
      <div className={style.portfolio}>
        <hgroup className={style.pageMargin}>
          <p className={style.heading3}>聚集全國優質創作者</p>
          <p className={style.heading3}>一起來場頭腦風暴吧！</p>
          <p className={style.heading4}>
            全國活動資訊交流，快來和大家分享你覺得有趣的設計、藝文活動吧！
          </p>
        </hgroup>
        <a href="Communication">
          <img
            className={style.introducePicture}
            src={introduce3}
            alt="introduce"
          />
        </a>
      </div>
      <a href="login">
        <button className={style.joinButton}>加入Charming</button>
      </a>
    </header>
  );
}

export default UnloginHome;
