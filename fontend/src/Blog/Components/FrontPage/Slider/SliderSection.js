import React, { useState, useEffect } from 'react'
import classes from './SliderSection.module.css'
import slider1 from './img/slider1.png'
import slider2 from './img/slider2.jpeg'
import slider3 from './img/slider3.png'
import Slider from './Slider.js'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SliderSection = (props) => {
  const sliderData = [
    { image: slider1, article: 37 },
    { image: slider2, article: 31 },
    { image: slider3, article: 24 },
  ]
  const [current, setCurrent] = useState(0)

  //   setInterval(() => {
  //     nextSlideHandler()
  //   }, 5000)

  const maxSlide = sliderData.length - 1

  const nextSlideHandler = () => {
    setCurrent(current === maxSlide ? 0 : current + 1)
  }
  const prevSlideHandler = () => {
    setCurrent(current === 0 ? maxSlide : current - 1)
  }

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null
  }

  return (
    <header>
      <div className={classes.slider}>
        <AiOutlineArrowLeft
          className={classes['slider--btn__left']}
          onClick={prevSlideHandler}
        />
        <AiOutlineArrowRight
          className={classes['slider--btn__right']}
          onClick={nextSlideHandler}
        />

        {sliderData.map((image, index) => {
          return (
            <Link to={`article/${image.article}`} key={image.article}>
              <div
                className={`${classes.slide} ${
                  index === current ? `${classes.active}` : ''
                }`}
                key={index}
              >
                {index === current && <Slider src={image.image} className />}
              </div>
            </Link>
          )
        })}
      </div>
    </header>
  )
}

export default SliderSection
