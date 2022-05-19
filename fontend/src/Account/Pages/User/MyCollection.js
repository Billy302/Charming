import { Link } from 'react-router-dom'
import UserHeader from '../../Components/UserHeader/UserHeader'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import Footer from '../../Components/Footer/Footer'

function MyCollection() {
  return (
    <>
      <UserHeader />
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
        <h1>我的收藏</h1>
      </main>
    </>
  )
}

export default MyCollection
