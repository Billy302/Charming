import React from "react";
import style from "./ProcessBar.module.css";
function Processbar(props) {
  const { step } = props;
  let start = step;
  return (
    <section>
      <div className={style.title}>
      <p>購物車</p>
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
  );
}
export default Processbar;
