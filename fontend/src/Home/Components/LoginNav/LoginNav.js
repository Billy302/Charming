import React, { useState } from 'react'
import style from './LoginNav.module.css'
import { FaShoppingCart } from 'react-icons/fa'
import { ImSearch } from 'react-icons/im'
import logo from '../../Assets/charming_logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function LoginNav(props) {
  const MySwal = withReactContent(Swal)

  const logOut = (e) => {
    //—————————————登出畫面———————————————
    e.preventDefault()
    MySwal.fire({
      title: '確定要登出嗎?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#795252',
      confirmButtonText: '確定',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('id')
        localStorage.setItem('auth', false)
        MySwal.fire({
          title: '登出成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate('/')
        })
      }
    })
  }

  // 取得包含目前URL的狀態和位置的物件函數
  const location = useLocation()
  const navigate = useNavigate()

  const searchParams = new URLSearchParams(location.search)
  let nowPage = searchParams.get('page') ? searchParams.get('page') : ''
  let searchItem = searchParams.get('itemsName')
    ? searchParams.get('itemsName')
    : ''

  const [searchValue, setSearchValue] = useState('')

  const [typebar, setNavbar] = useState(false)

  const displayItemType = () => {
    if (window.scrollY >= 80) {
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
    //固定住nav在下移的時候不動
    <header className={style.mainPage}>
      <nav className={style.navBar}>
        {/* logo 與charming文字 */}
        <div className={style.charmingLogo}>
          <a href={`/`} className={style.logoIcon}>
            <img src={logo} alt="logo" />
            <p>柴米Charming</p>
          </a>
        </div>

        <div className={style.searchBar}>
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
        <div className={style.padSearch}>
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
          ></input>
        </div>

        {/* -------選項------- */}
        <div className={style.charmingItem}>
          <ul className={style.itemStyle}>
            <div>
              {/* <li className={style.changeLanguage}>
                <AiOutlineGlobal />
                <select>
                  <option value="australia">繁體中文</option>
                  <option value="English">English</option>
                </select>
                <FaAngleDown />
              </li> */}
              <div className={style.hello}>
                <p> Hello!</p>
                <a href="/membercenter/account">
                  <p>{localStorage.getItem('name')}</p>
                </a>
              </div>
              <a href="/Product?page=1" className={style.phoneDisplayNone}>
                <li>探索</li>
              </a>
              <a href="/blog" className={style.phoneDisplayNone}>
                <li>柴訊</li>
              </a>
              <a className={style.phoneDisplayNone}>
                <li>柴米人</li>
              </a>
              <a className={style.phoneDisplayNone}>
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

              <li className={style.showList}>
                <img src={logo} alt="logo" />
                {/*--hover頭像時出現時才出現的會員表單 --*/}
                <div className={style.navList}>
                  <Link to={`/membercenter/account`}>會員中心</Link>
                  <Link to={`/shopcenter/myproduct?page=1`}>賣家中心</Link>
                  <Link to={`/membercenter/collection?page=1`}>我的收藏</Link>
                  <Link to={`/membercenter/shoppinglist?page=1`}>購買清單</Link>
                  <button onClick={logOut}>登出</button>
                </div>
                {/* ——————————————————————————————————————— */}
              </li>
            </div>
          </ul>
        </div>
      </nav>

      {/* ----往下滾動時滑時出現的種類選項----- */}
      <div
        className={typebar ? `${style.displayblock}` : `${style.displayNone}`}
      >
        <hr />
        <ul className={style.itemList}>
          {!nowPage ? (
            <a href={`/Product/${location.search}&typeID=101`}>
              <li>NFT</li>
            </a>
          ) : (
            <a href={`/Product?page=1&typeID=101`}>
              <li>NFT</li>
            </a>
          )}
          {!nowPage ? (
            <a href={`/Product/${location.search}&typeID=102`}>
              <li>UI/UX</li>
            </a>
          ) : (
            <a href={`/Product?page=1&typeID=102`}>
              <li>UI/UX</li>
            </a>
          )}
          {!nowPage ? (
            <a href={`/Product/${location.search}&typeID=103`}>
              <li>書籍/翻譯</li>
            </a>
          ) : (
            <a href={`/Product?page=1&typeID=103`}>
              <li>書籍/翻譯</li>
            </a>
          )}
          {!nowPage ? (
            <a href={`/Product/${location.search}&typeID=104`}>
              <li>Logo</li>
            </a>
          ) : (
            <a href={`/Product?page=1&typeID=104`}>
              <li>Logo</li>
            </a>
          )}
          {!nowPage ? (
            <a href={`/Product/${location.search}&typeID=105`}>
              <li>插圖</li>
            </a>
          ) : (
            <a href={`/Product?page=1&typeID=105`}>
              <li>插圖</li>
            </a>
          )}
        </ul>
        <hr />
      </div>
    </header>
  )
}
export default LoginNav
