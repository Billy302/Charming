import React, { useEffect, useState } from 'react'
import Style from './EditProduct.module.css'
import EditCard from '../EditCard/EditCard'
import Pagination from '../../../Sales/Components/Pagination/Pagination'

function EditProduct() {
  const [products, setProducts] = useState([])
  const [totalPage, setTotalPage] = useState([])

  // 抓取網址中的id

  let nowSort = localStorage.getItem('id')

  const fetchProducts = async () => {
    //向遠端伺服器get資料 http://localhost:3001/Sales/api/productShop?id=2
    const response = await fetch(
      `http://localhost:3001/Sales/api/productShop?id=${nowSort}`
    )
    const data = await response.json()
    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setProducts(data[0])
    setTotalPage(data[2])
  }

  // didMount
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <div className={Style.arrangement}>
        <ul className={Style.cardFlex}>
          {products.map((r) => (
            <div key={r.ID}>
              <EditCard
                userID={nowSort}
                ID={r.ID}
                author_name={r.author_name}
                product_name={r['product_name']}
                product_copy={r.product_copy}
                price={r.price}
                pic_path={r.pic_path}
                sell_count={r.sell_count}
              />
            </div>
          ))}
        </ul>
      <Pagination totalPages={totalPage} />
      </div>
    </>
  )
}
export default EditProduct
