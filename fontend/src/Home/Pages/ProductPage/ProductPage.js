import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
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
      const response = await fetch(
        //取單一商品資料
        `http://localhost:3001/Sales/api/product/${catchUserId.UserId}/${catchUserId.ProductID}`
      )
      let data = await response.json()
      let dt = new Date(data[0]['create_time'])
      data[0]['create_time'] = dt.toLocaleString()
      console.log(data[0])
      setProducts(data[0])
    } else {
      const response = await fetch(
        //取單一商品資料
        `http://localhost:3001/Sales/api/product/${catchUserId.ProductID}`
      )
      let data = await response.json()
      let dt = new Date(data[0]['create_time'])
      data[0]['create_time'] = dt.toLocaleString()
      console.log(data[0])
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
  let picture = []
  for (let i = 0; i < a.length; i++) {
    const s = style['bigImg' + i]
    picture.push(
      <button className={style.ProductImg}>
        <img
          className={`${s} ${style.bigImg}`}
          alt="圖片顯示失敗"
          src={`http://localhost:3000/Home/ProductImg/${a[i]}`}
        />
        <img
          className={style.smallImg}
          alt="圖片顯示失敗"
          src={`http://localhost:3000/Home/ProductImg/${a[i]}`}
        />
      </button>
    )
  }
  // new
  let storage = localStorage

  function additem() {
    if (localStorage.getItem('auth') == 'true') {
      if (storage[products.ID]) {
        Swal.fire({
          icon: 'warning',
          title: 'warning!',
          text: '此商品已經加入購物車',
        })
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
        document.getElementById('cartMsg').innerHTML = '已加入購物車'
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'warning!',
        text: '請先登入會員',
      })
    }
  }

  return (
    <>
      {localStorage.getItem('auth') == 'true' ? <LoginNav /> : <UnloginNav />}
      {/* 商品名稱 */}
      <section className={style.ProductPage}>
        <div className={style.displayFlex}>
          {/*———————————————圖片放置區————————————————  */}
          <div className={style.phonePicture}>{picture}</div>
          {/* ——————————————————————————————————————— */}

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
              <div className={style.buyNumber}>
                <button onClick={additem} className={style.shoppingCar}>
                  {storage[products.ID] ? (
                    <p id="cartMsg">已加入購物車</p>
                  ) : (
                    <p id="cartMsg">加入購物車</p>
                  )}
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
          <pre dangerouslySetInnerHTML={{ __html: products.product_copy }} />
        </article>
      </section>
    </>
  )
}
export default ProductPage
