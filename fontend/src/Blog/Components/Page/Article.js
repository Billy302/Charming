import ArticleHeader from '../Article/ArticleHeader/ArticleHeader';
import ArticleContext from '../Article/ArticleContext/ArticleContext';
import ChatArea from '../Article/ChatArea/ChatArea';
import { useState, useEffect } from 'react';
import UnloginNav from '../UI/UnLoginNavbar';
import Footer from '../UI/Footer';
import { useParams } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Article = (props) => {
    const [trendingArticle, setTrendingArticle] = useState([]);
    const params = useParams();
    const articleID = params.id;

    useEffect(() => {
        fetch(`http://localhost:3001/blog/article/${articleID}`)
            .then((res) => res.json())
            .then((data) => {
                setTrendingArticle(data[0]);
            });
        // 如果這樣設定的話下面的component讀不到
        // 下面的component props.trendingArticle[0].article_title 這樣讀不到
    }, [articleID]);
    // console.log(trendingArticle[0]);
    // console.log(trendingArticle.article_title);
    return (
        <>
            <UnloginNav />
            <ArticleHeader trendingArticle={trendingArticle} />
            <ArticleContext trendingArticle={trendingArticle} />
            <ChatArea trendingArticle={trendingArticle} />
            <Footer />
        </>
    );
};

export default Article;
