import React, { useState } from "react";
import style from "./UnloginHome.module.css";
// 匯入component
import UnloginNav from "../../Components/UnloginNav/UnloginNav";
import PhoneFooter from "../../Components/PhoneFooter/PhoneFooter";
// 匯入icon
import { ImSearch } from "react-icons/im";
// 匯入動畫效果
import Fade from "react-reveal/Fade";
//匯入圖片
import product1 from "../../Assets/communication2.png";
import product2 from "../../Assets/Join.png";
import product3 from "../../Assets/mainPageBlog.png";
import introduce1 from "../../Assets/charmingMan.png";
import introduce2 from "../../Assets/blog.png";
import introduce3 from "../../Assets/communication.png";
function UnloginHome() {
  const [scroll, setScroll] = useState(false);
  const displayItemType = () => {
    if (window.scrollY >= 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", displayItemType);
  return (
    <header>
      <UnloginNav />
      {/* search header */}
      <div className={style.backgroundImg}>
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
          <button className={style.searchButton}>
            <ImSearch className={style.iconStyle} />
          </button>
        </div>
        <div className={style.tags}>
          <a href="/ProductPage">
            <button className={style.searchTag}>中秋節</button>
          </a>
          <a href="/ProductPage">
            <button className={style.searchTag}>中秋節</button>
          </a>
          <a href="/ProductPage">
            <button className={style.searchTag}>中秋節</button>
          </a>
          <a href="/ProductPage">
            <button className={style.searchTag}>中秋節</button>
          </a>
        </div>
      </div>
      {/* 產品頁介紹 */}

      {/* className={scroll ? `${style.product}` : `${style.displayNone}`} */}
      <Fade bottom>
        <div className={style.product}>
          <div>
            <img src={product1} alt="product" />
            <p className={style.heading4}>快速媒合，即時交流</p>
          </div>
          <div>
            <img src={product2} alt="product" />
            <p className={style.heading4}>需求客製，快速出貨</p>
          </div>
          <div>
            <img src={product3} alt="product" />
            <p className={style.heading4}>藝企合作，共創雙贏</p>
          </div>
        </div>
        <a href="product">
          <button className={`${style.joinButton} ${style.heading4}`}>
            {" "}
            {"> "}查看所有商品
          </button>
        </a>
        {/* 柴米人頁面介紹 */}
        <div className={style.portfolio}>
          <hgroup className={style.pageMargin}>
            <p className={style.heading3}>柴米武林招開中</p>
            <p className={style.heading3}>快來加入成為柴米榜榜主吧！</p>
            <p className={style.heading4}>
              柴米榜，集結全臺數位領域專家，既是作品集，也是商品的展示中心
            </p>
          </hgroup>
          <a href="portfolio">
            <img src={introduce1} alt="introduce" />
          </a>
        </div>
        {/* 柴訊介紹 */}
        <div className={style.blog}>
          <hgroup className={style.phoneDisplay}>
            <p className={style.heading3}>最新設計新聞快報</p>
            <p className={style.heading3}>掌握時事，掌握先機！</p>
            <p className={style.heading4}>
              每日搜集國內外設計情報，隨時掌握設計藝術界快訊
            </p>
          </hgroup>
          <a href="blog">
            <img src={introduce2} alt="introduce" />
          </a>
          <hgroup className={style.blogText}>
            <p className={style.heading3}>最新設計新聞快報</p>
            <p className={style.heading3}>掌握時事，掌握先機！</p>
            <p className={style.heading4}>
              每日搜集國內外設計情報，隨時掌握設計藝術界快訊
            </p>
          </hgroup>
        </div>
        {/* 柴社介紹 */}
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
          <button className={`${style.joinButton} ${style.heading4}`}>
            加入Charming
          </button>
        </a>
        <PhoneFooter />
      </Fade>
    </header>
  );
}

export default UnloginHome;
