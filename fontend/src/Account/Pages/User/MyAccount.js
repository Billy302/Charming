import React, { useState, useEffect } from 'react'
import style from './MyAccount.module.css'
import { useNavigate, Link } from 'react-router-dom'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import UnloginNav from '../../../Home/Components/UnloginNav/UnloginNav'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function MyAccount() {
  // 依auth有無 設定登入或未登入nav
  let now = localStorage.getItem('auth')

  // 上傳圖片
  // const [image,setImage] = useState({preview:'',data:''})
  // const [status,setStatus] = useState('')
  // const userId = localStorage.getItem('id')

  // const handleSubmit = async (e) =>{
  //   e.preventDefault()
  //   let formData = new FormData();
  //   formData.append('file',image.data)
  //   const response = await fetch(`http://localhost:3001/Account/image?userid=${userId}`,{
  //     method:'POST',
  //     body: formData,
  //   })
  //   if(response) setStatus(response.statusText)
  // }

  // const handleFileChange = (e) =>{
  //   const img = {
  //     preview: URL.createObjectURL(e.target.files[0]),
  //     data:e.target.files[0],
  //   }
  //   setImage(img);
  // }

  // 設定導向頁面函式
  const navigate = useNavigate()

  // 設定sweetalert2
  const MySwal = withReactContent(Swal)

  // 登入狀態驗證
  const auth = JSON.parse(localStorage.getItem('auth'))
  // console.log(auth);

  if (auth === false) {
    MySwal.fire({
      title: '尚未登入?',
      text: '前往登入以獲得資訊',
      icon: 'question',
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate('/signin')
    })
    alert('您尚未登入')
    navigate('/signin')
  } else {
    console.log('已登入')
  }

  const storageMemory = localStorage.getItem('id')
  console.log(storageMemory)

  // 獲得會員id=?的資料,存在account中
  const [account, setAccount] = useState([])

  const fetchAccount = async () => {
    const response = await fetch(
      `http://localhost:3001/Account/users?userId=${storageMemory}`
    )
    const data = await response.json()
    setAccount(data[0])
    // console.log(data[0]);
  }
  useEffect(() => {
    fetchAccount()
  }, [])

  // console.log(account);
  // 解構accout獲得的值
  const {
    avatar,
    birthday,
    city,
    email,
    gender,
    id,
    join_at,
    mobile,
    nickname,
    user_account,
    user_password,
    username,
  } = account

  return (
    <>
      {now == 'true' ? <LoginNav /> : <UnloginNav />}
      {/* 上方選單 */}
      <nav className={style.navLeft}>
        <Link to="/membercenter/account" className={`${style.active} ${style.link}`}>
          會員中心 <hr />
        </Link>
        <Link
          to="/membercenter/shoppinglist?page=1"
          className={`${style.unactive} ${style.link}`}
        >
          購買清單 <hr />
        </Link>
        <Link
          to="/membercenter/collection?page=1"
          className={`${style.unactive} ${style.link}`}
        >
          我的收藏 <hr />
          {/* user 追蹤的文章 */}
        </Link>
      </nav>

      {/* 右側內文 */}
      <div className={style.myAccount}>
        <h1 className={style.h1}>基本資料</h1>
        <main className={style.main}>
          <div className={style.item1}>
            <img src={require('../../images/Avatar3.png')} alt="male" />
            <h2>{username}</h2>
            {/* {image.preview && <img src={image.preview} width='100' height='100'/>} */}
            {/* <form onSubmit={handleSubmit}>
              <input type='file' name='file' onChange={handleFileChange}></input>
              <button type="submit">提交</button>
            </form>
            {status && <h4>{status}</h4>} */}
            {/* <label>會員稱號：柴富自由柴米人</label> */}
          </div>

          <div className={style.item2}>
            <label>性別：{gender}</label>
            <label>生日：{birthday}</label>
            <label>E-mail：{email}</label>
            <label>連絡電話：{mobile}</label>
            <label>所在地區：{city}</label>
          </div>
        </main>
      </div>
    </>
  )
}

export default MyAccount
