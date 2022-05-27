import { } from "react-router-dom"
import { Container, Table, Tab, Tabs, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ReplyQtwo'
import './ReplyQtwo.css'
import UnloginNav from "../../Home/Components/UnloginNav/UnloginNav";


// nested routes


function ReplyQtwo() {
  return (
    <div className="App">
      <header className="App-header">
      <UnloginNav />

        <Container>
        <Tabs
          defaultActiveKey="Two"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >

<Tab eventKey="/AskPageOne" title="回討論區">

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
                            <td>許晞彤</td>
                            <td>2022/5/1</td>
                            <td>一般來說,人類輕聲細語的音量約10分貝,在正常的環境裡,對話交談約60分貝,<br/>獅子可達114分貝,大象可達到118分貝。 我們得承認,人類和動物有不少相似之處,<br/>獅子和大象會用吼叫聲來展現氣勢,用肢體和聲音來恫嚇敵人,<br/>以鞏固自己的地盤,彰顯自己的勢力,人類也不遑多讓。<br/>切記!對方越是張牙舞爪,疾聲厲色,你越要穩住內心。<br/>尤其內向者平時講話比較小聲,但面對強勢的人,音量變得微弱,<br/>對方更會覺得自己有理,便失去站在平等對話的基準點。
                                </td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <th scope="row">2</th>
                            <td>費鵬旭</td>
                            <td>2022/5/1</td>
                            <td>
                            聲調越沉穩,越有力量。人在壓力情境下,呼吸會變得短淺,講話也因此變快。<br/>遇到態度不友善的對象,做幾個深呼吸,對控制音量和說話速度會很有幫助。<br/>在任何情況都能掌握自己的音量和說話速度,你會發現自己原來那麼有力量!<br/>等累積更多經驗與自信,散發出更穩固的氣場,就能夠反過來影響對方,<br/>引導對方的音量和語速,不自覺調整到與你相似的頻率,達到更和諧的對話。
                            </td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <th scope="row">3</th>
                            <td>趙筠榆</td>
                            <td>2022/5/1</td>
                            <td>
                            勇敢直視對方的眼睛,確認他所想要表達的訊息內容。<br/>在對方說完後,以你理解的方式重述一遍:「陳副理,請問您剛剛是這個意思嗎?<br/>有沒有需要補充的地方?」詳實核對雙方認知是否一致。<br/>拿出理性專業的態度,不卑不亢,會獲得對方更多尊重。<br/>心態上,不要把對方過度「放大」為一個很巨大的存在,<br/>不必賦予對方更高的地位,你的恐懼就會縮小,力量就會拿回來。<br/>最後,面對不舒服的對話情境,我們永遠可以喊暫停,另約時間溝通,或用文字溝通。
                            </td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <th scope="row">4</th>
                            <td>向柏賢</td>
                            <td>2022/5/1</td>
                            <td>
                            所有對話,都是為了讓彼此更了解自己,更接近想要的目標。<br/>三國時期的諸葛亮有句名言:「以柔克剛。」<br/>越不友善的溝通對象,越需要時間和耐心去卸下他的武裝,消弭彼此的隔閡。<br/>害羞內向的你,也需要給自己時間,強化自信。<br/>請繼續保持言語的善意,把每次對話都當作提升自我的機會,<br/>將使你從內而外變得更優雅、更堅強。
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

export default ReplyQtwo;