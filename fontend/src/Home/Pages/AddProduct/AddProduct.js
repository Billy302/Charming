import React, { useEffect, useState } from 'react'
import LoginNav from '../../Components/LoginNav/LoginNav'
import style from './AddProduct.module.css'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { BsCaretDownFill } from 'react-icons/bs'

function EditProduct() {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    //向遠端伺服器get資料 http://localhost:3001/Sales/api/product?id=1
    const response = await fetch('http://localhost:3001/Sales/api/product?id=1')
    const data = await response.json()
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setProducts(data)
    console.log(data[0][1])
  }

  // didMount
  useEffect(() => {
    fetchProducts()
    console.log(products)
  }, [])

  const doFirst = () => {
    // 先跟 HTML 畫面產生關聯，再建事件聆聽功能
    document.getElementById('theFile').onchange = fileChange
  }
  const fileChange = () => {
    let file = document.getElementById('theFile').files[0]
    let image = document.getElementById('image').files[0]
    let readFile = new FileReader()
    readFile.readAsDataURL(file)
    readFile.addEventListener('load', function () {
      image.src = readFile.result
      image.style.maxWidth = '500px'
      image.style.maxHeight = '500px'
    })
  }
  window.addEventListener('load', doFirst)

  // 上傳照片-老師的：
  // router.get('/api/upload',(req,res)=>{
  //   res.render('register',{ title: 'Ajax POST Demo' })
  // })
  // 上傳照片-我們的：
  // sales.post(
  //   "/api/upload",
  //   upload.array("uploadedFiles", 5),
  //   async (req, res, next) => {
  //     res.send(JSON.stringify(req.files));
  //   }
  // );
  return (
    <>
      <LoginNav />
      <section className={style.addProduct}>
        <form
          name="form1"
          action="/action_page.php"
          enctype="multipart/form-data"
          method="post"
          onSubmit="checkForm(); return false;"
        >
          <div className={style.pictureField}>
            <p className={style.title}>新增圖片</p>

            {/*第一張圖*/}
            <label for="theFile1" required>
              <IoIosAddCircleOutline className={style.icon} />
              {/* 預覽要顯示的圖片 */}
              <img className={style.smallImg2} id="image" />
            </label>
            <input id="theFile1" className={style.btn} type="file"></input>

            {/*第二張圖*/}
            <label for="theFile2">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 預覽要顯示的圖片 */}
              <img className={style.smallImg2} id="image" />
            </label>
            <input id="theFile2" className={style.btn} type="file"></input>

            {/*第三張圖*/}
            <label for="theFile3">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 預覽要顯示的圖片 */}
              <img className={style.smallImg2} id="image" />
            </label>
            <input id="theFile3" className={style.btn} type="file"></input>

            {/*第四張圖*/}
            <label for="theFile4">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 預覽要顯示的圖片 */}
              <img className={style.smallImg2} id="image" />
            </label>
            <input id="theFile4" className={style.btn} type="file"></input>

            {/*第五張圖*/}
            <label for="theFile5">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 預覽要顯示的圖片 */}
              <img className={style.smallImg2} id="image" src={``} />
            </label>
            <input id="theFile5" className={style.btn} type="file"></input>
          </div>

          <div className={style.pictureField}>
            <p className={style.title}>新增影片</p>
            <label for="theRadio">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 預覽要顯示的圖片 */}
              <img className={style.smallImg2} id="image" src={``} />
            </label>
            <input id="theRadio" className={style.btn} type="file"></input>
            <div className={style.warnText}>
              <p>1. 大小：最大 30MB，像素不可超過 1280*1280px</p>
              <p>2. 影片長度 : 10秒-60秒</p>
              <p>3. 格式：MP4 （不支援 vp9 影像編碼格式）</p>
            </div>
          </div>

          <div className={style.pictureField}>
            <p className={style.title}>商品名稱</p>
            <input
              id="theText"
              className={style.inputTextStyle}
              type="text"
              placeholder="請輸入商品名稱"
              required
            ></input>
          </div>

          <div className={style.pictureField}>
            <p className={style.title}>描述文案</p>
            <textarea
              id="theArticle"
              className={style.inputArticleStyle}
              placeholder="請輸入商品描述"
              required
            ></textarea>
          </div>
          <div className={style.itemStyle}>
            <div>
              <div className={style.pictureField}>
                <p className={style.title}>商品價格</p>
                <input
                  id="thePrice"
                  className={style.inputTextStyle}
                  type="text"
                  placeholder="商品價格"
                  required
                ></input>
              </div>
              <div className={style.pictureField}>
                <p className={style.title}>商品類別</p>
                <select className={style.theSelect}>
                  <option value={'攝影'}>攝影</option>
                  <option value={'NFT'}>NFT</option>
                  <option value={'UI/UX'}>UI/UX</option>
                  <option value={'報告/教材'}>報告/教材</option>
                  <option value={'Logo/插圖'}>Logo/插圖</option>
                </select>
                <BsCaretDownFill className={style.iconSelect} />
              </div>
            </div>

            <div>
              <div className={style.pictureField}>
                <p className={style.title}>商品數量</p>
                <input
                  id="thePrice"
                  className={style.inputTextStyle}
                  type="text"
                  placeholder="請輸入商品數量"
                  required
                ></input>
              </div>
              <div className={style.prepareTime}>
                <p className={style.title}>較長備貨</p>
                <label for="yes">是</label>
                <input id="yes" type="radio" name="yesNo"></input>
                <label for="no">否</label>
                <input id="no" type="radio" name="yesNo"></input>
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
export default EditProduct
