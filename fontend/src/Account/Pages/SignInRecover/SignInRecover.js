import style from './SignInRecover.module.css'
import {React, useState} from 'react'
import UnloginNav from '../../../Home/Components/UnloginNav/UnloginNav';
import { FaEyeSlash, FaEye } from "react-icons/fa";

function SignInRecover() {

   // 密碼顯示or隱藏
   const [invisible, setInvisible] = useState(true);
   const invisibleHandler = () => {
     setInvisible(!invisible);
   };
  return (
    <>
      <UnloginNav />
      <main className={style.main}>
        <h1 className={style.h1}>重設密碼</h1>
        <form className={style.form}>
          <label>你的帳號</label>
          <input type="text" disabled placeholder='jackychen0706'/>
          {/* 初次輸入密碼 */}
           <label for='password'>密碼</label>
          <div className={style.password}>
          {invisible &&  <FaEyeSlash onClick={invisibleHandler} />}
           {!invisible &&  <FaEye onClick={invisibleHandler} />}
          </div>
          <input type={invisible? 'password' : 'text'} id="password" className={style.passwordShow}  placeholder="密碼須為8碼以上英文、數字或符號"/>

          {/* 確認密碼 */}
          <label for='passwordCheck'>確認密碼</label>
          <input type={invisible? 'password' : 'text'} id="passwordCheck"/>
          
          <button className={style.button}>確認</button>
        </form>
      </main>
    </>
  )
}

export default SignInRecover
