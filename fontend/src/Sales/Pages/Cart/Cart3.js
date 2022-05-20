// reactjs-credit-card 引入失敗
// 功能：新增訂單。Method: POST。URL: /api/order
// 跳頁路徑未填

import React from 'react'
import Processbar from '../../Components/ProcessBar/ProcessBar'
import CreditCard from '../../Components/CreditCard/CreditCard'
import { HunelProvider, HunelCreditCard } from 'reactjs-credit-card'
import { useHistory } from 'react-router-dom'

const hunel = new HunelCreditCard()
function Cart3() {
  let history = useHistory()
  return (
    <>
      <Processbar step="3" />
      <h3>購物車-結帳 Page</h3>
      <HunelProvider config={hunel}>
        <CreditCard />
      </HunelProvider>
      <button
        className="button"
        onClick={() => {
          // 到下一頁
          // history.push('路徑')
          // 新增訂單
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
    </>
  )
}
export default Cart3
