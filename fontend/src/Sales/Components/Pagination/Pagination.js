import React from 'react'
import { Link } from 'react-router-dom'
import './Pagination.css'
function Pagination(props) {
  // 當前頁數 & 總頁數 & 路徑
  // 路徑還沒弄
  const { totalPages, currentPages, pathPages } = props
  // 建立頁數
  let list = []
  // 迴圈，秀當前頁面前後各五頁
  for (
    let i = parseInt(currentPages) - 2;
    i <= parseInt(currentPages) + 2;
    i++
  ) {
    // 最少1頁，最多到頁面總數
    if ((i >= 1) & (i <= parseInt(totalPages))) {
      list.push(
        <li>
          <Link
            to="/"
            className={['page', i == currentPages ? ' active' : ''].join('')}
          >
            {i}
          </Link>
        </li>
      )
    }
  }

  return (
    <>
      <ul className="pagination">
        {/* 到最初頁*/}
        <li className={currentPages == 1 ? 'disabled' : ''}>
          <Link to="/">
            <i className="arrow left"></i>
            <i className="arrow left"></i>
          </Link>
        </li>
        {/* 到上頁 */}
        <li>
          <Link to="/">
            <i className="arrow left"></i>
          </Link>
        </li>
        {/* 當前頁面 */}
        {list}
        {/* 到下頁 */}
        <li>
          <Link to="/">
            <i className="arrow right"></i>
          </Link>
        </li>
        {/* 到最末頁 */}
        <li className={currentPages == totalPages ? 'disabled' : ''}>
          <Link to="/">
            <i className="arrow right"></i>
            <i className="arrow right"></i>
          </Link>
        </li>
      </ul>
    </>
  )
}
export default Pagination
