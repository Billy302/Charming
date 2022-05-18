import React from 'react'
import style from './User.module.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import MyButton from '../../Components/MyButton/MyButton'

function MyAccount(props) {
  const location = useLocation()
  console.log(location)

  const { auth } = props

  return (
    <>
      {/* 上方選單 */}
      <nav className={style.navLeft}>
        <Link to="/account">
          會員中心 <hr />
        </Link>
        <Link to="/shoppinglist">
          購買清單 <hr />
        </Link>
        <Link to="/collection">
          我的收藏 <hr />
        </Link>
        <Link to="/notice">
          我的通知 <hr />
        </Link>
      </nav>

      {/* 右側內文 */}

      <main className={style.main}>
        <h1 className={style.h1}>基本資料</h1>
        <img src={require('../../Images/Avatar3.png')} alt="male" />
        <div className={style.form}>
          <label>Jacky Chen</label>
          {auth ? '已登入' : '尚未登入'}
          <label>會員稱號：</label>
          <label>暱稱</label>
          <label>男性</label>
          <label>生日</label>
          <label>E-mail</label>
          <label>連絡電話</label>
          <label>所在地區</label>
        </div>
        <MyButton />
      </main>

      {/* 左側選單 */}
      <aside className={style.aside}>
        <ul className={style.ul}>
          <li>
            <Link to="/account">基本資料</Link>
          </li>
          <li>
            <Link to="/notice/setting">通知設定</Link>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default MyAccount
