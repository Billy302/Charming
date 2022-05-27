import { Link } from "react-router-dom"
import { Container, Table, Tab, Tabs, Pagination } from 'react-bootstrap';
import UnloginNav from "../../Home/Components/UnloginNav/UnloginNav";
import 'bootstrap/dist/css/bootstrap.min.css'
// import './AskPageOne.css'

export default function Forum() {
  return (

      <div className="App">
        <header className="App-header">
       
  <UnloginNav />
          <Container>
           
          <Tabs
            defaultActiveKey="Forum"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
  
    <Tab eventKey="Forum" title="討論區">
      <Table striped>
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
  
                  </Table>
                  <Pagination className="forumPagenumber" >
                      <Pagination.First />
                      <Pagination.Item >{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      {/* <Pagination.Item active>{12}</Pagination.Item> */}
                      <Pagination.Last path="/AskPageTwo" />
                  </Pagination>
                      {/* <Sonnet /> */}
    </Tab>
  
  
  
    <Tab eventKey="profile" title="活動與展覽">
      {/* <Sonnet /> */}
      <Table striped>
                          <thead>
                              <tr>
                                  <th scope="col">No.</th>
                                  <th scope="col">活動名稱</th>
                                  <th scope="col">活動時間</th>
                                  <th scope="col">活動地點</th>
                                  <th scope="col">活動費用</th>
                                  <th scope="col"></th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <th scope="row">1</th>
                                  <td>2022「世間都是貓」台日交流藝術聯展台中展</td>
                                  <td>2022-08-06~2022-09-04 10:00:00至18:00:00</td>
                                  <td>Smohouse思默好時 好睞空間<br/>littleMOCA微當代文創</td>
                                  <td>免費參觀</td>
                                  <td>
                                  <Link to="/ArtShowOne">
                                  <button type="button" class="btn btn-warning">
                                  查看活動詳情
                                  </button>
                            </Link></td>
                              </tr>
                              <tr>
                                  <th scope="row">2</th>
                                  <td>DAVID HOCKNEY EXHIBITION IN SEOUL</td>
                                  <td>2022-09-09~2023-01-31</td>
                                  <td>MUSEUM OF ART
                                      (SEMA)</td>
                                  <td>KRW 15,000</td>
                                  <td>
                                  <Link to="/ArtShowTwo">
                                  <button type="button" class="btn btn-warning">
                                  查看活動詳情
                                  </button>
                            </Link>
                                  </td>
                              </tr>
                              <tr>
                                  <th scope="row">3</th>
                                  <td>The Cleaner</td>
                                  <td>2022-10-09~2023-01-02</td>
                                  <td>Louisiana Museum of
                                      Modern Art</td>
                                  <td>USD 30</td>
                                  <td><Link to="/ArtShowThree">
                                  <button type="button" class="btn btn-warning">
                                  查看活動詳情
                                  </button>
                            </Link>
                                  </td>
                              </tr>
  
                              <tr>
                                  <th scope="row">4</th>
                                  <td>凝視瑪莉納</td>
                                  <td>2022-10-11~2023-02-02</td>
                                  <td>台北美術館</td>
                                  <td>新台幣 300元</td>
                                  <td><Link to="/ArtShowFour">
                                  <button type="button" class="btn btn-warning">
                                  查看活動詳情
                                  </button>
                            </Link>
                                  </td>
                              </tr>
  
                              <tr>
                                  <th scope="row">5</th>
                                  <td>畫中台北-大稻埕少年郭雪湖特展</td>
                                  <td>2022-10-20~2023-03-30</td>
                                  <td>台北探索館特展廳</td>
                                  <td>新台幣 200元</td>
                                  <td><Link to="/ArtShowFive">
                                  <button type="button" class="btn btn-warning">
                                  查看活動詳情
                                  </button>
                            </Link>
                                  </td>
                              </tr>
  
  
                          </tbody>
                      </Table>
    </Tab>
  
  </Tabs>
          </Container>
        </header>
      </div>
  )
}
// export default Forum;