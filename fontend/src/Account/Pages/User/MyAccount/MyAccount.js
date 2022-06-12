import React, { useState, useEffect } from "react";
import style from "./MyAccount.module.css";
import { useNavigate, Link } from "react-router-dom";
import LoginNav from "../../../../Home/Components/LoginNav/LoginNav";
import UnloginNav from '../../../../Home/Components/UnloginNav/UnloginNav'
import BreadCrumb from "../../../Components/BreadCrumb/BreadCrumb";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function MyAccount() {
  // 依auth有無 設定登入或未登入nav
  let now = localStorage.getItem("auth");

  // 上傳圖片
const [image,setImage] = useState({preview:'',data:''})
const [status,setStatus] = useState('')
const userId = localStorage.getItem('id')

const handleSubmit = async (e) =>{
  e.preventDefault()
  let formData = new FormData();
  formData.append('file',image.data)
  const response = await fetch(`http://localhost:3001/Account/image?userid=${userId}`,{
    method:'POST',
    body: formData,
  })
  if(response) setStatus(response.statusText)
}

const handleFileChange = (e) =>{
  const img = {
    preview: URL.createObjectURL(e.target.files[0]),
    data:e.target.files[0],
  }
  setImage(img);
}

  // 設定導向頁面函式
  const navigate = useNavigate();

  // 設定sweetalert2
  const MySwal = withReactContent(Swal);

  // 登入狀態驗證
  const auth = JSON.parse(localStorage.getItem("auth"));
  console.log(auth);
  if (auth === false) {
    MySwal.fire({
      title:'尚未登入?',
      text:'前往登入以獲得資訊',
      icon:'question',
      showConfirmButton: false,
          timer: 1500}
    ).then(
      () => {
        navigate("/signin");
      }
    );
    alert("您尚未登入");
    navigate("/signin");
  } else {
    console.log('已登入');
  }

  const storageMemory = localStorage.getItem("id");
  console.log(storageMemory);

  // 獲得會員id=?的資料,存在account中
  const [account, setAccount] = useState([]);

  const fetchAccount = async () => {
    const response = await fetch(
      `http://localhost:3001/Account/users?userId=${storageMemory}`
    );
    const data = await response.json();
    setAccount(data[0]);
    console.log(data[0]);
  };
  useEffect(() => {
    fetchAccount();
  }, []);

  console.log(account);
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
  } = account;


  const logOut = (e) => {
    e.preventDefault();
    MySwal.fire({
      title: "確定要登出嗎?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#795252",
      confirmButtonText: "確定",
      cancelButtonColor: "#d33",
      cancelButtonText: "取消",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('id')
        localStorage.removeItem('name')
        localStorage.setItem('auth',false)
        MySwal.fire({
          title: '登出成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          navigate('/UnloginHome')
        })
      }
    })
  };

  return (
    <>
       {now == 'true' ? <LoginNav /> : <UnloginNav />}
      {/* 上方選單 */}
      <nav className={style.navLeft}>
        <Link to="/BtocPage/account" className={style.active}>
          會員中心 <hr />
        </Link>
        <Link to="/BtocPage/shoppinglist" className={style.unactive}>
          購買清單 <hr />
        </Link>
        <Link to="/BtocPage/collection" className={style.unactive}>
          我的收藏 <hr />
        </Link>
      </nav>

      {/* 右側內文 */}

      <main className={style.main}>
        <h1 className={style.h1}>基本資料</h1>
        <div className={style.form}>
          <div className={style.item1}>
            <img src={require("../../../images/Avatar3.png")} alt="male" />
            {image.preview && <img src={image.preview} width='100' height='100'/>}
            <form onSubmit={handleSubmit}>
              <input type='file' name='file' onChange={handleFileChange}></input>
              <button type="submit">提交</button>
            </form>
            {status && <h4>{status}</h4>}
            <h3>{username}</h3>
            <label>會員稱號：柴富自由柴米人</label>
          </div>

          <div className={style.item2}>
            <label>暱稱：無</label>
            <label>性別：{gender}</label>
            <label>生日：{birthday}</label>
            <label>E-mail：{email}</label>
            <label>連絡電話：0{mobile}</label>
            <label>所在地區：{city}</label>
          </div>
        </div>
        <div className={style.item3}>
          <button className={style.button} onClick={logOut}>編輯</button>
        </div>
      </main>
    </>
  );
}

export default MyAccount;
