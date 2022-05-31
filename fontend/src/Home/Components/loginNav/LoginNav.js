import React, {useState} from "react";
import style from "./LoginNav.module.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsCloudy, BsFillBellFill } from "react-icons/bs";
import { FaShoppingCart, FaAngleDown } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import logo from "../../Assets/charming_logo.png";

function LoginNav(props) {
  const [typebar,setNavbar] = useState(false);
  const displayItemType = () =>{
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll',displayItemType);

  return (
    //固定住nav在下移的時候不動
    <header className={style.mainPage}>
      <nav className={style.navBar}>
        {/* logo 與charming文字 */}
        <div className={style.charmingLogo}>
          <a href="/Product/1" className={style.logoIcon}>
            <img src={logo} alt="logo" />
            <p>柴米Charming</p>
          </a>
        </div>

        <div className={style.searchBar}>
          <input
            type="search"
            placeholder="Search.."
            onChange={(e) => {
              console.log(e);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") console.log(e);
            }}
          />

          <input type="submit" value="搜尋" />
        </div>

        {/* 平版版搜尋 */}
        <div className={style.padSearch}>
          <ImSearch className={style.padSearchIcon} />
          <input type="search" className={style.padSearchBar}></input>
        </div>

        {/* -------選項------- */}
        <div className={style.charmingItem}>
          <ul className={style.itemStyle}>
            <div>
              <li className={style.changeLanguage}>
                <AiOutlineGlobal />
                <select>
                  <option value="australia">繁體中文</option>
                  <option value="English">English</option>
                </select>
                <FaAngleDown />
              </li>
              <a href="Portfolio" className={style.phoneDisplayNone}>
                <li>柴米人</li>
              </a>
              <a href="Blog" className={style.phoneDisplayNone}>
                <li>柴訊</li>
              </a>
              <a href="Communication" className={style.phoneDisplayNone}>
                <li>柴社</li>
              </a>
            </div>
            {/* icon & 頭像 */}
            <div>
              <a href="ShoppingCar">
                <li>
                  <FaShoppingCart className={style.phoneIcon}/>
                </li>
              </a>
              <a href="">
                <li>
                  <BsFillBellFill className={style.phoneIcon}/>
                </li>
              </a>
              <li className={style.showList}>
                <a href="/account">
                  <img src={logo} alt="logo" />
                </a>
                {/*--hover頭像時出現時才出現的會員表單 --*/}
                <div className={style.navList}>
                  <a href="">會員資料修改</a>
                  <a href="">我的設計</a>
                  <a href="/MyProduct/1">我的商品</a>
                  <a href="/collection">我的收藏</a>
                  <a href="/shoppinglist">購買清單</a>
                  <a href="/">登出</a>
                </div>
                {/* ——————————————————————————————————————— */}
              </li>
            </div>
          </ul>
        </div>
      </nav>

      {/* ----往下滾動時滑時出現的種類選項----- */}
      <div className={typebar ? `${style.displayblock}` :`${style.displayNone}`}>
        <hr/>
        <ul className={style.itemList}>
          <a href="">
            <li>NFT</li>
          </a>
          <a href="">
            <li>UI/UX</li>
          </a>
          <a href="">
            <li>書籍/翻譯</li>
          </a>
          <a href="">
            <li>Logo</li>
          </a>
          <a href="">
            <li>插圖</li>
          </a>
        </ul>
        <hr/>
      </div>
    </header>
  );
}
export default LoginNav;
