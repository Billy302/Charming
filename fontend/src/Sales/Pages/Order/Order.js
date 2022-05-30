// 取得使用者訂單的詳細內容 TO C
// http://localhost:3000/BtobPage/Order/1

import React, { useEffect, useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination'

function Order() {
  const [products, setProducts] = useState([])
  const [totalPage, setTotalPage] = useState([])

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3001/Sales/api/orderUser/1')
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
      <h3>To C -購買清單-細項 Page</h3>
      {products.map((v, i) => {
        const {} = v
        return (
          <div>
            <div>{}</div>
            <div>{}</div>
            <div>{}</div>
            <div>{}</div>
          </div>
        )
      })}
      {/* 丟變數  totalPages currentPages pathPages*/}
      <Pagination totalPages="15" currentPages="11" />
    </>
  )
}
export default Order
