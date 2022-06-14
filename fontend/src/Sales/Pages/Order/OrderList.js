// 取得使用者的全部訂單 TO C
// http://localhost:3000/BtobPage/Order?id=1&page=1

import React, { useEffect, useRef, useState } from 'react'
import Style from './Order.module.css'
import Pagination from '../../Components/Pagination/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'

function OrderList() {
  // 取得包含目前URL的狀態和位置的物件函數
  const location = useLocation()
  const Navigate = useNavigate()

  const [products, setProducts] = useState([])
  const [totalPage, setTotalPage] = useState([])

  let userId = localStorage.getItem('id')

  const searchParams = new URLSearchParams(location.search)

  let currentpage = searchParams.get('page')

  const fetchProducts = async () => {
    const response = await fetch(
      `http://localhost:3001/Sales/api/orderUser?id=${userId}&page=${currentpage}`
    )
    const data = await response.json()
    // 對時間格式做處理
    for (let i = 0; i < data[0].length; i++) {
      let dt = new Date(data[0][i]['create_time'])
      data[0][i]['create_time'] = dt.toLocaleString().substring(0, 8)
    }
    setProducts(data[0])
    setTotalPage(data[2])
  }

  // componentDidMount / componentDidUpdate
  useEffect(() => {
    fetchProducts()
  }, [currentpage])

  return (
    <>
      <section>
        <table className={Style.shoppingListS}>
          <thead className={Style.listTitle}>
            <tr>
              <th scope="col" className={Style.blockSizeL}>
                訂單編號
              </th>
              <th scope="col" className={Style.blockSizeL}>
                產品總價
              </th>
              <th scope="col" className={Style.blockSizeL}>
                訂單日期
              </th>
              <th scope="col" className={Style.blockSizeL}>
                詳細
              </th>
            </tr>
          </thead>
          {/* ——————————————接資料處————————————————— */}

          <tbody className={`${Style.phoneCart} ${Style.listItem}`}>
            {products.map((v, i) => {
              const { ID, user_ID, total_price, create_time } = v
              return (
                <tr className={Style.listItem2} key={i}>
                  <th className={Style.blockSizeL} scope="row">
                    {ID}
                  </th>
                  <td className={`${Style.blockSizeL} ${Style.price}`}>
                    {total_price}
                  </td>
                  <td className={Style.blockSizeL}>{create_time}</td>
                  <td className={Style.blockSizeL}>
                    <button
                      className={Style.detailButton}
                      onClick={() => {
                        Navigate(`${location.pathname}/${ID}`)
                      }}
                    >
                      詳細
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
      {/* <Pagination totalPages={totalPage} /> */}
    </>
  )
}
export default OrderList
