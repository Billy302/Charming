import { Link } from 'react-router-dom'
import style from "./User.module.css";
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'

function NoticeSetting() {
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
      <main className={style.main}>
        <h1 className={style.h1}>通知設定</h1>
        <section className={style.item2}>
          <div>

          <button>a</button>
          <p>訂單更新通知</p>
          </div>
          <button>a</button>
          <p>評論通知</p>
          <button>a</button>
          <p>追蹤的文章</p>
          <button>a</button>
          <p>追蹤柴米人</p>
          <button>a</button>
          <p>柴米主題活動</p>
          <button>a</button>
          <p>柴訊報報</p>
          <button>a</button>
          <p>柴社熱門文章</p>
          <button>a</button>
          <br />
          <p>買家設定</p>
          <p>訂單更新通知</p>
          <button>a</button>
        </section>
        
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
  )
}

export default NoticeSetting
