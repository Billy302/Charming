import React from 'react'
import Style from './Footer.module.css'
import developer1 from '../../Assets/developers1.jpg'
import developer2 from '../../Assets/developers2.jpg'
import developer3 from '../../Assets/developers3.png'
import developer4 from '../../Assets/developers4.png'
import developer5 from '../../Assets/developers5.png'
import developer6 from '../../Assets/developers6.png'

function Footer(props) {
  return (
    <footer>
      <div className={Style.charmingFooter}>
        <p>Developer</p>
        <div className={Style.picture}>
          <div>
            <img src={developer1} alt="developer1" />
            <p>謝協昌</p>
          </div>
          <div>
            <img src={developer2} alt="developer1" />
            <p>鍾立婷</p>
          </div>
          {/* <div>
            <img src={developer3} alt="developer1" />
            <p>吳紹雍</p>
          </div>
          <div>
            <img src={developer4} alt="developer1" />
            <p>陳亭</p>
          </div> */}
          <div>
            <img src={developer5} alt="developer1" />
            <p>蔡璨鴻</p>
          </div>
          <div>
            <img src={developer6} alt="developer1" />
            <p>劉芷廷</p>
          </div>
        </div>
        <h1 className={Style.footerText}>
          此網頁僅供資展國際專題使用，如有侵權事宜煩請來信，我們將立即修正，謝謝。
        </h1>
      </div>
    </footer>
  )
}
export default Footer
