import React from "react";
import { Link, useLocation } from "react-router-dom";
import Style from "./Pagination.module.css";
function Pagination(props) {
  // 當前總頁數 & search字串
  const { totalPages, search } = props;

  // 取得當前網址資訊
  const location = useLocation();

  // 取得與當前頁數
  const searchParams = new URLSearchParams(location.search);
  let currentPages = searchParams.get("page") ? searchParams.get("page") : 1;

  // 建立頁數
  let list = [];
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
            to={`${
              location.pathname +
              search.replace(`page=${currentPages}`, `page=${i}`)
            }`}
            className={[
              `${Style.page}, i === parseInt(currentPages) ? ${Style.active} : '',`
            ].join("")}
          >
            {i}
          </Link>
        </li>
      );
    }
  }

  return (
    <>
      <ul className={Style.pagination}>
        {/* 到最初頁*/}
        <li
          className={`${Style.parseInt}(currentPages) === 1 ? ${Style.disabled} : ''`}
        >
          <Link
            to={`${
              location.pathname +
              search.replace(`page=${currentPages}`, `page=1`)
            }`}
          >
            <i className={`${Style.arrow} ${Style.left}`}></i>
            <i className={`${Style.arrow} ${Style.left}`}></i>
          </Link>
        </li>
        {/* 到上頁 */}
        <li className={parseInt(currentPages) === 1 ? `${Style.disabled}` : ""}>
          <Link
            to={`${
              location.pathname +
              search.replace(
                `page=${currentPages}`,
                `page=${
                  parseInt(currentPages) - 1 > 0
                    ? parseInt(currentPages) - 1
                    : 1
                }`
              )
            }`}
          >
            <i className={`${Style.arrow} ${Style.left}`}></i>
          </Link>
        </li>
        {/* 當前頁面 */}
        {list}
        {/* 到下頁 */}
        <li
          className={
            parseInt(currentPages) === totalPages ? `${Style.disabled}` : ""
          }
        >
          <Link
            to={`${
              location.pathname +
              search.replace(
                `page=${currentPages}`,
                `page=${
                  parseInt(currentPages) + 1 > totalPages
                    ? totalPages
                    : parseInt(currentPages) + 1
                }`
              )
            }`}
          >
            <i className={`${Style.arrow} ${Style.right}`}></i>
          </Link>
        </li>
        {/* 到最末頁 */}
        <li
          className={
            parseInt(currentPages) === totalPages ? `${Style.disabled}` : ""
          }
        >
          <Link
            to={`${
              location.pathname +
              search.replace(`page=${currentPages}`, `page=${totalPages}`)
            }`}
          >
            <i className={`${Style.arrow} ${Style.right}`}></i>
            <i className={`${Style.arrow} ${Style.right}`}></i>
          </Link>
        </li>
      </ul>
    </>
  );
}
export default Pagination;
