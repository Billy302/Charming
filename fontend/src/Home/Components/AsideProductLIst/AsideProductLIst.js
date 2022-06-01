import React from "react";
import style from "./AsideProductLIst.module.css";
function AsideProductLIst() {
  return (
    <>
      <aside className={style.AsideProduct}>
        <a href="">NFT</a>
        <a href="">UI/UX</a>
        <a href="">書籍/翻譯</a>
        <a href="">Logo</a>
        <a href="">插圖</a>
      </aside>
    </>
  );
}

export default AsideProductLIst;
