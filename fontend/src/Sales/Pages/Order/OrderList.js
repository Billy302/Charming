// 取得使用者的全部訂單 TO C
// http://localhost:3000/BtobPage/Order?id=1&page=1

import React, { useEffect, useRef, useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'

function OrderList() {
  // 取得包含目前URL的狀態和位置的物件函數
  const location = useLocation()
  const Navigate = useNavigate()

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

  // componentDidMount / componentDidUpdate
  useEffect(() => {
    fetchProducts()
  }, [currentpage])

  return (
    <>
      <LoginNav />
      <h3>To C -購買清單-總攬 Page</h3>
      {products.map((v, i) => {
        const { ID, user_ID, total_price, creat_time } = v
        return (
          <div key={i}>
            <div>{ID}</div>
            <div>{user_ID}</div>
            <div>{total_price}</div>
            <div>{creat_time}</div>
            <button
              className="button"
              onClick={() => {
                Navigate(`${location.pathname}/${ID}`)
              }}
            >
              詳細
            </button>
          </div>
        )
      })}
      {/* 總頁數 */}
      <Pagination totalPages={totalPage} search={location.search} />
    </>
  )
}
export default OrderList
