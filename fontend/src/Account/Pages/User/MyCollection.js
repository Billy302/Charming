import { Link } from 'react-router-dom'
import style from "./User.module.css";
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'

function MyCollection() {
  return (
    <>
      <LoginNav />
      <BreadCrumb />
      {/* 上方選單 */}
      <nav className={style.navLeft}>
        <Link to="/account">
          會員中心 <hr />
        </Link>
        <Link to="/shoppinglist">
          購買清單 <hr />
        </Link>
        <Link to="/collection">
          我的收藏 <hr />
        </Link>
        <Link to="/notice">
          我的通知 <hr />
        </Link>
      </nav>

      {/* 內文 */}
      <main>
        <h1>我的收藏</h1>
      </main>
    </>
  )
}

export default MyCollection
