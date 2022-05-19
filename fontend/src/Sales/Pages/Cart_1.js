// 未完成 功能：讀取購物車，Session productList(key)  / productID(key)
// 未完成 功能：刪除購物車，Session productList(key)  / productID(key)
// useHistory故障
// 先用JSON假資料取代

import React from 'react'
import Processbar from '../Components/Processbar/Processbar'
import data from '../Json/Cart.json'
import './Cart.css'
// import { useHistory } from 'react-router-dom'

function Cart1() {
  // let history = useHistory()
  return (
    <>
      <h3>購物車-總攬 Page</h3>
      <Processbar step="1" />
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
      <div>
        <button
          className="button"
          onClick={() => {
            // 到下一頁
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
export default Cart1
