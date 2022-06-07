import React, { useEffect, useState } from 'react'
import LoginNav from '../../Components/LoginNav/LoginNav'
import style from './AddProduct.module.css'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { BsCaretDownFill } from 'react-icons/bs'

function AddProduct() {
  const [img1, setImg1] = useState()
  const [productName, setProductName] = useState('')
  const [productCopy, setProductCopy] = useState()
  const [productPrice, setProductPrice] = useState('')
  const [productType, setProductType] = useState('101')
  // const [picPath, setPicPath] = useState('')
  let picPath = ''

  // 新建formData物件，用於處理整個form
  const formData = new FormData()
  // 存放圖片路徑 (string)
  // 處理圖片，可以多張，不會保留上次按的圖片
  function fileChange(e) {
    for (let i = 0; i < e.target.files.length; i++) {
      let file = document.getElementById(`theFile1`).files
      let image = document.getElementById(`image${i + 1}`)
      let readFile = new FileReader()
      readFile.readAsDataURL(file[i])
      readFile.addEventListener('load', function () {
        image.src = readFile.result
        image.style.maxWidth = '500px'
        image.style.maxHeight = '500px'
      })
    }
    for (let j = 0; j < 5 - e.target.files.length; j++) {
      let image = document.getElementById(`image${5 - j}`)
      image.removeAttribute('src')
    }
  }

  const fetchProducts = async () => {
    // 新建formDataImg物件，用於處理照片
    const formDataImg = new FormData()
    // 將每張圖片都加入formData的theFile1值內
    for (let i = 0; i < img1.length; i++) {
      formDataImg.append('theFile1', img1[i])
    }
    // 與後端API取值，取新圖片的資訊
    const response = await fetch('http://localhost:3001/Sales/api/upload', {
      method: 'POST',
      body: formDataImg,
    })
    const data = await response.json()
    // 取得新圖片的資訊後，另組成字串存入formData
    for (let i = 0; i < data.length; i++) {
      picPath += data[i]['filename'] + ' '
    }
    // 準備新增商品資料進SQL
    formData.append('picPath', picPath)
    formData.append('productName', productName)
    formData.append('authorName', 'ishurik21')
    formData.append('productCopy', productCopy)
    formData.append('price', productPrice)
    formData.append('typeID', productType)
    fetch('http://localhost:3001/Sales/api/product', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  function getfetch(e) {
    // 取消form按鈕的預設動作
    let isPass = true
    e.preventDefault()

    if (isPass) {
      fetchProducts()
      // formData.append('productName', productName)
      // formData.append('authorName', 'ishurik21')
      // formData.append('productCopy', productCopy)
      // formData.append('price', productPrice)
      // formData.append('typeID', productType)
      // fetch('http://localhost:3001/Sales/api/product', {
      //   method: 'POST',
      //   body: formData,
      // })
      //   .then((response) => response.json())
      //   .then((result) => {
      //     console.log('Success:', result)
      //   })
      //   .catch((error) => {
      //     console.error('Error:', error)
      //   })
    }
  }
  return (
    <>
      <LoginNav />
      <section className={style.addProduct}>
        <form onSubmit={getfetch}>
          {/* 圖片 */}
          <div className={style.pictureField}>
            <p className={style.title}>新增圖片</p>
            <label htmlFor="theFile1" required>
              <IoIosAddCircleOutline className={style.icon} />
              {/* 第一張 預覽要顯示的圖片 */}
              <img className={style.smallImg2} id="image1" alt="" />
            </label>
            <label htmlFor="theFile1">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 第二張 預覽要顯示的圖片 */}
              <img className={style.smallImg2} id="image2" alt="" />
            </label>
            <label htmlFor="theFile1">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 第三張 預覽要顯示的圖片 */}
              <img className={style.smallImg2} id="image3" alt="" />
            </label>
            <label htmlFor="theFile1">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 第四張 預覽要顯示的圖片 */}
              <img className={style.smallImg2} id="image4" alt="" />
            </label>
            <label htmlFor="theFile1">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 第五張 預覽要顯示的圖片 */}
              <img className={style.smallImg2} id="image5" alt="" />
            </label>
            <input
              id="theFile1"
              name="theFile1"
              className={style.btn}
              type="file"
              onChange={(e) => {
                setImg1(e.target.files)
                fileChange(e)
              }}
              multiple="multiple"
            ></input>
          </div>
          {/* 商品名稱 */}
          <div className={style.pictureField}>
            <p className={style.title}>商品名稱</p>
            <input
              id="theName"
              name="theName"
              className={style.inputTextStyle}
              type="text"
              value={productName}
              placeholder="請輸入商品名稱"
              onChange={(e) => {
                setProductName(e.target.value)
              }}
              required
            ></input>
          </div>
          {/* 商品文案 */}
          <div className={style.pictureField}>
            <p className={style.title}>描述文案</p>
            <textarea
              id="theCopy"
              name="theCopy"
              className={style.inputArticleStyle}
              placeholder="請輸入商品描述"
              value={productCopy}
              onChange={(e) => {
                setProductCopy(e.target.value)
              }}
              required
            ></textarea>
          </div>

          <div className={style.itemStyle}>
            {/* 商品價格 */}
            <div>
              <div className={style.pictureField}>
                <p className={style.title}>商品價格</p>
                <input
                  id="thePrice"
                  name="thePrice"
                  className={style.inputTextStyle}
                  type="text"
                  placeholder="商品價格"
                  value={productPrice}
                  onChange={(e) => {
                    setProductPrice(e.target.value)
                  }}
                  required
                ></input>
              </div>
              <div className={style.pictureField}>
                <p className={style.title}>商品類別</p>
                <select
                  className={style.theSelect}
                  id="theType"
                  name="theType"
                  value={productType}
                  onChange={(e) => {
                    setProductType(e.target.value)
                  }}
                >
                  <option value={'101'}>攝影</option>
                  <option value={'102'}>NFT</option>
                  <option value={'103'}>UI/UX</option>
                  <option value={'104'}>報告/教材</option>
                  <option value={'105'}>Logo/插圖</option>
                </select>
                <BsCaretDownFill className={style.iconSelect} />
              </div>
            </div>
          </div>
          <div className={style.submitButtonField}>
            <input type="submit" value="上架" className={style.submitButton} />
            <a href="" className={style.submitButton}>
              取消
            </a>
          </div>
        </form>
      </section>
    </>
  )
}
export default AddProduct
