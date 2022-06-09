import ArticleHeader from '../Components/Article/ArticleHeader/ArticleHeader'
import ArticleContext from '../Components/Article/ArticleContext/ArticleContext'
import ChatArea from '../Components/Article/ChatArea/ChatArea'
import { useState, useEffect } from 'react'
import UnloginNav from '../Components/UI/UnLoginNavbar'
import Footer from '../Components/UI/Footer'
import { useParams } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import ScrollToTop from '../Components/UI/ScrollToTop'

const Article = (props) => {
  const [trendingArticle, setTrendingArticle] = useState([])
  const [isSaveArticle, setIsSaveArticle] = useState(true)
  const [isFollowingAuthor, setIsFollowingAuthor] = useState(null)

  const params = useParams()
  const articleID = params.id

  const userid = localStorage.getItem('id')

  // render 整篇 article 文章

  const fetchArticleAndAuthor = async () => {
    const articleData = await fetch(
      `http://localhost:3001/blog/article/${articleID}`
    )
    const articleResult = await articleData.json()
    setTrendingArticle(articleResult[0])
    const authorData = await fetch(
      `http://localhost:3001/blog/follow/render?userid=${userid}&author=${trendingArticle.author_id}`
    )
    const dataResult = await authorData.json()
    if (dataResult.length === 0) {
      setIsFollowingAuthor(false)
    } else setIsFollowingAuthor(true)
  }

  // const fetchFollowAuthor = async () => {
  //   const data = await fetch(
  //     `http://localhost:3001/blog/follow/render?userid=${userid}&author=${trendingArticle.author_id}`
  //   )
  //   const result = await data.json()
  //   setIsFollowingAuthor(result[0])
  // }

  useEffect(() => {
    fetchArticleAndAuthor()
    // fetchFollowAuthor()
  }, [])

  return (
    <>
      <ScrollToTop>
        <UnloginNav />
        {/* <Fade bottom> */}
        <ArticleHeader trendingArticle={trendingArticle} />
        <ArticleContext
          trendingArticle={trendingArticle}
          isFollowingAuthor={isFollowingAuthor}
        />
        <ChatArea trendingArticle={trendingArticle} />
        {/* </Fade> */}
      </ScrollToTop>
    </>
  )
}

export default Article
