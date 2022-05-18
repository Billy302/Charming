// 功能：取得會員個人資料 Method: ? URL: ?
// 功能：加入購物車，order(key) 基本資料(姓名/聯絡方式/總價)
// 輸入框的value要改
import React from 'react'
import { useState } from 'react'
import Processbar from '../Components/Processbar/Processbar'
import data from '../Json/test.json'
import './Cart.css'

function Cart2() {
  const [inputText, setInputText] = useState('')
  return (
    //JSX
    <>
      <h3>購物車-基本資料 Page</h3>
      {/* 進度條 */}
      <Processbar step="2" />
      {/* 輸入框 */}
      <section id="inputName" className='blockText'>
        <div>姓名</div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="inputTel" className='blockText'>
        <div>聯絡方式</div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="inputPrice" className='blockText'>
        <div>總價</div>
        <input
          type="text"
          value={inputText}
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
              <tr key={v.id} className="blockNoPicture">
                <th scope="row">{v.id}</th>
                <td>{v.username}</td>
                <td>{v.itemname}</td>
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
            // 回首頁 push 尚未填寫
            // history.push('路徑')
          }}
        >
          下一步
        </button>
        <button
          className="button"
          onClick={() => {
            // history.goback()
          }}
        >
          回上頁
        </button>
      </div>
    </>
  )
}
export default Cart2
