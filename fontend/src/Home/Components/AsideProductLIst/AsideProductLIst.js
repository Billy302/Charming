import React from "react";
import style from "./AsideProductLIst.module.css";
function AsideProductLIst() {
  return (
    <>
      <aside className={style.AsideProduct}>
        <a href="">攝影</a>
        <a href="">NFT</a>
        <a href="">UI/UX</a>
        <a href="">報告/教材</a>
        <a href="">Logo/插圖</a>
      </aside>
    </>
  );
}

export default AsideProductLIst;
