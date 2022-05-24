// 功能：讀取購物車，Session productList(key)  / productID(key) / order(key)
// 跳頁路徑未填
import React from 'react'
import { useHistory } from 'react-router-dom'

import Processbar from '../../Components/ProcessBar/ProcessBar'
import data from '../../Json/Order.json'

import './Cart.css'

function Cart4() {
  let history = useHistory()
  const productData = data[1]
  console.log(data)
  // console.log(data[0][0].ID)
  // console.log(productData)
  return (
    <>
      <h3>購物車-訂單 Page(cart4)</h3>
      <Processbar step="3" />
      <div className="">
        <h2 className="successText">付款成功</h2>
        <div className="block">
          <p className="blockText">訂單ID</p>
          <p className="blockTextInput">{data[0][0].ID}</p>
        </div>
        <div className="block">
          <p className="blockText">成立日期</p>
          <p className="blockTextInput">{data[0][0].create_time}</p>
        </div>
        <div className="block">
          <p className="blockText">姓名</p>
          <p className="blockTextInput">{data[0][0].username}</p>
        </div>
        <div className="block">
          <p className="blockText">聯絡方式</p>
          <p className="blockTextInput">{data[0][0].mobile}</p>
        </div>
        <div className="block">
          <p className="blockText">總價</p>
          <p className="blockTextInput">{data[0][0].total_price}</p>
        </div>
      </div>
      <div className="tableScroll">
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
            {productData.map((v, i) => {
              return (
                <tr key={i} className="blockPicture">
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img src={require(`../../Picture/${v.pic_path}`)} alt="a" />
                  </td>
                  <td>{v.author_name}</td>
                  <td>{v.product_name}</td>
                  <td>{v.price}</td>
                  <td>
                    <button className="blockButton">刪除</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <button
        className="button"
        onClick={() => {
          // 回首頁
          history.push('路徑')
        }}
      >
        完成
      </button>
    </>
  )
}
export default Cart4
