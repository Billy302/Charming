import classes from './Banner.module.css'
import image from './articleImage1.webp'
import { useState } from 'react'

const Banner = (props) => {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')

  const fileHandler = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
    console.log(e.target.files[0])
  }
  const imageUploadHandler = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:3001/blog/image', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (response) setStatus(response.statusText)
  }
  return (
    <>
      <div className={classes['myproduct--banner']}>
        <img src={image} alt="banner"></img>
        <div className={classes['myproduct--banner__word']}>
          <p>更換背景圖片</p>
        </div>
      </div>
      {/* 圖片上傳 */}
      {/* <div>
        <h1>一刀殺進去！！</h1>
        {image.preview && (
          <img src={image.preview} width="1000" height="1000" />
        )}
        <form method="POST" onSubmit={imageUploadHandler}>
          <input type="file" name="banner" onChange={fileHandler} />
          <button type="submit">upload</button>
        </form>
        {status && <h4>{status}</h4>}
      </div> */}
    </>
  )
}

export default Banner
