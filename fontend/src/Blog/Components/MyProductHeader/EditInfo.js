import classes from './EditInfo.module.css'
import PillBtn from '../UI/PillBtn'
import { useState, useEffect, useRef } from 'react'
import MyProductBtn from '../UI/MyProductBtn'
import TextField from '@mui/material/TextField'

const EditInfo = (props) => {
  // 解構從資料庫拿出來的使用者狀態的title跟context
  const { userStatusData } = props

  const titleUseRef = useRef('')
  const contentUseRef = useRef('')

  // 紀錄使用者更新的title context
  // const [titleInput, setTitleInput] = useState('')
  // const [contextInput, setContextInput] = useState('')
  //紀錄user 更新的內容
  // const titleChangeHandler = (e) => {
  //   setTitleInput(e.target.value)
  //   // 直接用useRef去找value並記下來，不然如果只改context沒有改title的話，送出時title會被洗掉
  //   setContextInput(contentUseRef.current.value)
  // }
  // const contextChangeHandler = (e) => {
  //   setContextInput(e.target.value)
  //   // 直接用useRef去找value並記下來，不然如果只改title沒有改context的話，送出時context會被洗掉
  //   setTitleInput(titleUseRef.current.value)
  // }

  // -------------更新 user title and content

  // 找到目前的使用者id
  const userId = localStorage.getItem('id')

  // 串後端api並且更新使用者狀態
  const updateStatus = async () => {
    const data = await fetch(
      `http://localhost:3001/blog/user/status/api?userid=${userId}`,
      {
        method: 'POST',
        body: JSON.stringify({
          titleInput: titleUseRef.current.value,
          contextInput: contentUseRef.current.value,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    const result = await data.json()
  }

  // 送出表格是要做的動作
  const inputChangeHandler = (e) => {
    e.preventDefault()
    // 把使用者最新的更動記下來
    const userNewestEdit = {
      status_title: titleUseRef.current.value,
      status_content: contentUseRef.current.value,
    }
    // 執行剛剛的api
    updateStatus()
    // 傳給 PersonalInfo ， PersonalInfo 再傳給 InfoDisplay component 讓他 render
    props.onReRenderStatus(userNewestEdit)
    // 告訴 PersonalInfo 使用者已經修改完成
    props.onDisplay()
  }

  return (
    <div className={classes['personal-info--card__display']}>
      <form onSubmit={inputChangeHandler} id="status">
        <label htmlFor="title">修改文章</label>
        <input
          type="text"
          id="title"
          // onChange={titleChangeHandler}
          defaultValue={userStatusData[0].status_title}
          ref={titleUseRef}
        ></input>
        <label htmlFor="context">修改內文</label>
        <textarea
          id="context"
          // onChange={contextChangeHandler}
          defaultValue={userStatusData[0].status_content}
          ref={contentUseRef}
        ></textarea>
        <p></p>
      </form>
      <div className={classes.myproductionbtn}>
        <MyProductBtn value="完成修改" type="submit" form="status" />
      </div>
    </div>
  )
}

export default EditInfo
