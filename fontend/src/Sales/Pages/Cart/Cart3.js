// http://localhost:3000/Sales/Cart3
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import './CreditCard.css'
import Style from './Cart.module.css'

import Processbar from '../../Components/Processbar/Processbar'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'

function Cart3() {
  // 使用 useNavigate 套件
  let Navigate = useNavigate()

  // 使用 localStorage WebAPI
  let storage = localStorage

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

  function checkForm() {
    // 取得各欄位的DOM元素
    const cardNumber = document.getElementById('cardNumber')
    const cardNumberMsg = document.getElementById('cardNumberMsg')
    const cardName = document.getElementById('cardName')
    const cardNameMsg = document.getElementById('cardNameMsg')

    const cardYear = document.getElementById('cardYear')
    const cardMon = document.getElementById('cardMon')
    const cardDateMsg = document.getElementById('cardDateMsg')

    const cardCvc = document.getElementById('cardCvc')
    const cardCvcMsg = document.getElementById('cardCvcMsg')

    let isPass = true
    // 先清空訊息
    cardNumberMsg.innerHTML = ''
    cardNameMsg.innerHTML = ''
    cardDateMsg.innerHTML = ''
    cardCvcMsg.innerHTML = ''

    // 判斷不得為空值
    if (cardNumber.value === '') {
      isPass = false
      cardNumberMsg.innerHTML = '卡號不得為空'
    } else if (cardName.value === '') {
      isPass = false
      cardNameMsg.innerHTML = '姓名不得為空'
    } else if (cardMon.value === ' ') {
      isPass = false
      cardDateMsg.innerHTML = '請選擇月份'
    } else if (cardYear.value === ' ') {
      isPass = false
      cardDateMsg.innerHTML = '請選擇年份'
    } else if (cardCvc.value === '') {
      isPass = false
      cardCvcMsg.innerHTML = 'CVC不得為空'
    }
    // 正規表達式，判斷只能數字或英文
    const numRegExp = /^[0-9]*$/
    const textRegExp = /^[a-zA-Z]*$/
    if (!numRegExp.test(cardNumber.value)) {
      isPass = false
      cardNumberMsg.innerHTML = '卡號必須為數字'
    } else if (!numRegExp.test(cardCvc.value)) {
      isPass = false
      cardCvcMsg.innerHTML = 'CVC必須為數字'
    } else if (!textRegExp.test(cardName.value)) {
      isPass = false
      cardNameMsg.innerHTML = '姓名必須為英文'
    }
    // 長度判斷
    if (cardNumber.value.length !== 16) {
      isPass = false
      cardNumberMsg.innerHTML = '卡號須為16碼'
    } else if ((cardName.value.length > 12) | (cardName.value.length < 3)) {
      isPass = false
      cardNameMsg.innerHTML = '姓名長度需在3~12碼'
    } else if (cardCvc.value.length !== 3) {
      isPass = false
      cardCvcMsg.innerHTML = 'CVC長度為3碼'
    }

    // 資料驗證判斷OK
    // => 將所有訂單需要的資料傳後端，新增進SQL
    // => 清除localStorage，避免重複使用
    if (isPass) {
      // 存放 FormData的資料
      let orderData = new FormData()
      // 存放用戶資料
      orderData.append('addUser', storage.getItem('addUser'))

      // 取得localStorage的項目清單
      let itemString = storage.getItem('addItemList')

      // 分割localStorage的項目清單=>["1","2",""]，要刪除最後一筆
      let items = itemString.split(' |')
      items.pop()

      // 建立空白陣列，存放localStorage的商品資料
      let itemsDetail = []
      for (let i = 0; i < items.length; i++) {
        itemsDetail.push(JSON.parse(storage.getItem(items[i])))
      }

      // 將itemsDetail資料存入orderData
      orderData.append('addItemList', JSON.stringify(itemsDetail))

      // 清除localStorage的資料=>addItemList | addUser | 各產品
      for (let i = 0; i < items.length; i++) {
        storage.removeItem(items[i])
      }
      storage.removeItem('addItemList')
      storage.removeItem('addUser')

      fetch(`http://localhost:3001/Sales/api/orderUser`, {
        method: 'post',
        body: orderData,
      })
        .then((r) => r.json())
        .then((obj) => {
          console.log(obj)
        })
      // fetch(`http://localhost:3001/Sales/api/mail`, {
      //   method: 'post',
      //   body: orderData,
      // })
      //   .then((r) => r.json())
      //   .then((obj) => {
      //     console.log(obj)
      //   })

      Navigate('../Sales/Cart4')
    }
  }

  return (
    <>
      <LoginNav />
      <Processbar step="3" />
      {/* 信用卡 */}
      {/* 卡面 */}
      <div className={Style.creditCard}>
        <div className="rccs__card  rccs__card--unknown">
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
        </div>

        {/* 輸入欄 */}
        <section className={Style.ttttt}>
          <form className={Style.card} name="card">
            {/* 卡號 */}
            <div>
              <label htmlFor="cardNumber">信用卡卡號 : </label>
              <input
                id="cardNumber"
                type="tel"
                className="form-control"
                value={number}
                name="number"
                onChange={(e) => {
                  SetNumber(e.target.value)
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
              <div className={Style.warning} id="cardNumberMsg"></div>
            </div>
            {/* 持卡者姓名 */}
            <div>
              <label htmlFor="cardName">持卡者姓名 : </label>
              <input
                id="cardName"
                type="text"
                className="form-control"
                value={name}
                name="name"
                onChange={(e) => {
                  SetName(e.target.value)
                }}
                onFocus={(e) => SetFocus(e.target.name)}
                required
              ></input>
              <div className={Style.warning} id="cardNameMsg"></div>
            </div>
            {/* 到期日期 */}
            <div>
              <label htmlFor="month">有效截止月 / 年 : </label>
              <select
                className={Style.date}
                id="cardMon"
                name="expiry"
                onChange={handleDate}
              >
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
              <select id="cardYear" name="expiry" onChange={handleExpiry}>
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
              <div className={Style.warning} id="cardDateMsg"></div>
            </div>
            {/* 驗證碼 */}
            <div>
              <label htmlFor="cardCvc">後三碼 : </label>
              <input
                id="cardCvc"
                type="tel"
                name="cvc"
                value={cvc}
                onChange={(e) => {
                  SetCvc(e.target.value)
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
              <div className={Style.warning} id="cardCvcMsg"></div>
            </div>
          </form>
        </section>
        {/* 按鈕 */}
        <div className={Style.checkButton}>
          <button
            className={Style.button2}
            onClick={() => {
              // 回首頁
              Navigate('../Sales/Cart2')
            }}
          >
            回上頁
          </button>
          <button
            className={Style.button1}
            onClick={() => {
              // 做驗證，成功就跳頁 & 新增資料庫
              checkForm()
            }}
          >
            確認付款
          </button>
        </div>
      </div>
    </>
  )
}
export default Cart3
