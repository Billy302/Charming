import React, { useState } from 'react'
import LoginNav from '../../Components/LoginNav/LoginNav'
import style from './AddProduct.module.css'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { BsCaretDownFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import fileImg from '../AddProduct/fileblock.jpg'

// Quill.js
import ReactQuill from 'react-quill'
import EditorToolbar, {
  modules,
  formats,
} from '../../Components/EditorTool/EditorToolbar'
import 'react-quill/dist/quill.snow.css'

function AddProduct() {
  const navigator = useNavigate()
  const [img1, setImg1] = useState()
  const [productName, setProductName] = useState('')
  // const [productCopy, setProductCopy] = useState()
  const [productPrice, setProductPrice] = useState('')
  const [productType, setProductType] = useState('101')
  let picPath = ''

  // Quill.js
  const [state, setState] = React.useState({ value: null })
  const handleChange = (value) => {
    setState({ value })
  }

  const picMsg = document.getElementById('thePicMsg')
  const nameMsg = document.getElementById('theNameMsg')
  const priceMsg = document.getElementById('thePriceMsg')

  // 新建formData物件，用於處理整個form
  const formData = new FormData()
  // 存放圖片路徑 (string)
  // 處理圖片，可以多張，不會保留上次按的圖片
  function fileChange(e) {
    if (e.target.files.length < 6) {
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
        image.src = fileImg
      }
    } else {
      alert('抱歉，我們只能存五筆')
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
    if (data.length > 1) {
      for (let i = 0; i < data.length - 1; i++) {
        picPath += data[i]['filename'] + ' '
      }
      // 最後一筆，不用加空白做區隔
      picPath += data[data.length - 1]['filename']
    } else {
      picPath = data[0]['filename']
    }
    // 準備新增商品資料進SQL
    formData.set('picPath', picPath)
    formData.set('productName', productName)
    formData.set('authorName', localStorage.getItem('name'))
    formData.set('productCopy', state.value)
    // formData.append('productCopy', productCopy)
    formData.set('price', productPrice)
    formData.set('typeID', productType)

    fetch('http://localhost:3001/Sales/api/product', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        response.json()
        console.log(response)
      })
      .then((result) => {
        navigator('../shopcenter/myproduct?page=1')
        Swal.fire({
          icon: 'success',
          title: '新增商品',
          text: '新增成功',
        })
        // alert('新增商品成功')
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: '新增商品',
          text: '新增失敗',
        })
      })
  }

  function getfetch(e) {
    // 取消form按鈕的預設動作
    let isPass = true
    e.preventDefault()

    // 先清空訊息
    picMsg.innerHTML = ''
    nameMsg.innerHTML = ''
    priceMsg.innerHTML = ''

    // 正規表達式，判斷只能數字或英文
    const numRegExp = /^[0-9]*$/
    if (!numRegExp.test(productPrice)) {
      isPass = false
      priceMsg.innerHTML = '價格必須為數字'
    }
    if (productName.length > 50) {
      isPass = false
      nameMsg.innerHTML = '商品名稱需小於50字'
    }
    if (img1.length === 0) {
      isPass = false
      picMsg.innerHTML = '圖片尚未選取'
    }
    if (isPass) {
      fetchProducts()
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
              <img
                className={style.smallImg}
                id="image1"
                src={fileImg}
                alt=""
              />
            </label>
            <label htmlFor="theFile1">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 第二張 預覽要顯示的圖片 */}
              <img
                className={style.smallImg}
                id="image2"
                src={fileImg}
                alt=""
              />
            </label>
            <label htmlFor="theFile1">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 第三張 預覽要顯示的圖片 */}
              <img
                className={style.smallImg}
                id="image3"
                src={fileImg}
                alt=""
              />
            </label>
            <label htmlFor="theFile1">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 第四張 預覽要顯示的圖片 */}
              <img
                className={style.smallImg}
                id="image4"
                src={fileImg}
                alt=""
              />
            </label>
            <label htmlFor="theFile1">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 第五張 預覽要顯示的圖片 */}
              <img
                className={style.smallImg}
                id="image5"
                src={fileImg}
                alt=""
              />
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
            <div id="thePicMsg"></div>
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
            <div id="theNameMsg"></div>
          </div>
          {/* 商品文案 */}

          <div className={style.pictureField}>
            <p className={style.title}>描述文案</p>
            <div className={style.textTool}>
              <EditorToolbar />
              <ReactQuill
                className="test"
                theme="snow"
                value={state.value}
                onChange={handleChange}
                placeholder={'請輸入商品內容...'}
                modules={modules}
                formats={formats}
              />
            </div>

            {/* <textarea
              id="theCopy"
              name="theCopy"
              className={style.inputArticleStyle}
              placeholder="請輸入商品描述"
              value={productCopy}
              onChange={(e) => {
                setProductCopy(e.target.value)
              }}
              required
            ></textarea> */}
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
                <div id="thePriceMsg"></div>
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
                  <option value={'101'}>NFT</option>
                  <option value={'102'}>UI/UX</option>
                  <option value={'103'}>書籍/翻譯</option>
                  <option value={'104'}>Logo</option>
                  <option value={'105'}>插圖</option>
                </select>
                <BsCaretDownFill className={style.iconSelect} />
              </div>
            </div>
          </div>
          <div className={style.submitButtonField}>
            <input type="submit" value="上架" className={style.submitButton} />
            <Link
              to="/shopcenter/myproduct?page=1"
              className={style.submitButton}
            >
              {' '}
              取消{' '}
            </Link>
          </div>
        </form>
      </section>
    </>
  )
}
export default AddProduct
