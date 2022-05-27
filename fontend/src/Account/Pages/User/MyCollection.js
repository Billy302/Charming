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
        <Link to="/account" className={style.active}>
          會員中心 <hr />
        </Link>
        <Link to="/shoppinglist" className={style.unactive}>
          購買清單 <hr />
        </Link>
        <Link to="/collection" className={style.unactive}>
          我的收藏 <hr />
        </Link>
        <Link to="/notice" className={style.unactive}>
          我的通知 <hr />
        </Link>
      </nav>

      {/* 右側內文 */}

      <main className={style.main}>
        <h1 className={style.h1}>我的收藏</h1>
      </main>

      {/* 左側選單 */}
      <aside className={style.aside}>
        <ul className={style.ul}>
          <li>
            <Link to="/account">基本資料</Link>
          </li>
          <li>
            <Link to="/notice/setting">通知設定</Link>
          </li>
        </ul>
      </aside>
      <div className={style.clear}></div>
    </>
  );
}

export default MyCollection
