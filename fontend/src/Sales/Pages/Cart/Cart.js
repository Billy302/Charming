import React from 'react'
import Style from './Cart.module.css'
import { Link } from 'react-router-dom'

function ComponentsName() {
  // 使用 localStorage WebAPI
  let storage = localStorage

  return (
    <div className={Style.emptyCart}>
      <div>
        <p>現在購物車空空</p>
        <p>來看看有什麼新興設計吧？</p>
        <Link to={`/Product?page=1`}>go</Link>
      </div>
    </div>
  )
}

export default ComponentsName
