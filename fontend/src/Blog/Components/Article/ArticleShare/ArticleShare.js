import { FaFacebookSquare, FaLine, FaTwitterSquare } from 'react-icons/fa'
import classes from './ArticleShare.module.css'
import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
} from 'react-share'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const ArticleShare = (props) => {
  const params = useParams()
  const currentArticle = params.id

  // 分享這篇文章 (看後面的params id)
  const shareUrl = `http://localhost:3000/blog/article/${currentArticle}`

  return (
    <div className={`${classes['article--share']} ${props.className}`}>
      <FacebookShareButton url={shareUrl}>
        <FaFacebookSquare
          className={`${classes['article--share__icon']} ${classes['facebook-icon']}`}
        />
      </FacebookShareButton>
      <LineShareButton url={shareUrl}>
        <FaLine
          className={`${classes['article--share__icon']} ${classes['line-icon']}`}
        />
      </LineShareButton>
      <TwitterShareButton url={shareUrl}>
        <FaTwitterSquare
          className={`${classes['article--share__icon']} ${classes['twitter-icon']}`}
        />
      </TwitterShareButton>
    </div>
  )
}

export default ArticleShare
