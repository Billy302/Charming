import React from 'react'
import style from './ProductBtobButton.module.css'

function ProductBtobButton() {
  return (
    <aside className={style.ProductBtobButton}>
      <a href="/blog/myproduct">商品總覽</a>
      <a href="/BtocPage/MySale">銷售記錄</a>
    </aside>
  )
}

export default ProductBtobButton
