import classes from './SelectedArticle.module.css'
import SelectedCard from './SelectedCard'
import selected1 from './img/selected1.jpg'
import selected3 from './img/selected3.jpg'
import selected4 from './img/selected4.jpg'
import selected6 from './img/selected6.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// render 精選文章
const SelectedArticle = (props) => {
  // 紀錄精選文章
  const [categoryArticle, setCategoryArticle] = useState([])

  const fetchSelectedData = async () => {
    const data = await fetch('http://localhost:3001/blog/renderSearch')
    const result = await data.json()
    setCategoryArticle([...result])
  }

  useEffect(() => {
    fetchSelectedData()
  }, [])

  return (
    <main>
      <p
        className={`${classes['selected-article--title']} ${
          props.isDarkMode ? classes['active--title'] : ''
        }`}
      >
        精選文章
      </p>
      <div className={classes['selected-article--layout']}>
        <Link to="search/1">
          <SelectedCard
            article={categoryArticle[0]}
            src={selected1}
            isDarkMode={props.isDarkMode}
          >
            設計大小事
          </SelectedCard>
        </Link>
        <SelectedCard
          article={categoryArticle[1]}
          src={selected6}
          isDarkMode={props.isDarkMode}
        >
          設計師專訪
        </SelectedCard>
        <SelectedCard
          article={categoryArticle[2]}
          src={selected3}
          isDarkMode={props.isDarkMode}
        >
          科技動態
        </SelectedCard>
        <SelectedCard
          article={categoryArticle[3]}
          src={selected4}
          isDarkMode={props.isDarkMode}
        >
          設計展覽
        </SelectedCard>
        <SelectedCard
          article={categoryArticle[4]}
          src={selected1}
          isDarkMode={props.isDarkMode}
        >
          國內資訊
        </SelectedCard>
        <SelectedCard
          article={categoryArticle[5]}
          src={selected6}
          isDarkMode={props.isDarkMode}
        >
          海外知識
        </SelectedCard>
      </div>
    </main>
  )
}

export default SelectedArticle
