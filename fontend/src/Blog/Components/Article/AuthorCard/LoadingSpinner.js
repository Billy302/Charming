import classes from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
  // 轉圈圈的圖案
  return (
    <div className={classes['loading-spinner--container']}>
      <div
        className={classes['loading-spinner--conatiner__loading-spinner']}
      ></div>
    </div>
  )
}

export default LoadingSpinner
