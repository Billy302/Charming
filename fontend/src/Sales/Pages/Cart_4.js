// 功能：讀取購物車，Session productList(key)  / productID(key) / order(key)

import React from 'react'
import Processbar from '../Components/Processbar/Processbar'
import data from '../Json/Cart.json'
import './Cart.css'
function Cart4() {
  return (
    <>
      <h3>購物車-訂單 Page</h3>
      <Processbar step="3" />
      <></>
      <table>
        <thead>
          <tr>
            <th scope="col" className="blockSizeS">
              No
            </th>
            <th scope="col" className="blockSizeL">
              Item Picture
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
            <th scope="col" className="blockSizeM"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id} className="blockPicture">
                <th scope="row">{v.id}</th>
                <td>
                  <img src={require(`../Picture/${v.pic}`)} alt="a" />
                </td>
                <td>{v.username}</td>
                <td>{v.itemname}</td>
                <td>{v.price}</td>
                <td>
                  <button className="blockButton">刪除</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button
        className="button"
        onClick={() => {
          // 回首頁
          // history.push('路徑')
        }}
      >
        下一步
      </button>
    </>
  )
}
export default Cart4
