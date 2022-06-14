import classes from './InfoDisplay.module.css'
import PillBtn from '../UI/PillBtn'
import { useState, useEffect } from 'react'
import MyProductBtn from '../UI/MyProductBtn'

const InfoDisplay = (props) => {
  // 解構從資料庫拿出來的使用者狀態的title跟context
  const { userStatusData } = props

  // const [userData, setUserData] = useState(userStatusData)
  // useEffect(() => {
  //   setUserData(userStatusData)
  // }, [userStatusData])

  return (
    <div className={classes['personal-info--card__display']}>
      <h2>{userStatusData[0]?.status_title || '奔跑設計'}</h2>
      <p>
        {userStatusData[0]?.status_content ||
          '我們是以奔跑為設計發想的台灣設計師品牌，我們長期分享，歡迎追蹤我們的Podcast! 專業設計Logo、NFT、桌遊設計。'}
      </p>
      {/* <div className={classes['personal-info--card__display-btn']}>
        <MyProductBtn
          type="button"
          value="修改文案"
          onClick={props.onEdit}
          className={classes.myproductbtn}
        />
      </div> */}
    </div>
  )
}

export default InfoDisplay
