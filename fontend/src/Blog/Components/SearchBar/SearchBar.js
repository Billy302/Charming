import React, { useState } from 'react'
import style from './SearchBar.module.css'
import { ImSearch } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'

function SearchBar(props) {
  const [searchKeyword, setSearchKeyword] = useState()
  const userId = localStorage.getItem('id')
  // const searchParams = new URLSearchParams(location.search)

  // let userId = searchParams.get('id') ? searchParams.get('id') : ''

  const navigate = useNavigate()

  const userInput = (e) => {
    setSearchKeyword(e.target.value)
  }

  const keywordSearch = () => {
    navigate(`../blog/keyword/search?keyword=${searchKeyword}`)
  }

  return (
    //固定住nav在下移的時候不動
    <div className={style.searchbar}>
      <input
        className={style.searchInput}
        type="search"
        placeholder="Search.."
        onChange={userInput}
      />
      <button className={style.searchButton} onClick={keywordSearch}>
        <ImSearch className={style.iconStyle} />
      </button>
    </div>
  )
}
export default SearchBar
