// http://localhost:3000/Sales/Cart4
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import Success from './Success'
import Style from './Cart.module.css'

function Cart4() {
  // 使用 useNavigate 套件
  let Navigate = useNavigate()
  let storage = localStorage

  return (
    <>
      <LoginNav />
      <Success />
      <div className={Style.checkButton}>
        <button
          className={Style.button1}
          onClick={() => {
            // 清除storage:addID
            storage.removeItem('addID')
            // 回首頁
            window.scrollTo(0, 0)
            Navigate('/')
          }}
        >
          完成
        </button>
      </div>
    </>
  )
}
export default Cart4
