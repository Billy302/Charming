import classes from './InfoDisplay.module.css'
import PillBtn from '../UI/PillBtn'
import { useState, useEffect } from 'react'

const InfoDisplay = (props) => {
  // 解構從資料庫拿出來的使用者狀態的title跟context
  const { userStatusData } = props

  // const [userData, setUserData] = useState(userStatusData)
  // useEffect(() => {
  //   setUserData(userStatusData)
  // }, [userStatusData])

  return (
    <div className={classes['personal-info--card__display']}>
      <h2>{userStatusData[0]?.status_title || '寫點什麼吧！'}</h2>
      <p>{userStatusData[0]?.status_content || '寫點什麼吧！'}</p>
      <div className={classes['personal-info--card__display-btn']}>
        <PillBtn onClick={props.onEdit}>修改文案</PillBtn>
      </div>
    </div>
  )
}

export default InfoDisplay
