import classes from './AuthorInfo.module.css'

const AuthorInfo = (props) => {
  const { authorDetail } = props
  return (
    <div className={classes['author-info']}>
      <h2>{authorDetail[0]?.author_name}</h2>
      <p>{authorDetail[0]?.author_info}</p>
    </div>
  )
}

export default AuthorInfo
