import React from 'react'
import classes from './Slider.module.css'

const Slider = (props) => {
  return (
    <div className={classes.slide}>
      <img className={classes['slider--image']} src={props.src} alt=""></img>
    </div>
  )
}

export default Slider
