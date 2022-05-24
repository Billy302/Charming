// reactjs-credit-card 引入失敗
// 功能：新增訂單。Method: POST。URL: /api/order
// 跳頁路徑未填

import React, { useState, useRef, useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import Processbar from '../../Components/ProcessBar/ProcessBar'

import Cards from 'react-credit-cards'

import 'react-credit-cards/es/styles-compiled.css'
import './CreditCard.css'
import './Cart.css'

function Cart3_Test() {
  let history = useHistory()

  // 信用卡所需屬性
  const [number, SetNumber] = useState('')
  const [name, SetName] = useState('')
  const [month, SetMonth] = useState('')
  let [expiry, SetExpiry] = useState('')
  const [cvc, SetCvc] = useState('')
  const [focus, SetFocus] = useState('')
  const handleDate = (e) => {
    SetMonth(e.target.value)
    SetExpiry(e.target.value)
  }
  const handleExpiry = (e) => {
    SetExpiry(month.concat(e.target.value))
  }

  return (
    <>
      <h3>購物車-結帳 Page</h3>
      <Processbar step="3" />

      {/* 信用卡 */}

      <div className="card">
        {/* 卡面 */}
        <div clasName="rccs__card rccs__card--unknown">
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
        </div>
        {/* 輸入欄 */}
        <form>
          {/* 卡號 */}
          <div>
            <label for="name" className='blockText'>信用卡卡號 : </label>
            <input
              type="tel"
              className="form-control"
              value={number}
              name="number"
              maxlength="16"
              pattern="[0-9]+"
              onChange={(e) => {
                SetNumber(e.target.value)
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
          {/* 持卡者姓名 */}
          <div>
            <label for="name" className='blockText'>持卡者姓名 : </label>
            <input
              type="text"
              className="form-control"
              value={name}
              name="name"
              onChange={(e) => {
                SetName(e.target.value)
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
          {/* 到期日期 */}
          <div>
            <label for="month" className='blockText'>有效截止月 / 年 : </label>
            <select name="expiry" onChange={handleDate}>
              <option value=" ">Month</option>
              <option value="01">Jan</option>
              <option value="02">Feb</option>
              <option value="03">Mar</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">Aug</option>
              <option value="09">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
            <select name="expiry" onChange={handleExpiry}>
              <option value=" ">Year</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
            </select>
          </div>
          {/* 驗證碼 */}
          <div>
            <label for="cvv" className='blockText'>CVV : </label>
            <input
              type="tel"
              name="cvc"
              maxlength="3"
              value={cvc}
              pattern="\d*"
              onChange={(e) => {
                SetCvc(e.target.value)
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </form>
      </div>

      {/* 按鈕 */}
      <div>
        <button
          className="button"
          onClick={() => {
            // 到下一頁
            history.push('路徑')
            // 新增訂單
          }}
        >
          下一步
        </button>
        <button
          className="button"
          onClick={() => {
            // 回首頁
            history.push('路徑')
          }}
        >
          回上頁
        </button>
      </div>
    </>
  )
}
export default Cart3_Test
