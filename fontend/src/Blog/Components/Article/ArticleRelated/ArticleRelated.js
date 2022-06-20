import classes from './ArticleRelated.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from 'react-icons/ri'

const ArticleRelated = (props) => {
  return (
    <div
      className={`${classes['article--context__related']} ${props.className}`}
    >
      <ul>
        <p>
          相關文章
          <AiOutlineArrowRight
            className={classes['article--context__related-arrow']}
          />
        </p>
        <li className={classes.container}>
          <span>
            <RiNumber1 />
          </span>
          刺青，以及刺青教會我的
        </li>
        <li className={classes.container}>
          <span>
            <RiNumber2 />
          </span>
          從躲躲藏藏，到正大光明，我的街頭塗鴉故事
        </li>
        <li className={classes.container}>
          <span>
            <RiNumber3 />
          </span>
          五條悟，來自日本，闖蕩台北街頭十年的故事
        </li>
        <li className={classes.container}>
          <span>
            <RiNumber4 />
          </span>
          電影從業人員，光鮮亮麗的背後
        </li>
        <li className={classes.container}>
          <span>
            <RiNumber5 />
          </span>
          我如何從國外業務，轉職為程式設計師
        </li>
      </ul>
    </div>
  )
}

export default ArticleRelated
