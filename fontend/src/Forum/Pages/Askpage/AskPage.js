
import {React,useState} from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";
import './AskPage.css';
// import UserTable from "./UserTable";
// import EditUserForm from "./EditUserForm";




// function SignIn() {
function AskPageOne(props) {
    
  return (
    <>
      <UnloginNav />
      <main>

      {/* <ul class="breadcrumb">
      <li><a href="/AskPage">柴社</a></li>
      <li><a href="/AskPage">討論區</a></li>
      </ul> */}

      <Link to="/AskPage">
      <button type="button" class="btn">
      討論區
      </button>
      </Link>

      <Link to="/ArtShow">
      <button type="button" class="btn">
      活動與展覽
      </button>
      </Link>

<table>
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

                          <tr>
                            <th scope="row">6</th>
                            <td>客戶消失且沒有付款,如何保障自己的權益 ?</td>
                            <td>接案後</td>
                            <td>何靖翰</td>
                            <td>2022/4/10</td>
                            <td>
                            <Link to="/">
                                <button type="button" class="btn btn-warning">
                                回應
                                </button>
                          </Link>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">7</th>
                            <td>如何兼顧進修與接案工作?</td>
                            <td>接案中</td>
                            <td>方彥廷</td>
                            <td>2022/3/21</td>
                            <td>
                            <Link to="/">
                                <button type="button" class="btn btn-warning">
                                回應
                                </button>
                          </Link>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">8</th>
                            <td>自由接案者的平均時薪?</td>
                            <td>接案後</td>
                            <td>梁嘉琪</td>
                            <td>2022/3/20</td>
                            <td>
                            <Link to="/">
                                <button type="button" class="btn btn-warning">
                                回應
                                </button>
                          </Link>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">9</th>
                            <td>如何開拓國外客戶市場?</td>
                            <td>接案後</td>
                            <td>胡靖睿</td>
                            <td>2022/3/20</td>
                            <td>
                            <Link to="/">
                                <button type="button" class="btn btn-warning">
                                回應
                                </button>
                          </Link>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">10</th>
                            <td>什麼樣特質的人適合長久接案?</td>
                            <td>接案前</td>
                            <td>簡柔馨</td>
                            <td>2022/3/7</td>
                            <td><button type="button" class="btn btn-warning" href="#">回應</button></td>
                        </tr>

                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                            <Link to="/AskPageTwo">
                                <button type="button" class="btn btn-warning">
                                下一頁
                                </button>
                          </Link>
                            </td>
                            

                        </tr>
    </tbody>
</table>




 
       
      </main>
    </>
  );
}

export default AskPageOne;
