
import {React,useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";
import './AskPageOne.css'



// function SignIn() {
function AskPageOne(props) {
  

  return (
    <>
      <UnloginNav />
      <main>
        

      <Link to="/">
        <h1>柴社</h1>
      </Link>

      <Link to="/AskPageOne">
        <h3>討論區</h3> 
      </Link>

      <Link to="/ArtShow">
        <h3>活動與展覽</h3>
      </Link>
        
         
        
        <thead>
                          <tr>
                              <th scope="col">No.</th>
                              <th scope="col">問題</th>
                              <th scope="col">類別</th>
                              <th scope="col">發表者</th>
                              <th scope="col">發表日期</th>
                              <th scope="col"></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>沒有作品集,如何開始接案 ?</td>
                              <td>接案前</td>
                              <td>歐芷晴</td>
                              <td>2022/4/15</td>
                              <td>
  
                              <Link to="/ReplyQone">
                                  <button type="button" class="btn btn-warning">
                                  回應
                                  </button>
                            </Link>
                            </td>
                          </tr>
                          <tr>
                              <th scope="row">2</th>
                              <td>如何和強勢的客戶溝通 ?</td>
                              <td>接案中</td>
                              <td>費鵬旭</td>
                              <td>2022/4/15</td>
                              <td>
  
                              <Link to="/ReplyQtwo">
                                  <button type="button" class="btn btn-warning">
                                  回應
                                  </button>
                            </Link>
                            </td>
                          </tr>
                          <tr>
                              <th scope="row">3</th>
                              <td>客戶因不明因素給負評,如何挽救 ?</td>
                              <td>接案後</td>
                              <td>卓逸朗</td>
                              <td>2022/4/15</td>
                              <td>
                              <Link to="/">
                                  <button type="button" class="btn btn-warning">
                                  回應
                                  </button>
                            </Link>
                            </td>
                          </tr>
  
                          <tr>
                              <th scope="row">4</th>
                              <td>如何評估接案預算 ?</td>
                              <td>接案前</td>
                              <td>馮丹麗</td>
                              <td>2022/4/15</td>
                              <td><button type="button" class="btn btn-warning" href="#">回應</button></td>
                          </tr>
  
                          <tr>
                              <th scope="row">5</th>
                              <td>作品困難度比預期中的高,是否該放棄?</td>
                              <td>接案中</td>
                              <td>康樂恩</td>
                              <td>2022/4/15</td>
                              <td><button type="button" class="btn btn-warning" href="#">回應</button></td>
                          </tr>
                      </tbody>

       
      </main>
    </>
  );
}

export default AskPageOne;
