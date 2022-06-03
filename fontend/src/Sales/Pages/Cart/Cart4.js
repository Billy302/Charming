// http://localhost:3000/Sales/Cart4
// 訂單ID等細項，等會員寫完
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'

import Processbar from '../../Components/ProcessBar/ProcessBar'
import data from '../../Json/Order.json'

import './Cart.css'

function Cart4() {
  // 使用 useNavigate 套件
  let Navigate = useNavigate()

  // 使用 localStorage WebAPI
  let storage = localStorage
  const addID = storage.getItem('addID').split(',')

  const [order, setOrder] = useState([])

  const fetchProducts = async () => {
    const response = await fetch(
      `http://localhost:3001/Sales/api/orderUser/${addID[0]}/${addID[1]}`
    )
    const data = await response.json()
    // 只需要商品的第一張圖
    // 先取得全部圖名，進行切割
    for (let i = 0; i < data.length; i++) {
      let picFirst = data[i].pic_path.split(' ')
      // 將products的商品路徑改為新的路徑(只有第一張)
      data[i]['pic_path'] = picFirst[0]
    }
    let orderDate = new Date(order[0]['create_time'])
    setOrder(data)
  }

  // 模擬componentDidMount
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <LoginNav />
      <h3>購物車-訂單 Page(cart4)</h3>
      <Processbar step="3" />
      <div className="">
        <h2 className="successText">付款成功</h2>
        <div className="block">
          <p className="blockText">訂單ID</p>
          <p id="orderID" className="blockTextInput">
            {}
          </p>
        </div>
        <div className="block">
          <p className="blockText">成立日期</p>
          <p id="orderTime" className="blockTextInput">
            {}
          </p>
        </div>
        <div className="block">
          <p className="blockText">姓名</p>
          <p id="orderName" className="blockTextInput">
            {}
          </p>
        </div>
        <div className="block">
          <p className="blockText">聯絡方式</p>
          <p id="orderTel" className="blockTextInput">
            {}
          </p>
        </div>
        <div className="block">
          <p className="blockText">總價</p>
          <p id="orderTotal" className="blockTextInput">
            {}
          </p>
        </div>
      </div>
      <div className="tableScroll">
        <table>
          <thead>
            <tr>
              <th scope="col" className="blockSizeS">
                No
              </th>
              <th scope="col" className="blockSizeL">
                Item Picture
              </th>
              <th scope="col" className="blockSizeM">
                Author
              </th>
              <th scope="col" className="blockSizeLL">
                Item Name
              </th>
              <th scope="col" className="blockSizeM">
                Item Price
              </th>
            </tr>
          </thead>
          <tbody>
            {order.map((v, i) => {
              return (
                <tr key={i} className="blockPicture">
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img
                      alt="圖片無法顯示"
                      src={`http://localhost:3000/Home/ProductImg/${v.pic_path}`}
                    />
                  </td>
                  <td>{v.author_name}</td>
                  <td>{v.product_name}</td>
                  <td>{v.price}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <button
        className="button"
        onClick={() => {
          // 清除storage:addID
          storage.removeItem('addID')
          // 回首頁
          Navigate('/')
        }}
      >
        完成
      </button>
    </>
  )
}
export default Cart4
