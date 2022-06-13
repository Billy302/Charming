import React, { useState } from 'react'
import style from './LoginNav.module.css'
import { AiOutlineGlobal } from 'react-icons/ai'
import { BsFillBellFill } from 'react-icons/bs'
import { FaShoppingCart, FaAngleDown } from 'react-icons/fa'
import { ImSearch } from 'react-icons/im'
import logo from './charming_logo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function LoginNav(props) {
  const [searchKeyword, setSearchKeyword] = useState()
  const userId = localStorage.getItem('id')
  // const searchParams = new URLSearchParams(location.search)

  // let userId = searchParams.get('id') ? searchParams.get('id') : ''

  const navigate = useNavigate()

  const userInput = (e) => {
    setSearchKeyword(e.target.value)
  }

  const keywordSearch = () => {
    navigate(`../blog/keyword/search?keyword=${searchKeyword}`)
  }

  return (
    //固定住nav在下移的時候不動
    <header className={style.mainPage}>
      <nav className={style.navBar}>
        {/* logo 與charming文字 */}
        <div className={style.charmingLogo}>
          <a href={`/Product?id=${userId}&page=1`} className={style.logoIcon}>
            <img src={logo} alt="logo" />
            <p>柴米Charming</p>
          </a>
        </div>

        <div className={style.searchBar}>
          <input
            type="search"
            placeholder="Search product or author"
            onChange={userInput}
          />
          <input type="submit" value="搜尋" onClick={keywordSearch} />
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
              <a href="/Portfolio" className={style.phoneDisplayNone}>
                <li>柴米人</li>
              </a>
              <a href="/blog" className={style.phoneDisplayNone}>
                <li>柴訊</li>
              </a>
              <a href="/AskPage" className={style.phoneDisplayNone}>
                <li>柴社</li>
              </a>
            </div>
            {/* icon & 頭像 */}
            <div>
              <a href="/Sales/Cart1">
                <li>
                  <FaShoppingCart className={style.phoneIcon} />
                </li>
              </a>
              <a href="">
                <li>
                  <BsFillBellFill className={style.phoneIcon} />
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
                  <a href={`/MyProduct?id=${userId}&page=1`}>我的商品</a>
                  <a href="/collection">我的收藏</a>
                  <a href={`/BtobPage/Order?id=${userId}&page=1`}>購買清單</a>
                  <a href="/">登出</a>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default LoginNav
