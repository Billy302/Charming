import React from 'react'
import style from './ProductBtobButton.module.css'

function ProductBtobButton() {
  return (
    <aside className={style.ProductBtobButton}>
      <a href="/MyProduct?id=1&page=1">商品總覽</a>
      <a href="">銷售記錄</a>
    </aside>
  )
}

export default ProductBtobButton
