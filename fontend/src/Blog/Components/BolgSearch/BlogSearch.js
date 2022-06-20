import Trending from '../FrontPage/TrendingArticle/Trending'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import classes from './BlogSearch.module.css'

// render 使用者搜尋的關鍵字
const BlogSearch = (props) => {
  // 紀錄有包含使用者欲搜尋的關鍵字的文章
  const [searchArticle, setSearchArticle] = useState([])
  // 利用 useLocation 來追蹤 query string
  const keyword = useLocation()
  const search = keyword.search

  const likeSearch = async () => {
    // 進資料庫利用 query string 做模糊搜尋來找文章
    const fetchData = await fetch(
      `http://localhost:3001/blog/keyword/search${search}`
    )
    const result = await fetchData.json()
    setSearchArticle(result)
  }

  useEffect(() => {
    likeSearch()
  }, [])

  return (
    <>
      <div className={classes['article-search']}>
        <div className={classes['article-search--card']}>
          {searchArticle.map((data, item) => {
            return (
              <Link
                to={`../blog/article/${data.article_id}`}
                key={data.article_id}
              >
                <Trending
                  article={data}
                  key={data.article_id}
                  className={classes['trenging-card']}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default BlogSearch
