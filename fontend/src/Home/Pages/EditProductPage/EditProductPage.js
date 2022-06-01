// 功能：取得單筆商品資料。Method: GET。URL: /api/product/:id
// 功能：修改商品。Method: PUT。URL: /api/product/:id

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoginNav from "../../Components/LoginNav/LoginNav";
import style from "./EditProductPage.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsCaretDownFill } from "react-icons/bs";

function EditProduct() {
  const [products, setProducts] = useState({
    pic_path: "",
  });

  // 連線檔
  const catchUserId = useParams();
  const fetchProducts = async () => {
    //向遠端伺服器get資料 http://localhost:3000/Sales/api/product?id=1
    const response = await fetch(
      //取單一商品資料
      `http://localhost:3000/Sales/api/product/${catchUserId.UserId}/${catchUserId.ProductID}`
    );
    const data = await response.json();
    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setProducts(data[0]);
  };
  // console.log(products);
  // didMount
  useEffect(() => {
    fetchProducts();
  }, []);

  const a = products.pic_path.split(" ");

  // 小圖
  let p = [];
  for (let i = 0; i < a.length; i++) {
    p.push(
      <div>
        <label for={`theFile${i}`}>
          {/* 預覽要顯示的圖片 */}
          <img
            className={style.smallImg2}
            alt="圖片顯示失敗"
            src={`http://localhost:3001/Home/ProductImg/${a[i]}`}
          />
        </label>
        <input id={`theFile${i}`} className={style.btn} type="file"></input>
      </div>
    );
  }
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
            {p}

            {/*空圖框*/}
            <label for="theFile5">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 預覽要顯示的圖片 */}
              <img id="image" className={style.smallImg2} />
            </label>
            <input id="theFile5" className={style.btn} type="file"></input>
          </div>

          <div className={style.pictureField}>
            <p className={style.title}>新增影片</p>
            <label for="theRadio">
              <IoIosAddCircleOutline className={style.icon} />
              {/* 預覽要顯示的圖片 */}
              <img id="image" className={style.smallImg2} />
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
              value={products.product_name}
              required
            ></input>
          </div>

          <div className={style.pictureField}>
            <p className={style.title}>描述文案</p>
            <textarea
              id="theArticle"
              className={style.inputArticleStyle}
              value={products.product_copy}
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
                  value={products.price}
                  required
                ></input>
              </div>
              <div className={style.pictureField}>
                <p className={style.title}>商品類別</p>
                <select className={style.theSelect}>
                <option value={products.price} selected>Professional</option> 
                  <option value={"101"}>NFT</option>
                  <option value={"102"}>UI/UX</option>
                  <option value={"103"}>書籍/翻譯</option>
                  <option value={"104"}>Logo</option>
                  <option value={"105"}>插圖</option>
                </select>
                <BsCaretDownFill className={style.iconSelect} />
              </div>
            </div>

            <div>
              <div className={style.pictureField}>
                <p className={style.title}>檔案類型</p>
                <textarea
                  id="theArticle"
                  className={style.inputArticleStyle2}
                  value={products.file_type}
                  required
                ></textarea>
              </div>
              {/* <div className={style.prepareTime}>
                <p className={style.title}>較長備貨</p>
                <label for="yes">是</label>
                <input id="yes" type="radio" name="yesNo"></input>
                <label for="no">否</label>
                <input id="no" type="radio" name="yesNo"></input>
              </div> */}
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
  );
}
export default EditProduct;
