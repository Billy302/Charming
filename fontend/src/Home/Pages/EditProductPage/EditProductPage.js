// 功能：取得單筆商品資料。Method: GET。URL: /api/product/:id
// 功能：修改商品。Method: PUT。URL: /api/product/:id

import React from 'react'
import LoginNav from '../../Components/LoginNav/LoginNav'
import Footer from '../../Components/Footer/Footer'
import PhoneFooter from '../../Components/PhoneFooter/PhoneFooter'
import ProductBtobButton from '../../Components/ProductBtobButton/ProductBtobButton'
import style from './EditProductPage.module.css'

function EditProduct() {
  return (
    <>
      <LoginNav />
      <section className={style.EditProduct}>
        {/* <ProductBtobButton /> */}
        <div></div>
      </section>
    </>
  )
}
export default EditProduct
