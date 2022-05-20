import style from './UserHeader.module.css'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa' //購物車 icon
import { RiNotification3Fill } from 'react-icons/ri' //通知 icon
import { Link } from 'react-router-dom'

function UserHeader() {
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
        {/* 會員中心(個人選單) */}
        <Link to="/account">
          <img
            className={style.img}
            src={require('../../images/Avatar3.png')}
            alt="avatar"
          />
        </Link>
        <Link to="/notice" className={style.navRight}>
          <RiNotification3Fill />
        </Link>
        <Link to="/shoppinglist" className={style.navRight}>
          <FaShoppingCart />
        </Link>
        <Link to="/signin/recover" className={style.navRight}>
          柴社
        </Link>
        <Link to="/signin/recover" className={style.navRight}>
          柴訊
        </Link>
        <Link to="/signin/identify" className={style.navRight}>
          柴米人
        </Link>
      </nav>
    </header>
  )
}
export default UserHeader
