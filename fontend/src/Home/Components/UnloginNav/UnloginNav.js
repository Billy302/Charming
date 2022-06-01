import React, {useState} from "react";
import style from "./UnloginNav.module.css";
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im'
import logo from "../../Assets/charming_logo.png";

function UnloginNav(props){
  const [typebar,setNavbar] = useState(false);
  const displayItemType = () =>{
    if(window.scrollY >= 400){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll',displayItemType);

  return (
    <header className={style.mainPage}>
      <nav className={style.navBar}>
        {/* logo 與charming文字 */}
        <div className={style.charmingLogo}>
          <a href="/UnloginHome" className={style.logoIcon}>
            <img src={logo} alt="logo" />
            <p>柴米Charming</p>
          </a>
        </div>

       <div className={typebar ? `${style.searchBar}` :`${style.displayNone}`}>
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
        {/* <div className={style.padSearch}> */}
        <div className={typebar ? `${style.padSearch}` :`${style.displayNone}`}>
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
              <a href="/Portfolio" className={style.phoneDisplayNone}>
                <li>柴米人</li>
              </a>
              <a href="/Blog" className={style.phoneDisplayNone}>
                <li>柴訊</li>
              </a>
              <a href="/AskPage" className={style.phoneDisplayNone}>
                <li>柴社</li>
              </a>
            </div>
            <a href="/signin">
              <li className={style.loginButton}>登入</li>
            </a>
            <a href="/signup">
              <li className={style.loginButton}>註冊</li>
            </a>
          </ul>
        </div>
      </nav>

     <div className={typebar ? `${style.displayblock}` :`${style.displayNone}`}>
        <hr/>
        <ul className={style.itemList}>
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
        <hr/>
      </div>
    </header>
  );
};
export default UnloginNav;
