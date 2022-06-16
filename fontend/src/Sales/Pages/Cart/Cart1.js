// http://localhost:3000/Sales/Cart1
import React, { useState } from 'react'
import Processbar from '../../Components/Processbar/Processbar'
import Cart from './Cart'
import Style from './Cart.module.css'
import { useNavigate } from 'react-router-dom'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import Swal from 'sweetalert2'

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
        <tr key={i + 1} className={Style.blockPicture} id={ID}>
          <td className={Style.blockSizeS} scope="row">
            {i + 1}
          </td>
          <td className={Style.blockSizeL}>
            <img
              className={Style.blockSizeM}
              alt="圖片無法顯示"
              src={`http://localhost:3000/Home/ProductImg/${pic_path}`}
            />
          </td>
          <td className={Style.blockSizeM}>{author_name}</td>
          <td className={Style.blockSizeXL}>{product_name}</td>
          <td className={`${Style.blockSizeM} ${Style.price}`}>
            {'$' + price}
          </td>
          <td className={Style.blockSizeM}>
            <button id={ID} onClick={deleteItem} className={Style.blockButton}>
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
      {/* 購物車為空時出現的畫面 */}
      {localStorage.getItem('addItemList') != null ? '' : <Cart />}
      {/* 進度條 */}
      {localStorage.getItem('addItemList') != null ? (
        <Processbar step="1" />
      ) : (
        ''
      )}
      {/* 表格 */}
      {localStorage.getItem('addItemList') != null ? (
        <table className={Style.shoppingList}>
          <thead className={Style.listTitle}>
            <tr>
              <th
                scope="col"
                className={`${Style.blockSizeS} ${Style.displayNone}`}
              >
                No.
              </th>
              <th scope="col" className={Style.blockSizeL}>
                產品圖
              </th>
              <th
                scope="col"
                className={`${Style.blockSizeM} ${Style.displayNone}`}
              >
                設計師
              </th>
              <th scope="col" className={Style.blockSizeXL}>
                品項
              </th>
              <th scope="col" className={Style.blockSizeM}>
                售價
              </th>
              <th scope="col" className={Style.blockSizeM}>
                刪除
              </th>
            </tr>
          </thead>
          <tbody className={Style.listItem}>{cartTable}</tbody>
        </table>
      ) : (
        ''
      )}
      {/* 按鈕 */}
      {localStorage.getItem('addItemList') != null ? (
        <div className={Style.checkButton}>
          <button
            className={Style.button2}
            onClick={() => {
              Navigate(`/Product?page=1`)
            }}
          >
            繼續選購
          </button>
          <button
            className={Style.button1}
            onClick={() => {
              // 到下一頁
              if (storage.getItem('addItemList')) {
                Navigate('../Sales/Cart2')
              } else {
                Swal.fire({
                  title: `Error!`,
                  text: '請選購商品',
                  icon: 'error',
                })
              }
            }}
          >
            開始結帳
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
export default Cart1
