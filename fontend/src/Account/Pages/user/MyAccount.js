import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import MyButton from '../../Components/MyButton'

function MyAccount(props) {
  const location = useLocation()
  console.log(location)

  const { auth } = props
  return (
    <>
      <nav>
        <ul className="row">
          <li>
            <Link to="/account">會員中心</Link>
          </li>
          <li>
            <Link to="/shoppinglist">購買清單</Link>
          </li>
          <li>
            <Link to="/collection">我的收藏</Link>
          </li>
          <li>
            <Link to="/notice">我的通知</Link>
          </li>
        </ul>
      </nav>
      <div className=".navLeft">
        <ul>
          <li>
            <Link to="/account">會員中心</Link>
          </li>
          <li>
            <Link to="/notice/setting">通知設定</Link>
          </li>
        </ul>
      </div>
      <main className=".navRight">
        <h1>基本資料</h1>
        {auth ? '已登入' : '尚未登入'}
        <MyButton />
      </main>
    </>
  )
}

export default MyAccount
