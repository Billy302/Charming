import classes from './PersonalInfo.module.css'
import { useState, useEffect } from 'react'
import InfoDisplayLook from './InfoDisplayLook'
import EditInfo from './EditInfo'
import swal from 'sweetalert'
import defaultIcon from './favicon.ico'
import { MdLocationOn, MdCalendarToday } from 'react-icons/md'

const PersonalInfo = (props) => {
  // 判斷目前是要 render 修改文案(true)還是顯示文案(false)
  const [changeInfo, setChangeInfo] = useState(false)

  // 取得目前 user id
  const userId = localStorage.getItem('id')

  // user logo 狀態區
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const [userLogo, setUserLogo] = useState('')

  // render user status
  const [userStatus, setUserStatus] = useState([])

  // ------------上傳user logo 邏輯

  // 利用 createObjectURL api 來讓使用者預覽圖片
  const fileHandler = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
    setDisPlayCancelBtn(!displayCancelBtn) // 讓取消按鈕跑出來
  }

  // 把使用者上傳的 logo 傳到後端
  const imageUploadHandler = async (e) => {
    swal('圖片上傳成功', '您的品味真好', 'success')
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch(
      `http://localhost:3001/blog/logo?userid=${userId}`,
      {
        method: 'POST',
        body: formData,
      }
    )
    if (response) setStatus(response.statusText)
  }

  // ------------ render user logo 邏輯

  // 到資料庫撈 user 目前的 logo
  const fetchLogo = async () => {
    const data = await fetch(
      `http://localhost:3001/blog/logo/render?userid=${userId}`
    )
    const result = await data.json()
    setUserLogo(result[0].logo_file)
  }

  useEffect(() => {
    fetchLogo()
  }, [])

  // ------------ render user status

  // render 使用者內文

  const renderStatus = async () => {
    const data = await fetch(
      `http://localhost:3001/blog/user/renderStatus?userid=${userId}`
    )
    const result = await data.json()
    setUserStatus(result)
  }

  useEffect(() => {
    renderStatus()
  }, [])

  // 讓畫面變成修改使用者文案

  const displayEditHandler = () => {
    setChangeInfo(true)
  }

  const displayInfoHandler = () => {
    setChangeInfo(false)
  }

  // 接 EditInfo 丟上來有關使用者更新的內容

  const updateStatusRenderHandler = (update) => {
    setUserStatus((prev) => [update, prev])
  }

  // 更新 '選擇大頭貼', '上傳' , '取消' 按鈕
  const [displayCancelBtn, setDisPlayCancelBtn] = useState(false)

  // 使用者點選取消按鈕後清掉剛剛上傳的圖片

  const cancelUploadHandler = () => {
    setDisPlayCancelBtn(!displayCancelBtn)
    const img = {
      preview: '',
      date: '',
    }
    setImage(img)
  }

  return (
    <section className={classes['personal-info']}>
      <div className={classes.imgAndText}>
        {/* 大頭照 */}

        <div className={classes['personal-info--image']}>
          {image.preview ? (
            <img src={image.preview} alt="user logo" />
          ) : (
            <img
              src={
                userLogo
                  ? `http://localhost:3000/blog/upload/icon/${userLogo}`
                  : defaultIcon
              }
              alt="user logo"
              className={classes['personal-info--image__user-upload']}
            />
          )}
          <div className={classes['personal-info--upload-logo']}>
            {/* <form method="POST" onSubmit={imageUploadHandler} id="logo-form">
              {!displayCancelBtn ? (
                <label
                  htmlFor="logo"
                  className={`${classes['custom-file-upload']}`}
                >
                  上傳大頭照
                </label>
              ) : (
                <div
                  className={
                    classes['personal-info--upload-logo__cancel-submit']
                  }
                >
                  <MyProductBtn
                    type="button"
                    onClick={cancelUploadHandler}
                    value="取消"
                  />{' '}
                  <MyProductBtn type="submit" form="logo-form" value="上傳" />
                </div>
              )}
              <input type="file" name="logo" id="logo" onChange={fileHandler} />
            </form> */}
          </div>
        </div>
        {/* 文字框部分：InfoDisplayLook */}
        <div className={classes['personal-info--card']}>
          <div>
            {changeInfo ? (
              <EditInfo
                onDisplay={displayInfoHandler}
                userStatusData={userStatus}
                onReRenderStatus={updateStatusRenderHandler}
              />
            ) : (
              <InfoDisplayLook
                onEdit={displayEditHandler}
                userStatusData={userStatus}
              />
            )}
          </div>
        </div>
        <div className={classes.designer}>
          {/* <img
            src={`http://localhost:3000/Home/ProductImg/logo1-1.jpeg`}
            alt="user logo"
          /> */}
          <div>
            <div className={classes.phoneFlex}>
              <p className={classes.DesignerTitle}>Designer :</p>
              <p className={classes.name}>{localStorage.getItem('name')}</p>
            </div>
            <div className={`${classes.displayFlex} ${classes.info}`}>
              <MdLocationOn className={classes.DesignerTitle} />
              <p className={classes.DesignerTitle}>高雄</p>
              <MdCalendarToday className={classes.DesignerTitle} />
              <p className={classes.DesignerTitle}>加入時間：2022.05.10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalInfo
