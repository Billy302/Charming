// 功能：取得會員個人資料 Method: ? URL: ?
// 功能：加入購物車，order(key) 基本資料(姓名/聯絡方式/總價)
// 輸入框的value要改
import React from 'react'
import { useState } from 'react'
import Processbar from '../../Components/Processbar/Processbar'
import data from '../../Json/Cart.json'
import number from '../../Json/number.json'
import './Cart.css'
// import { useHistory } from 'react-router-dom'

function Cart2() {
  // useEffect 取會員個人資料 + 讀取購物車

  // let history = useHistory()

  const [inputText, setInputText] = useState('')
  // 計算購物車，價格總數
  // 已取得購物車資料，用迴圈重複加總
  let totalPrice = 0
  for (let i = 0; i < data.length; i++) {
    totalPrice += parseInt(data[i].price)
  }

  return (
    <>
      <h3>購物車-基本資料 Page</h3>
      {/* 進度條 */}
      <Processbar step="2" />
      {/* 輸入框 */}
      <section id="inputName" className="blockText">
        <div>姓名</div>
        <input
          type="text"
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
          value={totalPrice}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
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
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={i} className="blockNoPicture">
                <th scope="row">{i + 1}</th>
                <td>{v.author_name}</td>
                <td>{v.product_name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* 按鈕 */}
      <div>
        <button
          className="button"
          onClick={() => {
            // 到下一頁
            // history.push('路徑')
            // 將個人資料存入Session
          }}
        >
          下一步
        </button>
        <button
          className="button"
          onClick={() => {
            // 回首頁
            // history.push('路徑')
          }}
        >
          回上頁
        </button>
      </div>
    </>
  )
}
export default Cart2
