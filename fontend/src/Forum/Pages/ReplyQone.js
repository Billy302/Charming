import { } from "react-router-dom"
import { Container, Table, Tab, Tabs, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ReplyQone.css'
import './ReplyQone'
import UnloginNav from "../../Home/Components/UnloginNav/UnloginNav";

// nested routes


function ReplyQone() {
  return (
    <div className="App">
      <header className="App-header">
      <UnloginNav />

        <Container>
        <Tabs
          defaultActiveKey="ReplyQone"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >

  <Tab eventKey="/ReplyQone" title="回討論區" >
 
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
                            <td></td>
                        </tr>
                    </tbody>
                </Table>

    


                <Table striped>
                    <thead>
                        <tr>
                            <th scope="col">序號</th>
                            <th scope="col">回應者</th>
                            <th scope="col">回應時間</th>
                            <th scope="col">回應內容</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>卓逸朗</td>
                            <td>2022/4/15</td>
                            <td>不要害怕毛遂自薦初期我找不到案主,等待案主的同時我專心剪輯自己的Podcast,<br/>讓自己的技術可以再成熟一點,同時觀望市場上是否有這樣的需求? 就在這時,<br/>讓我看到了Yale正在應徵音頻剪輯師於是我便毛遂自薦寫了一封應徵Email投遞履歷, <br/>
                                也很順利的接到了第一個案主。
                                </td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <th scope="row">2</th>
                            <td>費鵬旭</td>
                            <td>2022/4/15</td>
                            <td>利用免費資源加入接案社團現在臉書上有許多接案、Soho社團,<br/>你可以在上面尋找你可以提供服務內容的相對應社團加入。<br/>
                                目前和Podcast音頻剪輯接案的需求還不多,於是我就先加入一個相關社團。<br/>
                                雖然看似沒有幫助,但我在眾多求案貼文裡讓我找到Hoost平台正在徵求音頻接案剪輯師,<br/>
                                於是我立刻回信並且成功應徵上了他們官網的音頻剪輯師其中一員
                            </td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <th scope="row">3</th>
                            <td>趙筠榆</td>
                            <td>2022/4/15</td>
                            <td>降低成本免費上架服務平台:哈利熊
                                市面上許多接案平台都會需要你購買曝光費,<br/>也就是希望你能夠儲值一筆錢。每提案一次就會扣裡面的錢,不論你這個案子是否成交都還是會扣, <br/>
                                這對初期不穩定案子的接案者來說是非常不符合成本的,於是我找到了哈利熊! <br/>
                                他是一個免費上架服務的平台,只會抽取成交費的12%。<br/>初期我只有把自己的Podcast音頻剪輯放上去,但遲遲沒有在這個平台上接到案子, <br/>
                                不過,就在我已經幾乎忘記這件事時,有天《女人想聽的事》主持人就透過哈利熊找到我了。
                                </td>
                        </tr>
                    </tbody>
                </Table>
                </Tab>

                <Tab eventKey="/" title="" ></Tab>
                <Tab eventKey="/" title="" ></Tab>
                <Tab eventKey="/" title="" ></Tab>
                <Tab eventKey="/" title="" ></Tab>
                <Tab eventKey="/" title="" ></Tab>
                <Tab eventKey="/" title="" ></Tab>
                <Tab eventKey="/" title="" ></Tab>
                <Tab eventKey="/" title="" ></Tab>
                <Tab eventKey="/" title="" ></Tab>
                <Tab eventKey="/" title="" ></Tab>
                <Tab eventKey="/" title="" ></Tab>
                
                <Tab eventKey="/" title="新增回應" class="addreplyForm" >
                    <h2>新增回應</h2>
                    <br />
                    <Form >
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>回應者</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>回應內容</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    </Form>
                </Tab>
                </Tabs>
        </Container>
      </header>
    </div>
  );
} 

export default ReplyQone;