import { Link } from 'react-router-dom'
import style from './BreadCrumb.module.css'

function BreadCrumb() {
  return (
    <div className={style.wrap}>
      <ol className={style.breadcrumb}>
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/account">會員中心</Link>
        </li>
        <li>
          <Link to="/notice/setting">通知設定</Link>
        </li>
      </ol>
    </div>
  )
}

export default BreadCrumb
