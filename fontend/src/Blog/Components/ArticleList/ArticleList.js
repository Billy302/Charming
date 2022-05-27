import classes from './ArticleList.module.css';
import Trending from '../FrontPage/TrendingArticle/Trending';
import article1 from './img/article1.jpg';
import article2 from './img/article2.jpg';
import article3 from './img/article3.jpg';
import article4 from './img/article4.jpg';
import article5 from './img/article5.jpg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ArticleList = () => {
    const [searchArticle, setSearchArticle] = useState([]);
    const testContext = '看屁看？';

    const params = useParams();
    console.log(params.desc);

    useEffect(() => {
        fetch(`http://localhost:7000/search/${params.desc}`)
            .then((res) => res.json())
            .then((data) => setSearchArticle(data[0]));
    }, []);

    return (
        <div className="classes['article-list']">
            <h1 className="classes['article-list--title']">{`搜尋 ${testContext}`}</h1>
            <div className="classes['article-list--cards']">
                <Trending article={searchArticle} img={article1} key={searchArticle.article_id} />
            </div>
        </div>
    );
};

export default ArticleList;
