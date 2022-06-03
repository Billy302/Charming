// http://localhost:3000/Sales/Cart1
import React from 'react'
import Processbar from '../../Components/ProcessBar/ProcessBar'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'

function Cart1() {
  // 使用 useNavigate 套件
  let Navigate = useNavigate()

  // 使用 localStorage WebAPI
  let storage = localStorage

  // 建立空白陣列，存放jsx語法
  let cartTable = []

  // 確認addItemList 是否有值
  if (storage.getItem('addItemList')) {
    // 取得localStorage的項目清單
    let itemString = storage.getItem('addItemList')

    // 分割localStorage的項目清單=>["1","2",""]，要刪除最後一筆
    let items = itemString.split(' |')
    items.pop()

    // 動態生成table的內容
    for (let i = 0; i < items.length; i++) {
      let { ID, author_name, pic_path, price, product_name } = JSON.parse(
        storage.getItem(items[i])
      )
      cartTable.push(
        <tr key={i + 1} className="blockPicture" id={ID}>
          <th scope="row">{i + 1}</th>
          <td>
            <img
              alt="圖片無法顯示"
              src={`http://localhost:3000/Home/ProductImg/${pic_path}`}
            />
          </td>
          <td>{author_name}</td>
          <td>{product_name}</td>
          <td>{price}</td>
          <td>
            <button id={ID} onClick={deleteItem} className="blockButton">
              刪除
            </button>
          </td>
        </tr>
      )
    }
  }

  // 刪除語法
  function deleteItem(e) {
    // 取得按鈕所在位置的ID
    let itemId = e.target.id
    // 移除localStorage中的資料
    storage.removeItem(itemId)
    storage['addItemList'] = storage['addItemList'].replace(`${itemId} |`, ``)
    // 清除按鈕所在位置的html語法
    document.getElementById(itemId).remove()
  }

  return (
    <>
      <LoginNav />
      <h3>購物車-總攬 Page</h3>
      {/* 進度條 */}
      <Processbar step="1" />
      {/* 表格 */}
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
        <tbody>{cartTable}</tbody>
      </table>
      {/* 按鈕 */}
      <div>
        <button
          className="button"
          onClick={() => {
            // 到下一頁
            if (storage.getItem('addItemList')) {
              Navigate('../Sales/Cart2')
            } else {
              alert('請選購商品')
            }
          }}
        >
          下一步
        </button>
        <button
          className="button"
          onClick={() => {
            Navigate('/')
          }}
        >
          回首頁
        </button>
      </div>
    </>
  )
}
export default Cart1
