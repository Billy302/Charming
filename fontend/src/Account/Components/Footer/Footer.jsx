import React from "react";
import Style from "./Footer.module.css";
import developer1 from "../../../Home/Assets/developers1.png";
import developer2 from "../../../Home/Assets/developers2.png";
import developer3 from "../../../Home/Assets/developers3.png";
import developer4 from "../../../Home/Assets/developers4.png";
import developer5 from "../../../Home/Assets/developers5.png";
import developer6 from "../../../Home/Assets/developers6.png";


function Footer(props){
  return (
    <footer className={Style.footer}>
      <p className={Style.developertext}>Developers:</p>

      <div className={Style.developer}>
        <div>
          <img className={Style.picture} src={developer1} alt="developer1" />
          <p>謝協昌</p>
        </div>
        <div>
          <img className={Style.picture} src={developer2} alt="developer1" />
          <p>鍾立婷</p>
        </div>
        <div>
          <img className={Style.picture} src={developer3} alt="developer1" />
          <p>吳紹雍</p>
        </div>
        <div>
          <img className={Style.picture} src={developer4} alt="developer1" />
          <p>陳亭</p>
        </div>
        <div>
          <img className={Style.picture} src={developer5} alt="developer1" />
          <p>蔡璨鴻</p>
        </div>
        <div>
          <img className={Style.picture} src={developer6} alt="developer1" />
          <p>劉芷廷</p>
        </div>
      </div>
      <p className={Style.footerText}>
        此網頁僅供資展國際專題發表使用，如有侵權事宜煩請來信，我們將立即修正，謝謝。
      </p>

    </footer>
  );
};
export default Footer;