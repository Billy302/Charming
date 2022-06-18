import classes from './AuthorHeader.module.css'
import defaultImage from './blog.png'
const AuthorHeader = (props) => {
  // render 作者的個人頁面 (logo 以及 banner)

  const { authorDetail } = props
  return (
    <div className={classes['author-pic']}>
      <div className={classes['author-banner']}>
        <img src={defaultImage} alt="banner" />
      </div>
      <div className={classes['author-logo']}>
        <img
          src={`http://localhost:3000/blog/image/${authorDetail[0]?.author_logo}.webp`}
          alt="author_logo"
        />
      </div>
    </div>
  )
}
export default AuthorHeader
