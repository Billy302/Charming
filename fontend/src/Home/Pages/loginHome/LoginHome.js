import React from 'react'
import Style from './LoginHome.module.css'
// component
import LoginNav from '../../Components/LoginNav/LoginNav'
import Card from '../../Components/Card/Card'
import AsideProductLIst from '../../Components/AsideProductLIst/AsideProductLIst'
import Product from '../../Components/Product/Product'
import Slider from '../../Components/Slider/Slider'
import SliderSection from '../../Components/SliderSection/SliderSection'

// react icon
import { AiTwotoneSound } from 'react-icons/ai'

// data
import users from '../../Mockdata/users.json'
import { ImOpt } from 'react-icons/im'
// const connection = require('../../../../../backend/modules/mysql_config');

function LoginHome() {
  return (
    <header>
      <LoginNav />
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
