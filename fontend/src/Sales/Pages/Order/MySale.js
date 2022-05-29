// 功能：取得全部訂單資料。Method: GET。URL: /api/order
// WHERE product_ID 與 create_time
// 計算筆數 => Json轉陣列

import React, { useEffect, useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination'

function MySale() {
  const [products, setProducts] = useState([])
  const [totalPage,setTotalPage] = useState([])

  const fetchProducts = async () => {
    const response = await fetch(
      'http://localhost:3001/Sales/api/orderShop?id=1&page=1'
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
        const { ID, user_ID, total_price, creat_time } = v
        return (
          <div>
            <div>{ID}</div>
            <div>{user_ID}</div>
            <div>{total_price}</div>
            <div>{creat_time}</div>
          </div>
        )
      })}
      {/* 丟變數  totalPages currentPages pathPages*/}
      <Pagination totalPages="15" currentPages="11" />
    </>
  )
}
export default MySale
