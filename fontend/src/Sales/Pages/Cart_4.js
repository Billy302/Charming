// 功能：讀取購物車，Session productList(key)  / productID(key) / order(key)
// 功能：新增訂單。Method: POST。URL: /api/order
import React from 'react'
import Processbar from '../Components/Processbar/Processbar'
function Cart4() {
  return (
    //JSX
    <>
      <h3>購物車-訂單 Page</h3>
      <Processbar step="3" />
    </>
  )
}
export default Cart4
