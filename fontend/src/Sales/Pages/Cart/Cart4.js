// 功能：讀取購物車，Session productList(key)  / productID(key) / order(key)

import React from 'react'
import Processbar from '../../Components/Processbar/Processbar'
import data from '../../Json/Order.json'
import './Cart.css'

function Cart4() {
  const productData = data[1]
  console.log(data)
  console.log(productData)
  return (
    <>
      <h3>購物車-訂單 Page</h3>
      <Processbar step="3" />
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
                  <th scope="row">{i}</th>
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
          // history.push('路徑')
        }}
      >
        完成
      </button>
    </>
  )
}
export default Cart4
