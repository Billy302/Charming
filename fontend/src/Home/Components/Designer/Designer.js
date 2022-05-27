import React from 'react'
import style from "./Designer.module.css"
import userImg from "../../Assets/product4.png"
function ComponentsName(){
  return(
    <div>
        <div className={style.displayFlex}>
            <div>img</div>
            <div className={style.displayFlex}>
              <div></div>
              <div>icon</div>
            </div>
            <button>聯絡設計師</button>
          </div>
    </div>
    );
    
}

export default ComponentsName ;