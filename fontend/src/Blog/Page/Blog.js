// import TagBar from '../Components/FrontPage/TagBar/TagBar'
import PillBtn from '../Components/UI/PillBtn'
import SliderSection from '../Components/FrontPage/Slider/SliderSection'
import TrendingArticle from '../Components/FrontPage/TrendingArticle/TrendingArticle'
import SelectedArticle from '../Components/FrontPage/SelectedArticle/SelectedArticel'
import UnloginNav from '../Components/UI/UnLoginNavbar'
import Footer from '../Components/UI/Footer'
import { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import LoginNav from '../Components/SearchBar/LoginNav'
import { useLocation } from 'react-router-dom'

const Blog = (props) => {
  const [darkMode, setDarkMode] = useState(false)
  const [trendingArticle, setTrendingArticle] = useState([])

  const darkModeHandler = () => {
    setDarkMode(!darkMode)
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
      <UnloginNav />
      <LoginNav />
      {/* <TagBar isDarkMode={darkMode} /> */}
      {/* <PillBtn onClick={darkModeHandler}>關燈</PillBtn> */}
      <SliderSection isDarkMode={darkMode} />
      <TrendingArticle
        trendingArticle={trendingArticle}
        isDarkMode={darkMode}
      />
      <SelectedArticle isDarkMode={darkMode} />
    </>
  )
}

export default Blog
