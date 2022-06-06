import React from 'react'
import Style from './Cart.module.css'

function ComponentsName() {
  return (
    <div className={Style.emptyCart}>
      <div>
        <p>現在購物車空空</p>
        <p>來看看有什麼新興設計吧？</p>
        <a href="/Product/1">GO</a>
      </div>
    </div>
  )
}

export default ComponentsName
