// 取得使用者的全部訂單 TO C
// http://localhost:3000/BtobPage/Order?id=1&page=1

import React, { useEffect, useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination'
import { useLocation } from 'react-router-dom'

function OrderList() {
  // 取得包含目前URL的狀態和位置的物件函數
  const location = useLocation()

  const [products, setProducts] = useState([])
  const [totalPage, setTotalPage] = useState([])

  const searchParams = new URLSearchParams(location.search)
  let userId = searchParams.get('id')
  let currentpage = searchParams.get('page')

  const fetchProducts = async () => {
    const response = await fetch(
      `http://localhost:3001/Sales/api/orderUser?id=${userId}&page=${currentpage}`
    )
    const data = await response.json()
    setProducts(data[0])
    setTotalPage(data[2])
  }

  // 模擬componentDidMount
  useEffect(() => {
    fetchProducts()
  }, [])

  // 模擬componentDidUpdate
  useEffect(() => {
    fetchProducts()
  }, [products])

  return (
    <>
      <h3>To C -購買清單-總攬 Page</h3>
      {products.map((v, i) => {
        const { ID, user_ID, total_price, creat_time } = v
        return (
          <div key={i}>
            <div>{ID}</div>
            <div>{user_ID}</div>
            <div>{total_price}</div>
            <div>{creat_time}</div>
          </div>
        )
      })}
      {/* 丟變數  totalPages currentPages pathPages*/}
      <Pagination totalPages={totalPage} />
    </>
  )
}
export default OrderList
