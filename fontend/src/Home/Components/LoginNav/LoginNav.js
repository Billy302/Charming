import React from "react";
import style from "./LoginNav.module.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsCloudy, BsFillBellFill } from "react-icons/bs";
import { FaShoppingCart, FaAngleDown } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import logo from "../../Assets/charming_logo.png";

function LoginNav(props) {
  return (
    //固定住nav在下移的時候不動
    <header className={style.sticky}>
      <nav className={style["mainPage-header"]}>
        {/* logo 與charming文字 */}
        <a
          href="loginHome"
          className={`${style.heading4} ${style.displayFlex}`}
        >
          <img className={style["mainPage-logo"]} src={logo} alt="logo" />
          <p className={style.padding5px}>柴米Charming</p>
        </a>

        {/*--------- 搜尋欄位 ------*/}
        <form className={style.searchBar}>
          <input
            className={style.searchInput}
            type="search"
            placeholder="Search.."
            onChange={(e) => {
              console.log(e);
            }}
          />
          <input className={style.searchButton} type="submit" value="搜尋" />
        </form>

        {/* -------選項------- */}
        <div>
          <ul className={style["mainPage-nav"]}>
            <li>
              <AiOutlineGlobal />
              <select>
                <option value="australia">繁體中文</option>
                <option value="English">English</option>
              </select>
              <FaAngleDown />
            </li>
            <a href="Portfolio">
              <li>柴米人</li>
            </a>
            <a href="Blog">
              <li>柴訊</li>
            </a>
            <a href="Communication">
              <li>柴社</li>
            </a>
            <a href="ShoppingCar">
              <li>
                <FaShoppingCart />
              </li>
            </a>
            <a href="">
              <li>
                <BsFillBellFill />
              </li>
            </a>
            <li className={style.showList}>
              <a href="Users" className={style.userButton}>
                <img className={style["mainPage-logo"]} src={logo} alt="logo" />
              </a>

              {/*--hover頭像時出現時才出現的會員表單 --*/}
              <div className={style.navList}>
                <a href="">會員資料修改</a>
                <a href="">我的設計</a>
                <a href="">作品集</a>
                <a href="">我的商品</a>
                <a href="">購買清單</a>
                <a href="UnloginHome">登出</a>
              </div>
              {/* ——————————————————————————————————————— */}
            </li>
          </ul>

          {/* ----往下滾動時滑時出現的種類選項----- */}
          <hr className={style.itemLine} />
          <ul className={`${style.itemList} ${style.heading5}`}>
            <a href="">
              <li>UI/UX</li>
            </a>
            <a href="">
              <li>品牌宣傳</li>
            </a>
            <a href="">
              <li>插圖</li>
            </a>
            <a href="">
              <li>網頁設計</li>
            </a>
            <a href="">
              <li>攝影</li>
            </a>
          </ul>
          <hr className={style.itemLine} />
        </div>
      </nav>
      {/* -----------nav結束------------- */}
    </header>
  );
}
export default LoginNav;
