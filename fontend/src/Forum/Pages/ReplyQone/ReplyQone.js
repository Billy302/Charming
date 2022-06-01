
import {React,useState} from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";
import './ReplyQone.css';
import UserTable from "./UserTable";
import EditUserForm from "./EditUserForm";




// function SignIn() {


    const ReplyQone = () => {
        const usersData = [
          { id: 1, name: "1", username: "卓逸朗", usertime:"2022/4/15", userreply: "不要害怕毛遂自薦 初期我找不到案主,等待案主的同時我專心剪輯自己的Podcast,讓自己的技術可以再成熟一點,同時觀望市場上是否有這樣的需求?就在這時,讓我看到了Yale正在應徵音頻剪輯師於是我便毛遂自薦寫了一封應徵Email投遞履歷,也很順利的接到了第一個案主。" },
          { id: 2, name: "2", username: "費鵬旭", usertime:"2022/4/15", userreply: "利用免費資源加入接案社團現在臉書上有許多接案、Soho社團,你可以在上面尋找你可以提供服務內容 的相對應社團加入。目前和Podcast音頻剪輯接案的需求還不多,於是我就先加入一個相關社團。雖然看似沒有幫助,但我在眾多求案貼文裡讓我找到Hoost平台正在徵求音頻接案剪輯師,於是我立刻回信並且成功應徵上了他們官網的音頻剪輯師其中一員"  },
          { id: 3, name: "3", username: "趙筠榆", usertime:"2022/4/15", userreply: "降低成本免費上架服務平台:哈利熊市面上許多接案平台都會需要你購買曝光費,也就是希望你能夠儲值一筆錢。<br />每提案一次就會扣裡面的錢,不論你這個案子是否成交都還是會扣,這對初期不穩定案子的接案者來說是非常不符合成本的,於是我找到了哈利熊!他是一個免費上架服務的平台,只會抽取成交費的12%。初期我只有把自己的Podcast音頻剪輯放上去,但遲遲沒有在這個平台上接到案子,不過,就在我已經幾乎忘記這件事時,有天《女人想聽的事》主持人就透過哈利熊找到我了。" }
        ];
        const initialFormState = { id: null, name: "", username: "" };
      
        const [users, setUsers] = useState(usersData);
        const [editing, setEditing] = useState(false);
        const [currentUser, setCurrentUser] = useState(initialFormState);
      
        const addUser = user => {
          user.id = users.length + 1;
          setUsers([...users, user]);
        };
      
        const deleteUser = id => {
          setEditing(false);
          setUsers(users.filter(user => user.id !== id));
        };
      
        const editRow = user => {
          setEditing(true);
      
          setCurrentUser(user);
        };
      
        const updateUser = (id, updatedUser) => {
          setEditing(false);
          setUsers(users.map(user => (user.id === id ? updatedUser : user)));
        };
      
        return (
            
          <div className="container">
              <UnloginNav />

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
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            <div className="flex-row">
     
            


            <div className="flex-large">
                <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
            </div>

              <div className="flex-large-two">
                <div>
                  <h2>{editing ? "修改回應" : "新增回應"}</h2>
                  <EditUserForm
                    editing={editing}
                    setEditing={setEditing}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    updateUser={updateUser}
                    addUser={addUser}
                  />
                </div>
              </div>

              

            </div>
          </div>
        );
      };
      
      export default ReplyQone;


      //更改處
      
// function ReplyQone(props) {

    
    
//   return (
//     <>
//       <UnloginNav />
//       <main>

//       <ul class="breadcrumb">
//       <li><a href="/AskPage">柴社</a></li>
//       <li><a href="/AskPage">討論區</a></li>
//       </ul>

//       <Link to="/AskPage">
//       <button type="button" class="btn">
//       討論區
//       </button>
//       </Link>

//       <Link to="/ArtShow">
//       <button type="button" class="btn">
//       活動與展覽
//       </button>
//       </Link>

// <table>


// <thead>
//                         <tr>
//                             <th scope="col">No.</th>
//                             <th scope="col">問題</th>
//                             <th scope="col">類別</th>
//                             <th scope="col">發表者</th>
//                             <th scope="col">發表日期</th>
//                             <th scope="col"></th>
//                         </tr>
//                     </thead>


//                       <tbody>
//                           <tr>
//                               <th scope="row">1</th>
//                               <td>沒有作品集,如何開始接案 ?</td>
//                               <td>接案前</td>
//                               <td>歐芷晴</td>
//                               <td>2022/4/15</td>
//                               <td></td>
//                           </tr>                
//     </tbody>


//     <thead>
// <tr>
//                             <th scope="col">序號</th>
//                             <th scope="col">回應者</th>
//                             <th scope="col">回應時間</th>
//                             <th scope="col">回應內容</th>
//                         </tr>
// </thead>


//     <tbody>
//                         <tr>
//                             <th scope="row">1</th>
//                             <td>卓逸朗</td>
//                             <td>2022/4/15</td>
//                             <td>不要害怕毛遂自薦初期我找不到案主,等待案主的同時我專心剪輯自己的Podcast,<br/>讓自己的技術可以再成熟一點,同時觀望市場上是否有這樣的需求? 就在這時,<br/>讓我看到了Yale正在應徵音頻剪輯師於是我便毛遂自薦寫了一封應徵Email投遞履歷, <br/>
//                                 也很順利的接到了第一個案主。
//                                 </td>
//                         </tr>
//                     </tbody>

//                     <tbody>
//                         <tr>
//                             <th scope="row">2</th>
//                             <td>費鵬旭</td>
//                             <td>2022/4/15</td>
//                             <td>利用免費資源加入接案社團現在臉書上有許多接案、Soho社團,<br/>你可以在上面尋找你可以提供服務內容的相對應社團加入。<br/>
//                                 目前和Podcast音頻剪輯接案的需求還不多,於是我就先加入一個相關社團。<br/>
//                                 雖然看似沒有幫助,但我在眾多求案貼文裡讓我找到Hoost平台正在徵求音頻接案剪輯師,<br/>
//                                 於是我立刻回信並且成功應徵上了他們官網的音頻剪輯師其中一員
//                             </td>
//                         </tr>
//                     </tbody>

//                     <tbody>
//                         <tr>
//                             <th scope="row">3</th>
//                             <td>趙筠榆</td>
//                             <td>2022/4/15</td>
//                             <td>降低成本免費上架服務平台:哈利熊
//                                 市面上許多接案平台都會需要你購買曝光費,<br/>也就是希望你能夠儲值一筆錢。每提案一次就會扣裡面的錢,不論你這個案子是否成交都還是會扣, <br/>
//                                 這對初期不穩定案子的接案者來說是非常不符合成本的,於是我找到了哈利熊! <br/>
//                                 他是一個免費上架服務的平台,只會抽取成交費的12%。<br/>初期我只有把自己的Podcast音頻剪輯放上去,但遲遲沒有在這個平台上接到案子, <br/>
//                                 不過,就在我已經幾乎忘記這件事時,有天《女人想聽的事》主持人就透過哈利熊找到我了。
//                                 </td>
//                         </tr>
//                     </tbody>


// </table>




 
       
//       </main>
//     </>
//   );
// }

// export default ReplyQone;