import React from 'react'
import style from './MyCollectionButton.module.css'

function ProductBtobButton(props) {
  return (
    <aside className={style.ProductBtobButton}>
      <a onClick={props.onRenderProduct}>商品收藏</a>
      <a onClick={props.onRenderArticle}>文章收藏</a>
    </aside>
  )
}

export default ProductBtobButton
