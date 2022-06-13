import { Link } from 'react-router-dom'
import style from './User.module.css'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import OrderList from '../../../Sales/Pages/Order/OrderList'

function MyShoppingList() {
  return (
    <>
      <LoginNav />
      {/* 上方選單 */}
      <nav className={style.navLeft}>
        <Link to="/membercenter/account" className={style.unactive}>
          會員中心 <hr />
        </Link>
        <Link to="/membercenter/shoppinglist?page=1" className={style.active}>
          購買清單 <hr />
        </Link>
        <Link to="/membercenter/collection?page=1" className={style.unactive}>
          我的收藏 <hr />
        </Link>
      </nav>

      {/* 右側內文 */}

      <main className={style.main}>
        <OrderList />
      </main>
    </>
  )
}

export default MyShoppingList
