import { Link } from 'react-router-dom'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import Footer from '../../Components/Footer/Footer'

function NoticeSetting() {
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

      {/* 左側選單 */}
      <aside>
        <div className=".navLeft">
          <ul>
            <li>
              <Link to="/account">會員中心</Link>
            </li>
            <li>
              <Link to="/notice/setting">通知設定</Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* 右側內文 */}
      <main>
        <section>
          <h1>通知設定</h1>
          <button>a</button>
          <p>訂單更新通知</p>
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
    </>
  )
}

export default NoticeSetting
