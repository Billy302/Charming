import React, { useState } from "react";
import style from 'animate.css';
import classes from "./SliderSection.module.css";
import slider1 from "../../Assets/product1.png";
import slider2 from "../../Assets/product2.png";
import slider3 from "../../Assets/product3.png";
import slider4 from "../../Assets/product3.png";
import slider5 from "../../Assets/product3.png";
import Slider from "../Slider/Slider";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const SliderSection = (props) => {
    // 中間照片
  const sliderData = [slider1, slider2, slider3, slider4, slider5];
  const [current, setCurrent] = useState(0);
  const [imgHover, setImgHover] = useState(false);
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
        <AiOutlineArrowLeft
          className={classes["slider--btn__left"]}
          onClick={prevSlideHandler}
        />
        <AiOutlineArrowRight
          className={classes["slider--btn__right"]}
          onClick={nextSlideHandler}
        />
        {sliderData.map((image, index) => {
          return (
            <>
              <div
                className={`${classes.slide} ${
                  index === current ? `${classes.active}` : ""
                }`} key={index}>
                {index === current && (
                  <Slider src={image} className={classes.picture} />
                )}
              </div>
              <div
                className={`${classes.slide} ${
                  index === current ? `${classes.active}` : ""
                }`} key={index}>
                {index === current && (
                  <Slider src={image} className={classes.picture} />
                )}
              </div>
              <div
                className={`${classes.slide} ${
                  index === current ? `${classes.active}` : ""
                }`} key={index}>
                {index === current && (
                  <Slider src={image} className={classes.picture} />
                )}
              </div>
            </>
          );
        })}
      </div>
    </header>
  );
};

export default SliderSection;
