import React from 'react'
import MyButton from '../Components/MyButton'

function SignUpInfo() {
  return (
    <main>
      <h1>基本資料</h1>
      <div className="content">
        <form>
          <label>姓名</label>
          <input type="text" />
          <input id="Male" type="radio" name="myGender" value="male" />
          <label for="Male">
            <img src={require('../images/Avatar3.png')} className="gender" />
            男性
          </label>
          <input id="Female" type="radio" name="myGender" value="Female" />
          <label for="Female">
            <img src={require('../images/Avatar2.png')} className="gender" />
            女性
          </label>
          <input id="Other" type="radio" name="myGender" value="Other" />
          <label for="Other">
            <img src={require('../images/Avatar1.png')} className="gender" />
            其他
          </label>
          <label>生日</label>
          <input type="date" />
          <label>E-mail</label>
          <input type="email" />
          <label>連絡電話</label>
          <input type="text" />
          <label for="location">所在地區</label>
          <select id="location" name="location">
            <option></option>
            <option>高雄</option>
            <option>台北</option>
            <option>台中</option>
          </select>
          <label>我感興趣的商品：</label>
          <input id="" type="radio" name="myProduct" value="" />
          <label for="">品牌宣傳</label>
          <input id="" type="radio" name="myProduct" value="" />
          <label for="">網頁設計</label>
          <input id="" type="radio" name="myProduct" value="" />
          <label for="">攝影取像</label>
          <input id="" type="radio" name="myProduct" value="" />
          <label for="">UI/UX</label>
          <input id="" type="radio" name="myProduct" value="" />
          <label for="">平面設計</label>

          <label>我感興趣的作品集：</label>
          <input id="" type="radio" name="myProduct" value="" />
          <label for="">品牌宣傳</label>
          <input id="" type="radio" name="myProduct" value="" />
          <label for="">網頁設計</label>
          <input id="" type="radio" name="myProduct" value="" />
          <label for="">攝影取像</label>
          <input id="" type="radio" name="myProduct" value="" />
          <label for="">UI/UX</label>
          <input id="" type="radio" name="myProduct" value="" />
          <label for="">平面設計</label>
          <input id="" type="radio" name="myProduct" value="" />
          <label for="">工業設計</label>
          <input id="" type="radio" name="myProduct" value="" />
          <label for="">建築設計</label>

          <label>我感興趣的文章：</label>
          <input id="" type="radio" name="myArticle" value="" />
          <label for="">最新消息</label>
          <input id="" type="radio" name="myArticle" value="" />
          <label for="">設計大小事</label>
          <input id="" type="radio" name="myArticle" value="" />
          <label for="">設計師專訪</label>
          <input id="" type="radio" name="myArticle" value="" />
          <label for="">科技動態</label>
          <input id="" type="radio" name="myArticle" value="" />
          <label for="">設計展覽</label>
          <input id="" type="radio" name="myArticle" value="" />
          <label for="">國內資訊</label>
          <input id="" type="radio" name="myArticle" value="" />
          <label for="">海外知識</label>

          <MyButton />
        </form>
      </div>
    </main>
  )
}

export default SignUpInfo
