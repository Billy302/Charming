import classes from './PersonalInfo.module.css'
import { useState } from 'react'
import InfoDisplay from './InfoDisplay'
import EditInfo from './EditInfo'

const PersonalInfo = (props) => {
  const [changeInfo, setChangeInfo] = useState(false)
  const infoChangeHandler = () => {
    setChangeInfo(true)
  }
  // const displayChangeHandler = (e) => {
  //     e.preventDefault();
  //     setChangeInfo(false);
  // };

  return (
    <div className={classes['personal-info']}>
      <div className={classes['personal-info--image']}>
        <img
          src={`http://localhost:3000/blog/upload/icon/developers5.png`}
          alt="user logo"
        ></img>
      </div>
      <div className={classes['personal-info--card']}>
        <div>
          {!changeInfo ? (
            <InfoDisplay onEdit={infoChangeHandler} />
          ) : (
            <EditInfo onDisplay={setChangeInfo} />
          )}
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
