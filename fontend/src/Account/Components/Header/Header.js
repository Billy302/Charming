import style from './Header.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { RiEarthFill } from 'react-icons/ri' //語言 icon

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <img
          className={style.logo}
          src={require('../../images/charming_logo.png')}
          alt="logo"
        />
        <Link to="/" className={style.navLeft}>
          柴米 Charming
        </Link>
        <Link to="/signup" className={style.navRight}>
          註冊
        </Link>
        <Link to="/signin" className={style.navRight}>
          登入
        </Link>
        <Link to="/signup/info" className={style.navRight}>
          柴社
        </Link>
        <Link to="/signin/recover" className={style.navRight}>
          柴訊
        </Link>
        <Link to="/signin/identify" className={style.navRight}>
          柴米人
        </Link>
        <Link to="/singup/info" className={style.navRight}>
          <RiEarthFill />
          語言
        </Link>
      </nav>
    </header>
  )
}
export default Header
