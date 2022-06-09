import classes from './InfoDisplay.module.css'
import PillBtn from '../UI/PillBtn'

const InfoDisplay = (props) => {
  return (
    <div className={classes['personal-info--card__display']}>
      <h2>奔流設計</h2>
      <p>
        《以海洋為主題的台灣設計師品牌》 My Glück由Zoe及Abraham
        Jr.兩位設計師組成，以充滿希望、關懷美麗的海洋為訴求，要讓更多人再次想起海的重要與美好。
        My
        Glück的設計系列包含從上衣、零錢包到居家抱枕等貼近日常生活的用品，希望這些色彩鮮豔、繽紛活潑的海洋生物能帶給這個世界更多的快樂，讓人們、海洋生物以及整個地球環境都能永續幸福。
      </p>
      <div className={classes['personal-info--card__display-btn']}>
        <PillBtn onClick={props.onEdit}>修改文案</PillBtn>
      </div>
    </div>
  )
}

export default InfoDisplay
