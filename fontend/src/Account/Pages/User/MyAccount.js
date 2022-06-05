import React,{useState, useEffect} from "react";
import style from "./User.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
import LoginNav from "../../../Home/Components/LoginNav/LoginNav";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

function MyAccount() {
const [account, setAccount] = useState([]);

const fetchAccount = async () => {
  const response = await fetch(`http://localhost:3001/Account/users/1`);

  const data = await response.json();
  setAccount(data[0]);
  // console.log(data[0]);
}
useEffect(() => {
  fetchAccount();
},[]);


  // const location = useLocation();
  // console.log(location);

  // const { auth } = props;

  {account.length > 0 && account.map((myaccount,i)=>{
    const {id,user_account,user_password,user_name,gender,birthday,email,mobile,city,nickname,avatar,join_at} = myaccount;
   
     
    })}
    return (
      <>
        <LoginNav />
        <BreadCrumb />
        {/* 上方選單 */}
        <nav className={style.navLeft}>
          <Link to="/account" className={style.active}>
            會員中心 <hr />
          </Link>
          <Link to="/shoppinglist" className={style.unactive}>
            購買清單 <hr />
          </Link>
          <Link to="/collection" className={style.unactive}>
            我的收藏 <hr />
          </Link>
        </nav>
  
        {/* 右側內文 */}
  
  
  
  
        <main className={style.main}>
          <h1 className={style.h1}>基本資料</h1>
          <div className={style.form}>
            <div className={style.item1}>
              <img src={require("../../images/Avatar3.png")} alt="male" />
              {/* <label >Jacky Chen{user_name}</label> */}
              {/* {auth ? "已登入" : "尚未登入"} */}
              <label>會員稱號：</label>
            </div>
  
            <div className={style.item2}>
              {/* <label>暱稱</label> 
              <label>男性</label>{gender}
              <label>生日</label>{birthday}
              <label>E-mail</label>{email}
              <label>連絡電話</label>{mobile}
              <label>所在地區</label>{city} */}
            </div>
          </div>
          <div className={style.item3}>
            <button className={style.button}>編輯</button>
          </div>
        </main>
  
      </>
    );

}

export default MyAccount;
