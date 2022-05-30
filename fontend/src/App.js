import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Cart1 from './Sales/Pages/Cart/Cart1'
import Cart2 from './Sales/Pages/Cart/Cart2'
import Cart3 from './Sales/Pages/Cart/Cart3'
import Cart4 from './Sales/Pages/Cart/Cart4'
import MySale from './Sales/Pages/Order/MySale'
import OrderList from './Sales/Pages/Order/OrderList'
import Order from './Sales/Pages/Order/Order'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/BtobPage/Order" element={<OrderList />} />
      </Routes>
      <Routes>
        <Route path="/BtobPage/Order/:id" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App
