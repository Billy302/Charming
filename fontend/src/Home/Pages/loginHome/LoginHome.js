import React from 'react'
import Style from './LoginHome.module.css'
// component
import LoginNav from '../../Components/LoginNav/LoginNav'
import AsideProductLIst from '../../Components/AsideProductLIst/AsideProductLIst'
import Product from '../../Components/Product/Product'

// react icon
import { AiTwotoneSound } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import UnloginNav from '../../Components/UnloginNav/UnloginNav'

function LoginHome() {

    // 取得當前網址資訊
    const location = useLocation()

    // 判斷網址內是否包含sort欄位
    const searchParams = new URLSearchParams(location.search)
    let nowID = searchParams.get('id')

  return (
    <header>
      {nowID ?       <LoginNav /> : <UnloginNav />}

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
