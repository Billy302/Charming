import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Pagination.css'
function Pagination(props) {
  // 當前頁數 & 總頁數
  const { totalPages } = props

  // 取得使用者 & 與當前頁數
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  let userId = searchParams.get('id')
  let currentPages = searchParams.get('page')

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
        <li key={i}>
          <Link
            to={`${location.pathname}?id=${userId}&page=${i}`}
            className={[
              'page',
              i === parseInt(currentPages) ? ' active' : '',
            ].join('')}
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
        <li className={parseInt(currentPages) === 1 ? 'disabled' : ''}>
          <Link to={`${location.pathname}?id=${userId}&page=1`}>
            <i className="arrow left"></i>
            <i className="arrow left"></i>
          </Link>
        </li>
        {/* 到上頁 */}
        <li>
          <Link
            to={`${location.pathname}?id=${userId}&page=${
              parseInt(currentPages) - 1 > 0 ? parseInt(currentPages) - 1 : 1
            }`}
          >
            <i className="arrow left"></i>
          </Link>
        </li>
        {/* 當前頁面 */}
        {list}
        {/* 到下頁 */}
        <li>
          <Link
            to={`${location.pathname}?id=${userId}&page=${
              parseInt(currentPages) + 1 > totalPages
                ? totalPages
                : parseInt(currentPages) + 1
            }`}
          >
            <i className="arrow right"></i>
          </Link>
        </li>
        {/* 到最末頁 */}
        <li className={parseInt(currentPages) === totalPages ? 'disabled' : ''}>
          <Link to={`${location.pathname}?id=${userId}&page=${totalPages}`}>
            <i className="arrow right"></i>
            <i className="arrow right"></i>
          </Link>
        </li>
      </ul>
    </>
  )
}
export default Pagination
