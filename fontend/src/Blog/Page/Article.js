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
  const params = useParams()
  const articleID = params.id

  useEffect(() => {
    fetch(`http://localhost:3001/blog/article/${articleID}`)
      .then((res) => res.json())
      .then((data) => {
        setTrendingArticle(data[0])
      })
    // 如果這樣設定的話下面的component讀不到
    // 下面的component props.trendingArticle[0].article_title 這樣讀不到
  }, [articleID])
  // console.log(trendingArticle[0]);
  // console.log(trendingArticle.article_title);
  return (
    <>
      <ScrollToTop>
        <UnloginNav />
        <Fade bottom>
          <ArticleHeader trendingArticle={trendingArticle} />
          <ArticleContext trendingArticle={trendingArticle} />
          <ChatArea trendingArticle={trendingArticle} />
        </Fade>
      </ScrollToTop>
    </>
  )
}

export default Article
