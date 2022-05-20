// reactjs-credit-card 引入失敗
// 功能：新增訂單。Method: POST。URL: /api/order
import React from 'react'
import Processbar from '../../Components/Processbar/Processbar'
import CreditCard from '../../Components/creditCard/creditCard'
import { HunelProvider, HunelCreditCard } from 'reactjs-credit-card'

const hunel = new HunelCreditCard()
function Cart3() {
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
