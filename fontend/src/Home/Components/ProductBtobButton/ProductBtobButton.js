import React from 'react'
import style from './ProductBtobButton.module.css'

function ProductBtobButton() {
  return (
    <aside className={style.ProductBtobButton}>
      <a href="/shopcenter/myproduct?page=1">商品總覽</a>
      <a href="/shopcenter/MySale?page=1">銷售記錄</a>
    </aside>
  )
}

export default ProductBtobButton
