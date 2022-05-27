import Trending from './Trending';
import classes from './TrendingArticle.module.css';
import article1 from './img/article1.jpg';
import article2 from './img/article2.jpg';
import article3 from './img/article3.jpg';
import article4 from './img/article4.jpg';
import article5 from './img/article5.jpg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

const TrendingArticle = (props) => {
    return (
        <section>
            <h2 className={`${classes['trending-article--title']} ${props.isDarkMode ? classes['active--title'] : ''}`}>
                本週熱門文章
            </h2>

            <div className={classes['trending-article']}>
                {/* 這邊用最外面的 Blog.js 傳進來的 useEffect 的 json 檔來 map 出 component */}
                {props.trendingArticle.map((articleData) => {
                    return (
                        <Link to={`article/${articleData.article_id}`} key={articleData.article_id}>
                            <Trending article={articleData} img={article1} key={articleData.article_id} />
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default TrendingArticle;
