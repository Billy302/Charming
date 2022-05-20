import { Link } from 'react-router-dom'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import Footer from '../../Components/Footer/Footer'

function MyShoppingList() {
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
        <div className="memberCentre">
          <h1>購買清單</h1>
        </div>
      </main>
    </>
  )
}

export default MyShoppingList
