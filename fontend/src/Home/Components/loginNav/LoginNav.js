import React, { useState } from 'react'
import style from './LoginNav.module.css'
import { AiOutlineGlobal } from 'react-icons/ai'
import { BsFillBellFill } from 'react-icons/bs'
import { FaShoppingCart, FaAngleDown } from 'react-icons/fa'
import { ImSearch } from 'react-icons/im'
import logo from '../../Assets/charming_logo.png'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
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
  const Params = useParams()
  const navigate = useNavigate()

  const searchParams = new URLSearchParams(location.search)
  let userId = searchParams.get('id') ? searchParams.get('id') : ''
  let type = searchParams.get('typeID') ? searchParams.get('typeID') : ''

  let userIdParams = Params.userId ? Params.userId : ''

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
    navigate(`../Product?id=${userId}&page=1&itemsName=${searchValue}`)
  }

  return (
    //固定住nav在下移的時候不動
    <header className={style.mainPage}>
      <nav className={style.navBar}>
        {/* logo 與charming文字 */}
        <div className={style.charmingLogo}>
          {/* 未登入，跳"/"  */}
          {/* 已登入，跳"/Product?id=${userId}&page=1" */}
          <a href={`/Product?id=${userId}&page=1`} className={style.logoIcon}>
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
                  <Link to={`../MyProduct?id=${userId}&page=1`}>我的商品</Link>
                  <a href="/collection">我的收藏</a>
                  <Link to={`../BtobPage/Order?id=${userId}&page=1`}>
                    購買清單
                  </Link>
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
export default LoginNav
