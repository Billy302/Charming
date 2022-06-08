import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Style from './Product.module.css'
import Card from '../Card/Card'
import Pagination from '../../../Sales/Components/Pagination/Pagination'
import { FaBorderAll } from 'react-icons/fa'

function MyProduct() {
  const [products, setProducts] = useState([])
  const [totalPage, setTotalPage] = useState([])

  // 排序
  const [selectedValue, setSelectedValue] = useState('')
  const sortOptions = [
    '價格低->高',
    '價格高->低',
    '售出筆數低->高',
    '售出筆數高->低',
  ]
  const sortValue = {
    '價格低->高': '&order=price&sort=asc',
    '價格高->低': '&order=price&sort=desc',
    '售出筆數低->高': '&order=sell_count&sort=asc',
    '售出筆數高->低': '&order=sell_count&sort=desc',
  }
  // 取得當前網址資訊
  const location = useLocation()
  // 引用useNavigate套件
  let navigate = useNavigate()
  // 判斷網址內是否包含sort欄位 | order欄位
  const searchParams = new URLSearchParams(location.search)
  let nowSort = searchParams.get('sort') ? searchParams.get('sort') : ''
  let nowOrder = searchParams.get('order') ? searchParams.get('order') : ''
  let nowID = localStorage.getItem('id')

  function goPath(value) {
    if (nowSort) {
      navigate(
        `../${
          location.pathname +
          location.search.replace(
            `&order=${nowOrder}&sort=${nowSort}`,
            `${value}`
          )
        }`
      )
    } else {
      navigate(`../${location.pathname + location.search + value}`)
    }
  }
  const fetchProducts = async () => {
    const response = await fetch(
      `http://localhost:3001/Sales/api/product${location.search}&id=${nowID}`
    )
    const data = await response.json()
    //測試
    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setProducts(data[0])
    setTotalPage(data[2])
  }

  // didMount
  useEffect(() => {
    fetchProducts()
  }, [location.search, selectedValue])

  return (
    <div className={Style.product}>
      {/* 排序 */}
      <div className={Style.order} id="select">
        <label htmlFor="sort">
          <FaBorderAll />
        </label>
        <select
          name="sort"
          id="sort"
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(sortOptions[e.target.value])
            goPath(sortValue[e.target.value])
          }}
        >
          {sortOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </div>

      <div className={Style.arrangement}>
        <ul className={Style.cardFlex}>
          {products.map((r) => (
            <div key={r.ID}>
              <Card
                userID={nowID}
                ID={r.ID}
                author_name={r.author_name}
                product_name={r['product_name']}
                product_copy={r.product_copy}
                price={r.price}
                pic_path={r.pic_path}
                sell_count={r.sell_count}
                love={r.love}
              />
            </div>
          ))}
        </ul>
      </div>
      <Pagination totalPages={totalPage} />
    </div>
  )
}
export default MyProduct
