import { React, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import style from "../ShowPassword/ShowPassword.module.css"

function ShowPassword() {
  // 密碼顯示or隱藏
  const [invisible, setInvisible] = useState(true);
  const invisibleHandler = () => {
    setInvisible(!invisible);
  };
  return (
    <>
      <label for='password'>密碼</label>
          <div className={style.password}>
          {invisible &&  <FaEyeSlash onClick={invisibleHandler} />}
           {!invisible &&  <FaEye onClick={invisibleHandler} />}
          </div>
          <input type={invisible? 'password' : 'text'} id="password" className={style.passwordShow}/>
    </>
  );
}

export default ShowPassword;
