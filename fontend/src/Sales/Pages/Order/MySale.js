// 取得商家所有產品的銷售紀錄 TO B
// http://localhost:3000/BtocPage/MySale?page=1

import React, { useEffect, useState } from 'react'
import Style from './Order.module.css'
// component
import Pagination from '../../Components/Pagination/Pagination'
import NoSale from './NoSale'
import { useLocation } from 'react-router-dom'
import ProductBtobButton from '../../../Home/Components/ProductBtobButton/ProductBtobButton'
import Banner from '../../../Blog/Components/MyProductHeader/Banner'
import PersonalInfo from '../../../Blog/Components/MyProductHeader/PersonalInfo'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'

function MySale() {
  const location = useLocation()

  const [products, setProducts] = useState([])
  const [totalPage, setTotalPage] = useState([])

  const searchParams = new URLSearchParams(location.search)
  let currentpage = searchParams.get('page')

  const fetchProducts = async () => {
    const response = await fetch(
      `http://localhost:3001/Sales/api/orderShop?id=${localStorage.getItem(
        'id'
      )}&page=${currentpage}`
    )
    const data = await response.json()

    for (let i = 0; i < data[0].length; i++) {
      let dt = new Date(data[0][i]['create_time'])
      data[0][i]['create_time'] = dt.toLocaleString().substring(0, 8)
    }
    setProducts(data[0])
    setTotalPage(data[2])
  }

  // 模擬componentDidMount
  useEffect(() => {
    fetchProducts()
  }, [currentpage])

  return (
    <>
      <LoginNav />
      <Banner />
      <PersonalInfo />
      <section className={Style.flex}>
        <ProductBtobButton />
        <section>
          {products == '' ? (
            <NoSale />
          ) : (
            <table className={Style.shoppingListSS}>
              <thead className={Style.listTitle}>
                <tr>
                  <th scope="col" className={Style.blockSizeM}>
                    訂單編號
                  </th>
                  <th scope="col" className={Style.blockSizeXL}>
                    產品名稱
                  </th>
                  <th scope="col" className={Style.blockSizeM}>
                    產品價格
                  </th>
                  <th scope="col" className={Style.blockSizeL}>
                    訂單日期
                  </th>
                </tr>
              </thead>
              {/* ——————————————接資料處————————————————— */}

              <tbody className={`${Style.phoneCart} ${Style.listItem}`}>
                {products.map((v, i) => {
                  const { ID, product_name, create_time, price } = v
                  return (
                    <tr className={Style.listItem2}>
                      <th className={Style.blockSizeM} scope="row">
                        {ID}
                      </th>
                      <td className={Style.blockSizeXL}>{product_name}</td>
                      <td className={`${Style.blockSizeS} ${Style.price}`}>
                        {price}
                      </td>
                      <td className={Style.blockSizeL}>{create_time}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </section>
      </section>
      <Pagination totalPages={totalPage} />
    </>
  )
}
export default MySale
