import classes from './SelectedCard.module.css';
import selected1 from './img/selected1.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SelectedCard = (props) => {
    return (
        <div className={classes['selected-card']}>
            <div className={classes['selected-card--context']}>
                <div className={classes['selected-card--title__test']}>
                    {props.children}
                    <div className={classes.test}>探索更多</div>
                    <div className={classes.testtest}>
                        {/* <AiOutlineArrowRight className={classes['selected-card--title__rightbtn']} /> */}
                    </div>
                </div>

                <div className={classes['selected-card--title']}>
                    {/* <h3 className={`${props.isDarkMode ? classes['active--title'] : ''}`}>{props.children}</h3> */}
                    {/* <div className={classes['selected-card--title__detail']}>
                    <AiOutlineArrowRight className={classes['selected-card--title__rightbtn']} />
                </div> */}
                </div>
                <img src={props.src} alt=""></img>
                {props.article?.map((data) => {
                    return (
                        <Link to={`article/${data.article_id}`} key={data.topictoblog_ID}>
                            <h4
                                dangerouslySetInnerHTML={{ __html: data.article_title }}
                                className={classes['selected-card--title__testtest']}
                            ></h4>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default SelectedCard;
