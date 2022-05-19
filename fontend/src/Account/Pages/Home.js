import style from './Pages.module.css'
import React from 'react'
import Header from '../Components/Header/Header'

function Home() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <h1 className={style.h1}>柴米首頁</h1>
      </main>
    </>
  )
}

export default Home
