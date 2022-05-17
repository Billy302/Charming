import React from 'react'
import { Link } from 'react-router-dom'

function MyCollection() {
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
      <main>
        <h1>我的收藏</h1>
      </main>
    </>
  )
}

export default MyCollection
