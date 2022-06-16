import React, { useState } from 'react'
import style from './UnloginNav.module.css'
import { ImSearch } from 'react-icons/im'
import logo from '../../Assets/charming_logo.png'
import { useLocation, useNavigate } from 'react-router-dom'

function UnloginNav(props) {
  // 取得包含目前URL的狀態和位置的物件函數
  const location = useLocation()
  const navigate = useNavigate()

  const searchParams = new URLSearchParams(location.search)
  let type = searchParams.get('typeID') ? searchParams.get('typeID') : ''
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
    // 先判斷搜尋欄內是否有值
    if (searchValue) {
      // 判斷是否已經有搜尋過
      if (searchItem) {
        navigate(
          `../Product${location.search.replace(
            `itemsName=${searchItem}`,
            `itemsName=${searchValue}`
          )}`
        )
      } else {
        // 判斷來源處有沒有Query
        if (searchParams.search) {
          navigate(`../Product${searchParams}&page=1&itemsName=${searchValue}`)
        } else {
          navigate(`../Product?page=1&itemsName=${searchValue}`)
        }
      }
    }
  }

  return (
    <header className={style.mainPage}>
      <nav className={style.navBar}>
        {/* logo 與charming文字 */}
        <div className={style.charmingLogo}>
          <a href={`/`} className={style.logoIcon}>
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
              <a href="/Product?page=1" className={style.phoneDisplayNone}>
                <li>探索</li>
              </a>
              <a href="/blog" className={style.phoneDisplayNone}>
                <li>柴訊</li>
              </a>
              <a href="/" className={style.phoneDisplayNone}>
                <li>柴米人</li>
              </a>
              <a href="/" className={style.phoneDisplayNone}>
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
    </header>
  )
}
export default UnloginNav
