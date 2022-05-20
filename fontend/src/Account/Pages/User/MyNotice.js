import { Link } from 'react-router-dom'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import Footer from '../../Components/Footer/Footer'

function MyNotice() {
  return (
    <>
      <LoginNav />
      <BreadCrumb />
      {/* 上方選單 */}
      <nav>
        <ul>
          <li>
            <Link to="/account">會員中心</Link>
          </li>
          <li>
            <Link to="/shoppinglist">購買清單</Link>
          </li>
          <li>
            <Link to="/collection">我的收藏</Link>
          </li>
          <li>
            <Link to="/notice">我的通知</Link>
          </li>
        </ul>
      </nav>
      {/* 內文 */}
      <main>
        <h1>歷史通知</h1>
        <p>訂單更新通知</p>
        <p>商品已送達：</p>
        <hr />
        <p>其他通知</p>
        <p>柴訊報報：</p>
        <hr />
      </main>
    </>
  )
}

export default MyNotice
