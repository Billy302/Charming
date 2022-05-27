import { } from "react-router-dom"
import { Container, Table, Tab, Tabs, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ArtShow.css'
import './ArtShow'
import UnloginNav from "../../Home/Components/UnloginNav/UnloginNav";

// nested routes


function ArtShowOne() {
  return (
    <div className="App">
      <header className="App-header">
      <UnloginNav />
        <Container>
        <Tabs
          defaultActiveKey="ArtShowOne"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >

  <Tab eventKey="/ArtShowOne" title="回討論區" >
  <Card style={{ width: '80rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
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
                
                <Tab eventKey="/" title="新增活動與展覽" class="addreplyForm" >
                    <h2>新增活動與展覽</h2>
                    <br />
                    <Form >
                    <Form.Group className="mb-3" >
                        <Form.Label>回應者</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>活動時間</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>活動地點</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label>費用訊息</Form.Label>
                        <Form.Select>
                            <option>免費</option>
                            <option>100</option>
                            <option>200</option>
                            <option>300</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>活動照片</Form.Label>
                    <Form.Control type="file" />
                    </Form.Group>
                    </Form > 
                    <Button variant="secondary">送出</Button>

                </Tab>
                </Tabs>
        </Container>
      </header>
    </div>
  );
} 

export default ArtShowOne;