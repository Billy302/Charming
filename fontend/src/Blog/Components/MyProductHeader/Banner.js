import classes from './Banner.module.css'
import { useState, useEffect } from 'react'
import Trending from '../FrontPage/TrendingArticle/Trending'
import PillBtn from '../UI/PillBtn'

const Banner = (props) => {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const [uploadBtn, setUploadBtn] = useState(false)
  const [userBanner, setUserBanner] = useState([])

  const uploadBtnHandler = () => {
    setUploadBtn(true)
  }

  const userId = localStorage.getItem('id')

  // 上傳橫幅banner圖片
  const fileHandler = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  const imageUploadHandler = async (e) => {
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

  // render user 的 banner

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

  // 上傳使用者小圖像

  return (
    <>
      <div className={classes['banner']}>
        {image.preview ? (
          <img src={image.preview} width="100%" height="500" />
        ) : (
          <img
            src={`http://localhost:3000/blog/upload/banner/${userBanner.banner_file}`}
            alt="banner"
            className={classes['banner--uploadimage']}
          ></img>
        )}
        <div className={classes['banner--upload']}>
          <form id="banner-upload" method="POST" onSubmit={imageUploadHandler}>
            <label
              htmlFor="banner"
              className={`${classes['custom-file-upload']}`}
            >
              編輯封面照片
            </label>
            <input
              type="file"
              name="banner"
              id="banner"
              onChange={fileHandler}
            />
            <input type="submit" value="儲存變更" form="banner-upload" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Banner
