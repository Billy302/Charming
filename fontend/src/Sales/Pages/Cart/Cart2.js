// 功能：取得會員個人資料 Method: ? URL: ? ，等會員寫完
// 功能：加入購物車，order(key) 基本資料(姓名/聯絡方式/總價) ，要看會員怎麼寫
// 先用JSON假資料取代
// http://localhost:3000/Sales/Cart2

import React, { useState, useEffect } from 'react'
import Processbar from '../../Components/Processbar/Processbar'
import Style from './Cart.module.css'
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
      <tr key={i + 1} className={Style.listItem2} id={ID}>
        <th className={Style.blockSizeS} scope="row">
          {i + 1}
        </th>
        <td className={Style.blockSizeM}>{author_name}</td>
        <td className={Style.blockSizeXL}>{product_name}</td>
        <td className={`${Style.blockSizeM} ${Style.price}`}>{'$' + price}</td>
      </tr>
    )
  }

  return (
    <>
      <LoginNav />
      {/* 進度條 */}
      <Processbar step="2" />

      {/* 輸入框 */}
      <form className={Style.infoInput}>
        <div className={Style.blockText}>
          <label for="inputName">姓名</label>
          <input
            id="inputName"
            type="text"
            disabled
            value={number[0].username}
            onChange={(e) => {
              setInputText(e.target.value)
            }}
          />
        </div>
        <div className={Style.blockText}>
          <label for="inputTel">聯絡方式</label>
          <input
            id="inputTel"
            type="text"
            disabled
            value={number[0].mobile}
            onChange={(e) => {
              setInputText(e.target.value)
            }}
          />
        </div>
      </form>

      {/* 表格 */}
      <table className={Style.shoppingListS}>
        <thead className={Style.listTitle}>
          <tr>
            <th scope="col" className={Style.blockSizeS}>
              No.
            </th>
            <th scope="col" className={Style.blockSizeM}>
              設計師
            </th>
            <th scope="col" className={Style.blockSizeXL}>
              項目名稱
            </th>
            <th scope="col" className={Style.blockSizeM}>
              售價
            </th>
          </tr>
        </thead>
        <tbody className={Style.listItem}>{cartTable}</tbody>
        <div className={Style.totalPrice}>
          <label for="inputPrice">總價：</label>
          <input
            className={Style.totalPrice}
            id="inputPrice"
            type="text"
            disabled
            value={'$' + totalPrice}
            onChange={(e) => {
              setInputText(e.target.value)
            }}
          />
        </div>
      </table>

      {/* 按鈕 */}
      <div className={Style.checkButton}>
        <button
          className={Style.button2}
          onClick={() => {
            // 回上頁
            Navigate('../Sales/Cart1')
          }}
        >
          回上頁
        </button>
        <button
          className={Style.button1}
          onClick={() => {
            // 到下一頁
            Navigate('../Sales/Cart3')
            // 將個人資料存入Session，購買者ID & 訂單總價
            storage.setItem('addUser', `1 | ${totalPrice}`)
          }}
        >
          確認訂單
        </button>
      </div>
    </>
  )
}
export default Cart2
