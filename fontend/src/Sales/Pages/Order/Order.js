// 取得使用者訂單的詳細內容 TO C
// http://localhost:3000/BtobPage/Order/1

import React, { useEffect, useState } from 'react'
import Style from './Order.module.css'
import { Link, useParams } from 'react-router-dom'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'

function Order() {
  // 取得使用者id
  const params = useParams()
  const paramsID = params.id
  const user_ID = localStorage.getItem('id')
  const [products, setProducts] = useState([])

  const caseID = document.getElementById('caseID')
  const caseTime = document.getElementById('caseTime')
  const caseTotal = document.getElementById('caseTotal')

  const fetchProducts = async () => {
    const response = await fetch(
      `http://localhost:3001/Sales/api/orderUser/${user_ID}/${paramsID}`
    )
    const data = await response.json()
    // 只需要商品的第一張圖
    // 先取得全部圖名，進行切割
    let picFirst = data[0].pic_path.split(' ')
    for (let i = 0; i < data.length; i++) {
      // 將products的商品路徑改為新的路徑(只有第一張)
      data[i]['pic_path'] = picFirst[i]
    }
    // 對時間格式做處理
    for (let i = 0; i < data.length; i++) {
      let dt = new Date(data[i]['create_time'])
      data[i]['create_time'] = dt.toLocaleString().substring(0, 8)
    }
    setProducts(data)
  }
  // 模擬componentDidMount
  useEffect(() => {
    fetchProducts()
  }, [])

  let conponent = []
  if (products != '') {
    conponent.push(
      <hgroup className={Style.orderInfo}>
        <div>
          <p>訂單ID：</p>
          <p id="caseID">{products[0]['CaseID']}</p>
        </div>
        <div>
          <p>訂單創立時間：</p>
          <p id="caseTime">{products[0]['create_time']}</p>
        </div>
        <div>
          <p>訂單總價：</p>
          <p id="caseTotal" className={Style.price}>
            ${products[0]['total_price']}
          </p>
        </div>
      </hgroup>
    )
  }

  return (
    <>
      {/* <h3>To C -購買清單-細項 Page</h3> */}
      <LoginNav />
      {/* 上方選單 */}
      <nav className={Style.navLeft}>
        <Link
          to="/membercenter/account"
          className={`${Style.unactive} ${Style.link}`}
        >
          會員中心 <hr />
        </Link>
        <Link
          to="/membercenter/shoppinglist?page=1"
          className={`${Style.active} ${Style.link}`}
        >
          購買清單 <hr />
        </Link>
        <Link
          to="/membercenter/collection?page=1"
          className={`${Style.unactive} ${Style.link}`}
        >
          我的收藏 <hr />
          {/* user 追蹤的文章 */}
        </Link>
      </nav>
      <section className={Style.Orderflex}>
        {/* 上方資訊部分 */}
        {conponent}
        {/* 商品資訊部分 */}
        <table className={Style.shoppingListSS}>
          <thead className={Style.listTitle}>
            <tr>
              <th scope="col" className={Style.blockSizeL}>
                No.
              </th>
              <th scope="col" className={Style.blockSizeL}>
                商品圖
              </th>
              <th
                scope="col"
                className={`${Style.blockSizeL} ${Style.displayNone}`}
              >
                作者
              </th>
              <th scope="col" className={Style.blockSizeL}>
                品項名稱
              </th>
              <th scope="col" className={Style.blockSizeL}>
                商品價格
              </th>
            </tr>
          </thead>
          {/* ——————————————接資料處————————————————— */}

          <tbody className={`${Style.phoneCart} ${Style.listItem}`}>
            {products.map((v, i) => {
              const { productID, pic_path, author_name, product_name, price } =
                v
              return (
                <>
                  <tr className={Style.listItem2}>
                    <th className={Style.blockSizeL} scope="row">
                      {productID}
                    </th>
                    {/* 商品圖 */}
                    <td className={Style.blockSizeL}>
                      <img
                        className={Style.blockSizeS}
                        alt="圖片無法顯示"
                        src={`http://localhost:3000/Home/ProductImg/${pic_path}`}
                      />
                    </td>
                    <td className={`${Style.blockSizeL} ${Style.displayNone}`}>
                      {author_name}
                    </td>
                    <td className={Style.blockSizeL}>{product_name}</td>
                    <td className={`${Style.blockSizeL} ${Style.price}`}>
                      {price}
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>

        <div className={Style.turnBack}>
          {' '}
          <a href={`../shoppinglist?page=1`}>返回上一頁</a>
        </div>
      </section>
    </>
  )
}
export default Order
