import React, { useState } from 'react'
import style from './SearchBar.module.css'
import { ImSearch } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'

// search bar component
function SearchBar(props) {
  // 紀錄使用者打了什麼
  const [searchKeyword, setSearchKeyword] = useState()
  const userInput = (e) => {
    setSearchKeyword(e.target.value)
  }

  // 按下送出後網頁跳轉
  const navigate = useNavigate()
  const keywordSearch = () => {
    navigate(`../blog/keyword/search?keyword=${searchKeyword}`)
  }

  return (
    <div className={`${style.searchbar} ${props.className}`}>
      <input
        className={style.searchInput}
        type="search"
        placeholder="搜尋文章"
        onChange={userInput}
      />
      <button className={style.searchButton} onClick={keywordSearch}>
        <ImSearch className={style.iconStyle} />
      </button>
    </div>
  )
}
export default SearchBar
