import React from 'react'
import Style from './MyProduct.module.css'

// component
import LoginNav from '../../Components/LoginNav/LoginNav'

import ProductBtobButton from '../../Components/ProductBtobButton/ProductBtobButton'
import EditProduct from '../../Components/EditProduct/EditProduct'

function MyProduct() {
  return (
    <>
      <section>
        <div className={Style.buttonPosition}>
          <a href="/shopcenter/AddProduct">
            <button className={Style.addButton}>新增商品</button>
            <button className={Style.addButton1}>+</button>
          </a>
        </div>
        <div className={Style.arrangement}>
          <ProductBtobButton />
          <EditProduct />
        </div>
      </section>
    </>
  )
}
export default MyProduct
