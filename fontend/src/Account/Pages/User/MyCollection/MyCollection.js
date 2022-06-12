import { Link } from 'react-router-dom'
import style from "./User.module.css";
import LoginNav from '../../../../Home/Components/LoginNav/LoginNav'

function MyCollection() {
  return (
    <>
    {/* 登入後首頁 */}
      <LoginNav />
      {/* 上方選單 */}
      <nav className={style.navLeft}>
        <Link to="/BtocPage/account" className={style.unactive}>
          會員中心 <hr />
        </Link>
        <Link to="/BtocPage/shoppinglist" className={style.unactive}>
          購買清單 <hr />
        </Link>
        <Link to="/BtocPage/collection" className={style.active}>
          我的收藏 <hr />
        </Link>
      </nav>

      {/* 右側內文 */}

      <main className={style.main}>
        <h1 className={style.h1}>我的收藏</h1>
      </main>

    </>
  );
}

export default MyCollection
