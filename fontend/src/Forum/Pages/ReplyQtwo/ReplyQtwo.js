
import {React,useState} from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";
import './ReplyQtwo.css';
import UserTable from "./UserTable";
import EditUserForm from "./EditUserForm";




// function SignIn() {


    const ReplyQone = () => {
        const usersData = [
          { id: 1, name: "1", username: "許晞彤", usertime:"2022/5/1", userreply: "一般來說,人類輕聲細語的音量約10分貝,在正常的環境裡,對話交談約60分貝,獅子可達114分貝,大象可達到118分貝。我們得承認,人類和動物有不少相似之處,獅子和大象會用吼叫聲來展現氣勢,用 肢體和聲音來恫嚇敵人,以鞏固自己的地盤,彰顯自己的勢力,人類也不遑多讓。切記!對方越是張牙舞爪,疾聲厲色,你越要穩住內心。尤其內向者平時講話比較小聲,但面對強勢的人,音量變得微弱,對方更會覺得自己有理,便失去站在平等對話的基準點。" },
          { id: 2, name: "2", username: "霍諾軒", usertime:"2022/5/1", userreply: "聲調越沉穩,越有力量。人在壓力情境下,呼吸會變得短淺,講話也因此變快。遇到態度不友善的對象,做幾個深呼吸,對控制音量和說話速度會很有幫助。在任何情況都能掌握自己的音量和說話速度,你會發現自己原來那麼有力量!等累積更多經驗與自信,散發出更穩固的氣場,就能夠反過來影響對方,引導對方的音量和語速,不自覺調整到與你相似的頻率,達到更和諧的對話。"  },

          { id: 3, name: "3", username: "趙筠榆", usertime:"2022/5/1", userreply: "勇敢直視對方的眼睛,確認他所想要表達的訊息內容。在對方說完後,以你理解的方式重述一遍:「陳副理,請問您剛剛是這個意思嗎?有沒有需要補充的地方?」詳實核對雙方認知是否一致。拿出理性專業 的態度,不卑不亢,會獲得對方更多尊重。心態上,不要把對方過度「放大」為一個很巨大的存在,不必賦予對方更高的地位,」你的恐懼就會縮小,力量就會拿回來。 最後,面對不舒服的對話情境,我們永遠可以喊暫停,另約時間溝通,或用文字溝通。" },

          { id: 4, name: "4", username: "向柏賢", usertime:"2022/5/1", userreply: "所有對話,都是為了讓彼此更了解自己,更接近想要的目標。三國時期的諸葛亮有句名言:「以柔克剛。」越不友善的溝通對象,越需要時間和耐心去卸下他的武裝,消弭彼此的隔閡。害羞內向的你,也需要給自己時間,強化自信。請繼續保持言語的善意,把每次對話都當作提升自我的機會,將使你從內而外變得更優雅、更堅強。" }

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
              <tbody>
                        <tr>
                            <th scope="row"><Link to="/AskPage">
                                  <button type="button" class="btn">
                                  回討論區
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
                            <th scope="row">2</th>
                            <td>如何和強勢的客戶溝通 ?</td>
                            <td>接案中</td>
                            <td>費鵬旭</td>
                            <td>2022/4/15</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            <div className="flex-row">
     
            


            <div className="flex-large">
                <h2></h2>



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


