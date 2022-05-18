// reactjs-credit-card 引入失敗
import React from 'react'
import Processbar from '../Components/Processbar/Processbar'
import CreditCard from '../Components/creditCard/creditCard'
import { HunelProvider, HunelCreditCard } from 'reactjs-credit-card';

const hunel = new HunelCreditCard();
function Cart3() {
  return (
    <>
      <Processbar step="3" />
      <h3>購物車-結帳 Page</h3>
      <HunelProvider config={hunel}>
        <CreditCard />
      </HunelProvider>
  </>
  )
}
export default Cart3
