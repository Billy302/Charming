
import {React,useState} from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";
import './AskPageTwo.css';
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
                            <th scope="row">11</th>
                            <td>接案工作容易面臨受騙的幾件事?</td>
                            <td>接案前</td>
                            <td>向柏賢</td>
                            <td>2022/3/7</td>
                            <td><button type="button" class="btn btn-warning" href="#">回應</button></td>
                        </tr>

                        <tr>
                            <th scope="row">12</th>
                            <td>如何保持創作靈感和動力?</td>
                            <td>接案前</td>
                            <td>許晞彤</td>
                            <td>2022/2/23</td>
                            <td><button type="button" class="btn btn-warning" href="#">回應</button></td>
                        </tr>

                        <tr>
                            <th scope="row">13</th>
                            <td>顧客的想法相當落伍,如何委婉地告訴他?</td>
                            <td>接案中</td>
                            <td>霍諾軒</td>
                            <td>2022/2/22</td>
                            <td><button type="button" class="btn btn-warning" href="#">回應</button></td>
                        </tr>

                        <tr>
                            <th scope="row">14</th>
                            <td>快三十歲了回歸職場,該注意些什麼?</td>
                            <td>接案中</td>
                            <td>趙筠榆</td>
                            <td>2022/2/17</td>
                            <td><button type="button" class="btn btn-warning" href="#">回應</button></td>
                        </tr>

                        <tr>
                            <th scope="row">15</th>
                            <td>自由接案者的夢想是否不切實際?</td>
                            <td>接案後</td>
                            <td>陳裕樺</td>
                            <td>2022/2/15</td>
                            <td><button type="button" class="btn btn-warning" href="#">回應</button></td>
                        </tr>

                        <tr>
                            <th scope="row"> <Link to="/AskPage">
                                <button type="button" class="btn btn-warning">
                                上一頁
                                </button>
                          </Link></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                          

                        

                        
                       
    </tbody>
</table>




 
       
      </main>
    </>
  );
}

export default AskPageOne;
