// 取得商家所有產品的銷售紀錄 TO B
// http://localhost:3000/BtobPage/MySale

import React, { useEffect, useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination'

function MySale() {
  const [products, setProducts] = useState([])
  const [totalPage, setTotalPage] = useState([])

  const fetchProducts = async () => {
    const response = await fetch(
      'http://localhost:3001/Sales/api/orderShop?name=aaa&orderID=1&itemsName=1&page=1'
    )
    const data = await response.json()
    setProducts(data[0])
    setTotalPage(data[2])
  }

  // 模擬componentDidMount
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <h3>To B - 個人銷售紀錄 Page</h3>
      {products.map((v, i) => {
        const { ID, product_name, create_time, price } = v
        return (
          <div>
            <div>訂單編號 : {ID}</div>
            <div>產品名稱 : {product_name}</div>
            <div>產品價格 : {price}</div>
            <div>訂單日期 : {create_time}</div>
          </div>
        )
      })}
      {/* 總頁數 */}
      <Pagination totalPages={totalPage} />
    </>
  )
}
export default MySale
