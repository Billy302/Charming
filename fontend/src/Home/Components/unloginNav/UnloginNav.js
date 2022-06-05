import React, { useState } from 'react'
import style from './UnloginNav.module.css'
import { AiOutlineGlobal } from 'react-icons/ai'
import { FaAngleDown } from 'react-icons/fa'
import { ImSearch } from 'react-icons/im'
import logo from '../../Assets/charming_logo.png'
import { useLocation, useNavigate } from 'react-router-dom'

function UnloginNav(props) {
  // 取得包含目前URL的狀態和位置的物件函數
  const location = useLocation()
  const navigate = useNavigate()

  const searchParams = new URLSearchParams(location.search)
  let type = searchParams.get('typeID') ? searchParams.get('typeID') : ''
  let page = searchParams.get('page') ? searchParams.get('page') : ''

  let searchItem = searchParams.get('itemsName')
    ? searchParams.get('itemsName')
    : ''

  const [searchValue, setSearchValue] = useState('')

  const [typebar, setNavbar] = useState(false)
  const displayItemType = () => {
    if (window.scrollY >= 350) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', displayItemType)

  function goPath() {
    console.log(searchItem)
    if (searchItem) {
      navigate(
        `../${
          location.pathname +
          location.search.replace(
            `itemsName=${searchItem}`,
            `itemsName=${searchValue}`
          )
        }`
      )
    } else {
      navigate(
        `../${location.pathname + location.search}&itemsName=${searchValue}`
      )
    }
  }

  return (
    <header className={style.mainPage}>
      <nav className={style.navBar}>
        {/* logo 與charming文字 */}
        <div className={style.charmingLogo}>
          <a href={`/Product?page=1`} className={style.logoIcon}>
            <img src={logo} alt="logo" />
            <p>柴米Charming</p>
          </a>
        </div>

        <div
          className={typebar ? `${style.searchBar}` : `${style.displayNone}`}
        >
          <input
            type="search"
            placeholder="Search product or author"
            onChange={(e) => {
              setSearchValue(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setSearchValue(e.target.value)
                goPath()
              }
            }}
          />

          <input type="submit" value="搜尋" onClick={goPath} />
        </div>

        {/* 平版版搜尋 */}
        {/* <div className={style.padSearch}> */}
        <div
          className={typebar ? `${style.padSearch}` : `${style.displayNone}`}
        >
          <ImSearch className={style.padSearchIcon} onClick={goPath} />
          <input
            type="search"
            className={style.padSearchBar}
            onChange={(e) => {
              setSearchValue(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setSearchValue(e.target.value)
                goPath()
              }
            }}
          ></input>{' '}
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
            <a href="/signin">
              <li className={style.loginButton}>登入</li>
            </a>
            <a href="/signup">
              <li className={style.loginButton}>註冊</li>
            </a>
          </ul>
        </div>
      </nav>

      <div
        className={typebar ? `${style.displayblock}` : `${style.displayNone}`}
      >
        <hr />
        <ul className={ page ? `${style.itemList}` : `${style.displayNone}`}>
          {!type ? (
            <a href={`${location.pathname + location.search}&typeID=101`}>
              <li>NFT</li>
            </a>
          ) : (
            <a
              href={`${
                location.pathname +
                location.search.replace(`&typeID=${type}`, ``)
              }`}
            >
              <li>NFT</li>
            </a>
          )}
          {!type ? (
            <a href={`${location.pathname + location.search}&typeID=102`}>
              <li>UI/UX</li>
            </a>
          ) : (
            <a
              href={`${
                location.pathname +
                location.search.replace(`&typeID=${type}`, ``)
              }`}
            >
              <li>UI/UX</li>
            </a>
          )}
          {!type ? (
            <a href={`${location.pathname + location.search}&typeID=103`}>
              <li>書籍/翻譯</li>
            </a>
          ) : (
            <a
              href={`${
                location.pathname +
                location.search.replace(`&typeID=${type}`, ``)
              }`}
            >
              <li>書籍/翻譯</li>
            </a>
          )}
          {!type ? (
            <a href={`${location.pathname + location.search}&typeID=104`}>
              <li>Logo</li>
            </a>
          ) : (
            <a
              href={`${
                location.pathname +
                location.search.replace(`&typeID=${type}`, ``)
              }`}
            >
              <li>Logo</li>
            </a>
          )}
          {!type ? (
            <a href={`${location.pathname + location.search}&typeID=105`}>
              <li>插圖</li>
            </a>
          ) : (
            <a
              href={`${
                location.pathname +
                location.search.replace(`&typeID=${type}`, ``)
              }`}
            >
              <li>插圖</li>
            </a>
          )}
        </ul>
        <hr />
      </div>
    </header>
  )
}
export default UnloginNav
