// import classes from './ArticleSearch.module.css'
import Trending from '../FrontPage/TrendingArticle/Trending'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import classes from './BlogSearch.module.css'

const BlogSearch = (props) => {
  const [searchArticle, setSearchArticle] = useState([])
  const keyword = useLocation()
  // const testContext = keyword.search.slice(9)
  const search = keyword.search

  const likeSearch = async () => {
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
        {/* <h1 className="classes['article-list--title']">{`搜尋 ${testContext}`}</h1> */}
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
