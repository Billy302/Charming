import TagBar from '../Components/FrontPage/TagBar/TagBar'
import SliderSection from '../Components/FrontPage/Slider/SliderSection'
import TrendingArticle from '../Components/FrontPage/TrendingArticle/TrendingArticle'
import SelectedArticle from '../Components/FrontPage/SelectedArticle/SelectedArticel'

import { useState, useEffect } from 'react'
import LoginNav from '../../Home/Components/LoginNav/LoginNav'
import UnloginNav from '../../Home/Components/UnloginNav/UnloginNav'
import { useNavigate } from 'react-router-dom'

const Blog = (props) => {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(false)
  const [trendingArticle, setTrendingArticle] = useState([])
  const [searchKeyword, setSearchKeyword] = useState()
  const userId = localStorage.getItem('id')

  const darkModeHandler = () => {
    setDarkMode(!darkMode)
  }

  const userInput = (e) => {
    setSearchKeyword(e.target.value)
  }
  const keywordSearch = () => {
    navigate(`../blog/keyword/search?keyword=${searchKeyword}`)
  }

  // useEffect(() => {
  //     console.log(props);
  // }, []);
  // 為什麼props資料讀不到，但是可以render?

  useEffect(() => {
    fetch('http://localhost:3001/blog/article')
      .then((res) => res.json())
      .then((data) => setTrendingArticle([...data]))
  }, [])

  // <div style={{ backgroundColor: darkMode ? 'var(--gray1)' : '', transition: 'background 1s' }}>
  return (
    <>
      {localStorage.getItem('auth') == 'true' ? <LoginNav /> : <UnloginNav />}
      
      <TagBar isDarkMode={darkMode} />
      {/* <PillBtn onClick={darkModeHandler}>關燈</PillBtn> */}

      <SliderSection isDarkMode={darkMode} />
      <div>
          <input
            type="search"
            placeholder="Search product or author"
            onChange={userInput}
          />
          <input type="submit" value="搜尋" onClick={keywordSearch} />
        </div>
      <TrendingArticle
        trendingArticle={trendingArticle}
        isDarkMode={darkMode}
      />
      <SelectedArticle isDarkMode={darkMode} />
    </>
  )
}

export default Blog
