import React, { useState, useEffect } from 'react';
import classes from './SliderSection.module.css';
import slider1 from './img/slider1.jpg';
import slider2 from './img/slider2.jpg';
import slider3 from './img/slider3.jpg';
import Slider from './Slider.js';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const SliderSection = (props) => {
    const sliderData = [slider1, slider2, slider3];
    const [current, setCurrent] = useState(0);
    const [imgHover, setImgHover] = useState(false);

    // useEffect(() => {
    //     setInterval(() => {
    //         nextSlideHandler();
    //     }, 5000);
    // }, []);

    const maxSlide = sliderData.length - 1;

    const nextSlideHandler = () => {
        setCurrent(current === maxSlide ? 0 : current + 1);
    };
    const prevSlideHandler = () => {
        setCurrent(current === 0 ? maxSlide : current - 1);
    };

    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }

    return (
        <header>
            <div className={classes.slider}>
                <AiOutlineArrowLeft className={classes['slider--btn__left']} onClick={prevSlideHandler} />
                <AiOutlineArrowRight className={classes['slider--btn__right']} onClick={nextSlideHandler} />
                {sliderData.map((image, index) => {
                    return (
                        <div className={`${classes.slide} ${index === current ? `${classes.active}` : ''}`} key={index}>
                            {index === current && <Slider src={image} className />}
                        </div>
                    );
                })}
            </div>
        </header>
    );
};

export default SliderSection;
