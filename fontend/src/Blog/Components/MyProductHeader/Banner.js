import classes from './Banner.module.css'
import { useState, useEffect } from 'react'
import Trending from '../FrontPage/TrendingArticle/Trending'
import PillBtn from '../UI/PillBtn'

const Banner = (props) => {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const [uploadBtn, setUploadBtn] = useState(false)
  const [userBanner, setUserBanner] = useState([])
  // render 追蹤的文章
  const [allFavArticle, setAllFavArticle] = useState([])

  const userId = localStorage.getItem('id')

  const uploadBtnHandler = () => {
    setUploadBtn(true)
  }

  // 上傳圖片
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

  //

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

  console.log(userBanner)

  // render user 追蹤的文章
  useEffect(() => {
    fetch(`http://localhost:3001/blog/fav/all?userid=${userId}`)
      .then((res) => res.json())
      .then((data) => setAllFavArticle(data))
  }, [])

  return (
    <>
      <div className={classes['myproduct--banner']}>
        {image.preview ? (
          <img src={image.preview} width="100%" height="500" />
        ) : (
          <img
            src={`http://localhost:3000/blog/upload/banner/${userBanner.banner_file}`}
            alt="banner"
            className={classes['myproduct--banner__upload']}
          ></img>
        )}
        {uploadBtn && (
          <form method="POST" onSubmit={imageUploadHandler}>
            <input type="file" name="file" onChange={fileHandler} />
            <button type="submit">upload</button>
          </form>
        )}
        <div className={classes['myproduct--banner__word']}>
          <PillBtn onClick={uploadBtnHandler}>按我</PillBtn>
        </div>
      </div>
      {/* 圖片上傳 */}
      {/* <div>
        <h1>一刀殺進去！！</h1>
        {image.preview && (
          <img src={image.preview} width="100%" height="1000" />
        )}
        <form method="POST" onSubmit={imageUploadHandler}>
          <input type="file" name="banner" onChange={fileHandler} />
          <button type="submit">upload</button>
        </form>
        {status && <h4>{status}</h4>}
      </div> */}
      {/* user 追蹤的文章 */}
      {allFavArticle.map((aritcle) => {
        return <Trending article={aritcle} key={aritcle.fav_id} />
      })}
    </>
  )
}

export default Banner
