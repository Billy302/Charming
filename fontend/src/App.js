import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart1 from './Sales/Pages/Cart/Cart1'
import Cart2 from './Sales/Pages/Cart/Cart2'
import Cart3 from './Sales/Pages/Cart/Cart3'
import Cart4 from './Sales/Pages/Cart/Cart4'
import MySale from './Sales/Pages/Order/MySale'


function App() {
  return (
    <>
      {/* <Cart1 />
      <Cart2 />
      <Cart3 />
      <Cart4 /> */}
      <MySale />
    </>
  )
}

export default App
