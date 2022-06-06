import classes from './SelectedArticle.module.css';
import SelectedCard from './SelectedCard';
import selected1 from './img/selected1.jpg';
import selected3 from './img/selected3.jpg';
import selected4 from './img/selected4.jpg';
import selected6 from './img/selected6.jpg';
import { AiFillPropertySafety } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SelectedArticle = (props) => {
    const [categoryArticle, setCategoryArticle] = useState([]);
    // const params = useParams();
    // const catagoryId = params.category;

    // const catagoryArticle = async () => {
    //     const fetchData = await fetch(`http://localhost:3001/blog/search/1`);
    //     const data = await fetchData.json();
    //     catagoryArticle(data);
    // };

    useEffect(() => {
        fetch('http://localhost:3001/blog/renderSearch')
            .then((res) => res.json())
            .then((data) => {
                setCategoryArticle([...data]);
            });
    }, []);

    // useEffect(() => {
    //     fetch('http://localhost:3001/blog/search/:category')
    //         .then((res) => res.json())
    //         .then((data) => console.log(data));
    // }, []);

    return (
        <main>
            <p className={`${classes['selected-article--title']} ${props.isDarkMode ? classes['active--title'] : ''}`}>
                精選文章
            </p>
            <div className={classes['selected-article--layout']}>
                <Link to="search/1">
                    <SelectedCard article={categoryArticle[0]} src={selected1} isDarkMode={props.isDarkMode}>
                        設計大小事
                    </SelectedCard>
                </Link>
                <SelectedCard article={categoryArticle[1]} src={selected6} isDarkMode={props.isDarkMode}>
                    設計師專訪
                </SelectedCard>
                <SelectedCard article={categoryArticle[2]} src={selected3} isDarkMode={props.isDarkMode}>
                    科技動態
                </SelectedCard>
                <SelectedCard article={categoryArticle[3]} src={selected4} isDarkMode={props.isDarkMode}>
                    設計展覽
                </SelectedCard>
                <SelectedCard article={categoryArticle[4]} src={selected1} isDarkMode={props.isDarkMode}>
                    國內資訊
                </SelectedCard>
                <SelectedCard article={categoryArticle[5]} src={selected6} isDarkMode={props.isDarkMode}>
                    海外知識
                </SelectedCard>
            </div>
        </main>
    );
};

export default SelectedArticle;
