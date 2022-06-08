// http://localhost:3000/Sales/Cart4
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import Success from './Success'
import Style from './Cart.module.css'
import Processbar from '../../Components/Processbar/Processbar'
import data from '../../Json/Order.json'
import { GiSombrero } from 'react-icons/gi'

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
