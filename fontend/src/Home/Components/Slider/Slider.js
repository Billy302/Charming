import React from 'react';
import classes from './Slider.module.css';

const Slider = (props) => {
    return (
        <img className={classes['slider--image']} src={props.src} alt=""></img>
    );
};

export default Slider;
