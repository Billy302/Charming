// 功能：取得會員個人資料 Method: ? URL: ? ，要看會員怎麼寫
// 功能：加入購物車，order(key) 基本資料(姓名/聯絡方式/總價) ，要看會員怎麼寫
// 先用JSON假資料取代
// http://localhost:3000/Sales/Cart2

import React, { useState, useEffect } from 'react'
import Processbar from '../../Components/ProcessBar/ProcessBar'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import number from '../../Json/number.json'

function Cart2() {
  // 使用 useNavigate 套件
  let Navigate = useNavigate()

  // 要看會員怎麼寫
  // const [member, setmember] = useState([])
  // const fetchProducts = async () => {
  //   const response = await fetch(
  //     `http://localhost:3001/Sales/api/orderUser?id=`
  //   )
  //   const data = await response.json()
  //   setmember(data[0])
  // }

  // componentDidMount
  // useEffect(() => {
  //   fetchProducts()
  // }, [])

  const [inputText, setInputText] = useState('')

  // 使用 localStorage WebAPI
  let storage = localStorage

  // 取得localStorage的項目清單
  let itemString = storage.getItem('addItemList')

  // 分割localStorage的項目清單=>["1","2",""]，要刪除最後一筆
  let items = itemString.split(' |')
  items.pop()

  // 建立空白陣列，存放jsx語法
  let cartTable = []

  // 計算購物車，價格總數
  let totalPrice = 0

  // 動態生成table的內容
  for (let i = 0; i < items.length; i++) {
    let { ID, author_name, price, product_name } = JSON.parse(
      storage.getItem(items[i])
    )
    // 已取得購物車資料，用迴圈重複加總
    totalPrice += { price }.price

    // 將Html語法加入cartTable語法
    cartTable.push(
      <tr key={i + 1} className="blockNoPicture" id={ID}>
        <th scope="row">{i + 1}</th>
        <td>{author_name}</td>
        <td>{product_name}</td>
        <td>{price}</td>
      </tr>
    )
  }

  return (
    <>
      <LoginNav />
      <h3>購物車-基本資料 Page</h3>
      {/* 進度條 */}
      <Processbar step="2" />
      {/* 輸入框 */}
      <form>
        <section id="inputName" className="blockText">
          <div>姓名</div>
          <input
            type="text"
            disabled
            value={number[0].username}
            onChange={(e) => {
              setInputText(e.target.value)
            }}
          />
        </section>
        <section id="inputTel" className="blockText">
          <div>聯絡方式</div>
          <input
            type="text"
            disabled
            value={number[0].mobile}
            onChange={(e) => {
              setInputText(e.target.value)
            }}
          />
        </section>
        <section id="inputPrice" className="blockText">
          <div>總價</div>
          <input
            type="text"
            disabled
            value={totalPrice}
            onChange={(e) => {
              setInputText(e.target.value)
            }}
          />
        </section>
      </form>
      {/* 表格 */}
      <table>
        <thead>
          <tr>
            <th scope="col" className="blockSizeS">
              No
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
        <tbody>{cartTable}</tbody>
      </table>
      {/* 按鈕 */}
      <div>
        <button
          className="button"
          onClick={() => {
            // 到下一頁
            Navigate('../Sales/Cart3')
            // 將個人資料存入Session，購買者ID & 訂單總價
            storage.setItem('addUser', `1 | ${totalPrice}`)
          }}
        >
          下一步
        </button>
        <button
          className="button"
          onClick={() => {
            // 回上頁
            Navigate('../Sales/Cart1')
          }}
        >
          回上頁
        </button>
      </div>
    </>
  )
}
export default Cart2
