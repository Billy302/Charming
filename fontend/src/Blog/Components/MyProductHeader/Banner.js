import classes from './Banner.module.css'
import { useState, useEffect } from 'react'
import Trending from '../FrontPage/TrendingArticle/Trending'
import PillBtn from '../UI/PillBtn'
import DefalutImage from './charmingDefalut.png'
import swal from 'sweetalert'
import MyProductBtn from '../UI/MyProductBtn'
import { RiImageEditFill } from 'react-icons/ri'

const Banner = (props) => {
  const [userBanner, setUserBanner] = useState([])
  const [displaySaveBtn, setDisplaySaveBtn] = useState(false)

  const userId = localStorage.getItem('id')

  // ----------------上傳橫幅banner圖片

  // 上傳banner狀態
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')

  // 利用createObjectURL api 來預覽圖片並記錄圖片
  const fileHandler = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
    // 告訴 component 把按鈕換成取消跟上傳
    setDisplaySaveBtn(!displaySaveBtn)
  }

  // 按下取消按鈕後清空剛剛上傳的圖片，並把按鈕換成圖片上傳

  const cancelUploadHandler = () => {
    setDisplaySaveBtn(!displaySaveBtn)
    const img = {
      preview: '',
      date: '',
    }
    setImage(img)
  }

  // 利用後端api，把使用者上傳的圖片傳到資料庫
  const imageUploadHandler = async (e) => {
    swal('圖片上傳成功', '您的品味真好', 'success')
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch(
      `http://localhost:3001/blog/image?userid=${userId}`,
      {
        method: 'POST',
        body: formData,
      }
    )
    if (response) setStatus(response.statusText)
  }

  // ----------------render user 的 banner

  const fetchBanner = async () => {
    const data = await fetch(
      `http://localhost:3001/blog/image/render?userid=${userId}`
    )
    const result = await data.json()
    setUserBanner(result[0])
  }
  useEffect(() => {
    fetchBanner()
  }, [])

  console.log(userBanner.banner_file)
  return (
    <>
      <div className={classes['banner']}>
        {image.preview ? (
          <img
            src={image.preview}
            width="100%"
            height="400"
            alt="user_upload"
          />
        ) : (
          <img
            src={
              userBanner.banner_file
                ? `http://localhost:3000/blog/upload/banner/${userBanner.banner_file}`
                : DefalutImage
            }
            alt="banner"
            className={classes['banner--uploadimage']}
          />
        )}
        <div className={classes['banner--upload']}>
          <form id="banner-upload" method="POST" onSubmit={imageUploadHandler}>
            {!displaySaveBtn ? (
              <label
                htmlFor="banner"
                className={`${classes['custom-file-upload']}`}
              >
                <RiImageEditFill className={classes.icon} />
                編輯封面照片
              </label>
            ) : (
              <div className={classes['banner--upload__cancel-submit']}>
                <MyProductBtn
                  type="button"
                  value="取消"
                  onClick={cancelUploadHandler}
                  className={classes.myproductbtn}
                />
                <MyProductBtn
                  type="submit"
                  value="儲存變更"
                  form="banner-upload"
                />
              </div>
            )}

            <input
              type="file"
              name="banner"
              id="banner"
              onChange={fileHandler}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Banner
