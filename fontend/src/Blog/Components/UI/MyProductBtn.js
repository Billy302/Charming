import classes from './MyProductBtn.module.css'

const MyProductBtn = (props) => {
  return (
    <input
      value={props.value}
      type={props.type}
      form={props.form}
      className={`${classes.btn} ${props.className}`}
      onClick={props.onClick}
    />
  )
}

export default MyProductBtn
