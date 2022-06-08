import React from 'react'
import Style from './LoginHome.module.css'
// component
import LoginNav from '../../Components/LoginNav/LoginNav'
import AsideProductLIst from '../../Components/AsideProductLIst/AsideProductLIst'
import Product from '../../Components/Product/Product'

// react icon
import { AiTwotoneSound } from 'react-icons/ai'
import UnloginNav from '../../Components/UnloginNav/UnloginNav'

function LoginHome() {
  let now = localStorage.getItem('auth')
  return (
    <header>
      {now == 'true' ? <LoginNav /> : <UnloginNav />}

      <hgroup>
        <p className={Style.carousel}>
          <AiTwotoneSound className={Style.icon} />
          <p className={Style.middleText}>
            指揮中心快訊：新增75例COVID-19確定病例，分別為2例本土及73例境外移入
          </p>
        </p>
      </hgroup>

      {/* <SliderSection/> */}
      <section className={Style.productType}>
        <AsideProductLIst className={Style.displayNone} />
        <Product />
      </section>
    </header>
  )
}

export default LoginHome
