// 取得商家所有產品的銷售紀錄 TO B
// http://localhost:3000/BtocPage/MySale?id=4&page=1

// 還沒做完，Fetch處 還沒改為變數

import React, { useEffect, useState } from 'react'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import Pagination from '../../Components/Pagination/Pagination'
import { useLocation } from 'react-router-dom'

function MySale() {
  const [products, setProducts] = useState([])
  const [totalPage, setTotalPage] = useState([])
  const location = useLocation()

  const fetchProducts = async () => {
    const response = await fetch(
      `http://localhost:3001/Sales/api/orderShop${location.search}`
    )
    const data = await response.json()
    setProducts(data[0])
    setTotalPage(data[2])
  }

  // 模擬componentDidMount
  useEffect(
    (location) => {
      fetchProducts()
    },
    [location.search]
  )

  return (
    <>
      <LoginNav />
      <h3>To B - 個人銷售紀錄 Page</h3>
      {products.map((v, i) => {
        const { ID, product_name, create_time, price } = v
        return (
          <div key={ID}>
            <div>訂單編號 : {ID}</div>
            <div>產品名稱 : {product_name}</div>
            <div>產品價格 : {price}</div>
            <div>訂單日期 : {create_time}</div>
          </div>
        )
      })}
      {/* 總頁數 */}
      <Pagination totalPages={totalPage} search={location.search} />
    </>
  )
}
export default MySale
