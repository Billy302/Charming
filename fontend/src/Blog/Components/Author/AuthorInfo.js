import classes from './AuthorInfo.module.css'

const AuthorInfo = (props) => {
  // render 作者的名字以及個人狀態
  const { authorDetail } = props

  return (
    <div className={classes['author-info']}>
      <h2>{authorDetail[0]?.author_name}</h2>
      <p>{authorDetail[0]?.author_info}</p>
    </div>
  )
}

export default AuthorInfo
