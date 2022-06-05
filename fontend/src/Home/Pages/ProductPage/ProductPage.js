import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './ProductPage.module.css'
//component
import LoginNav from '../../Components/LoginNav/LoginNav'
// icon
import { MdLocationOn, MdCalendarToday } from 'react-icons/md'
import UnloginNav from '../../Components/UnloginNav/UnloginNav'

function ProductPage() {
  const [products, setProducts] = useState({
    pic_path: '',
  })

  // 連線檔
  const catchUserId = useParams()
  const UserId = catchUserId.UserId ? catchUserId.UserId : ''
  const fetchProducts = async () => {
    // 向遠端伺服器get資料 http://localhost:3001/Sales/api/product?id=1
    // 判斷是遊客還是會員
    if (UserId) {
      console.log('t')
      const response = await fetch(
        //取單一商品資料
        `http://localhost:3001/Sales/api/product/${catchUserId.UserId}/${catchUserId.ProductID}`
      )
      const data = await response.json()
      setProducts(data[0])
    } else {
      console.log('r')
      const response = await fetch(
        //取單一商品資料
        `http://localhost:3001/Sales/api/product/${catchUserId.ProductID}`
      )
      const data = await response.json()
      setProducts(data[0])
    }
  }
  // console.log(products);
  // didMount
  useEffect(() => {
    fetchProducts()
  }, [])

  const a = products.pic_path.split(' ')

  // 小圖
  let p = []
  for (let i = 0; i < a.length; i++) {
    p.push(
      <button className={style.smallImg}>
        <img
          className={style.smallImg2}
          alt="圖片顯示失敗"
          src={`http://localhost:3000/Home/ProductImg/${a[i]}`}
        />
      </button>
    )
  }
  // new
  let storage = localStorage

  function additem() {
    if (storage[products.ID]) {
      alert('已成功加入購物車')
    } else {
      if (storage['addItemList'] == null) {
        storage['addItemList'] = `${products.ID} |`
      } else {
        storage['addItemList'] += `${products.ID} |`
      }
      const productCart = {
        ID: products.ID,
        pic_path: a[0],
        author_name: products.author_name,
        product_name: products.product_name,
        price: products.price,
      }
      storage.setItem(products.ID, JSON.stringify(productCart))
    }
  }
  return (
    <>
      {UserId ? <LoginNav /> : <UnloginNav />}
      {/* 商品名稱 */}
      <section className={style.ProductPage}>
        {/* 圖片放置區 */}

        <div className={style.displayFlex}>
          <img
            className={style.bigImg}
            alt=""
            src={`http://localhost:3000/Home/ProductImg/${a[0]}`}
          />
          <div>{p}</div>
          {/* 價格，數量，加入購物車按鈕，收藏按鈕 */}
          <div className={style.priceDiv}>
            <h3>
              {products.product_name}
              <div className={style.displayFlex}>
                <p className={style.littleInformation}>
                  刊登時間：{products.create_time}
                </p>
                <p className={style.littleInformation}>
                  已售出：{products.sell_count}
                </p>
              </div>
            </h3>
            <p className={style.price}>${products.price}</p>
            <div className={style.displayFlex}>
              <div>
                <p className={style.littleInformation}>檔案格式：</p>
                <pre className={style.littleInformation}>
                  {products.file_type}
                </pre>
              </div>
              <div className={style.buyNumber}>
                <button onClick={additem} className={style.shoppingCar}>
                  加入購物車
                </button>
              </div>
            </div>

            {/* 關於設計師 */}
            <div className={style.ProductTitle}>關於設計師</div>
            <div className={style.displaySpaceAround}>
              <img
                className={style.designerPicture}
                alt=""
                src={require('../../Assets/charming_logo.png')}
              />
              <div>
                <p className={style.aboutDesigner}>{products.author_name}</p>
                <div className={style.icon}>
                  <div>
                    <MdLocationOn />
                    所在地
                  </div>
                  <div>
                    <MdCalendarToday />
                    加入時間
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 商品簡介 */}
        <article className={style.ProductText}>
          <div className={style.ProductTitle}>商品介紹</div>
          <pre>{products.product_copy}</pre>
        </article>
      </section>
    </>
  )
}
export default ProductPage
