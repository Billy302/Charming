import React from 'react'
import Style from './LoginHome.module.css'
// component
import LoginNav from '../../Components/LoginNav/LoginNav'
import AsideProductLIst from '../../Components/AsideProductLIst/AsideProductLIst'
import Product from '../../Components/Product/Product'

// react icon
import { AiTwotoneSound } from 'react-icons/ai'
import UnloginNav from '../../Components/UnloginNav/UnloginNav'
import mainpic from './type1.png'

function LoginHome() {
  let now = localStorage.getItem('auth')
  return (
    <header>
      {now == 'true' ? <LoginNav /> : <UnloginNav />}
      <hgroup>
        <p className={Style.carousel}>
          {/* <AiTwotoneSound className={Style.icon} /> */}
          <p className={Style.middleText}>
            The 13th Epson International Pano Award 愛普生第 13 屆國際全景攝影獎
          </p>
        </p>
      </hgroup>
      <img src={mainpic} className={Style.mainpic}></img>

      {/* <SliderSection/> */}
      <section className={Style.productType}>
        <AsideProductLIst className={Style.displayNone} />
        <Product />
      </section>
    </header>
  )
}

export default LoginHome
