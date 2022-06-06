<<<<<<< HEAD
import React from "react";
import style from "./ProcessBar.module.css";
=======
import React from 'react'
import style from './ProcessBar.module.css'
>>>>>>> 23d04c36c11044a97e803ae3df64f5a59838f249
function Processbar(props) {
  const { step } = props;
  let start = step;
  return (
    <section>
      <div className={style.title}>
<<<<<<< HEAD
      <p>購物車</p>
=======
        <p>購物車</p>
>>>>>>> 23d04c36c11044a97e803ae3df64f5a59838f249
      </div>
      <div className={style.progressBar}>
        {/* 確認購物車 */}
        <div className={style.center}>
          <div
            className={`${style.progressRound} ${style.progressActive}`}
          ></div>
          <p>確認購物車</p>
        </div>
        {start >= 2 ? (
          <div
            className={`${style.progressLine} ${style.progressActive}`}
          ></div>
        ) : (
          <div className={style.progressLine}></div>
        )}

        {/* 填資料 */}
        <div className={style.center}>
          {start >= 2 ? (
            <div
              className={`${style.progressRound} ${style.progressActive}`}
            ></div>
          ) : (
            <div className={style.progressRound}></div>
          )}
          <p>填資料</p>
        </div>
        {start > 2 ? (
          <div
            className={`${style.progressLine} ${style.progressActive}`}
          ></div>
        ) : (
          <div className={style.progressLine}></div>
        )}

        {/* 付款 */}
        <div className={style.center}>
          {start > 2 ? (
            <div
              className={`${style.progressRound} ${style.progressActive}`}
            ></div>
          ) : (
            <div className={style.progressRound}></div>
          )}
          <p>付款</p>
        </div>
      </div>
    </section>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 23d04c36c11044a97e803ae3df64f5a59838f249
}
export default Processbar;
