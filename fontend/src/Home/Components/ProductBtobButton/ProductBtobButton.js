import React from 'react'
import style from 'ProductBtobButton.module.css'

function ProductBtobButton(){
  return(
    <aside className={style.ProductBtobButton}>
        <a href="">商品總覽</a>
        <a href="">銷售記錄</a>
        <a href="">新增及修改商品</a>
    </aside>
    );
    
}

export default ProductBtobButton ;