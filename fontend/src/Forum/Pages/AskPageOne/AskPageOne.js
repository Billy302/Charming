
import {React,useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";
import './AskPageOne.css';
import UserTable from "./UserTable";
import EditUserForm from "./EditUserForm";




// function SignIn() {
function AskPageOne(props) {
  const usersData = [
    { id: 1, name: "1", username: "沒有作品集,如何開始接案 ?", userclass: "接案前", userwho: "歐芷晴", userday: "	2022/4/15" },
    { id: 2, name: "2", username: "如何和強勢的客戶溝通 ?", userclass: "接案前", userwho: "費鵬旭", userday: "2022/4/15" },
    { id: 3, name: "3", username: "客戶因不明因素給負評,如何挽救 ?", userclass: "	接案中", userwho: "卓逸朗", userday: "2022/4/15" },
    { id: 4, name: "4", username: "如何評估接案預算 ?", userclass: "接案前", userwho: "馮丹麗", userday: "2022/4/15" },
    { id: 5, name: "5", username: "作品困難度比預期中的高,是否該放棄?", userclass: "	接案中", userwho: "康樂恩", userday: "2022/4/15" },
    { id: 6, name: "6", username: "客戶消失且沒有付款,如何保障自己的權益 ?", userclass: "	接案中", userwho: "何靖翰", userday: "2022/3/30" },
    { id: 7, name: "7", username: "如何兼顧進修與接案工作?", userclass: "接案前", userwho: "方彥廷", userday: "2022/3/3" },
    { id: 8, name: "8", username: "自由接案者的平均時薪?", userclass: "接案後", userwho: "梁嘉琪", userday: "2022/3/3" },
    { id: 9, name: "9", username: "如何開拓國外客戶市場?", userclass: "接案後", userwho: "胡靖睿", userday: "2022/3/3" },
    { id: 10, name: "10", username: "什麼樣特質的人適合長久接案?", userclass: "接案前", userwho: "簡柔馨", userday: "2022/3/3" },
    { id: 11, name: "11", username: "接案工作容易面臨受騙的幾件事?", userclass: "接案後", userwho: "向柏賢", userday: "2022/3/3" },
    { id: 12, name: "12", username: "如何保持創作靈感和動力?", userclass: "接案前", userwho: "許晞彤", userday: "2022/2/23" },
    { id: 13, name: "13", username: "顧客的想法相當落伍,如何委婉地告訴他?", userclass: "接案後", userwho: "霍諾軒", userday: "2022/2/23" },
    { id: 14, name: "14", username: "快三十歲了回歸職場,該注意些什麼?", userclass: "	接案中", userwho: "趙筠榆", userday: "2022/2/23" },
    { id: 15, name: "15", username: "	自由接案者的夢想是否不切實際?", userclass: "接案前", userwho: "陳裕樺", userday: "2022/2/23" },
  ];
  const initialFormState = { id: null, name: "", username: "", userdate: "", userplace:"", userfee:""  };

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
    <>
      <UnloginNav />
      <main>

      <ul class="breadcrumb">
      <li><a href="/AskPageOne">柴社</a></li>
      <li><a href="/AskPageOne">討論區</a></li>
      </ul>

      <ul class="breadcrumb">
      <li><a href="/AskPageOne">柴社</a></li>
      <li><a href="/ArtShow">活動與展覽</a></li>
      </ul>

      {/* <Link to="/AskPageOne">
        <h3>討論區</h3> 
      </Link>

      <Link to="/ArtShow">
        <h3>活動與展覽</h3>
      </Link> */}

      <div className="container">

      <div className="flex-row">

        <div className="flex-large">
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
        
        <div className="flex-large-two">
          <div>
            <h2>{editing ? "修改問題" : "新增問題"}</h2>
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
        

       
      </main>
    </>
  );
}

export default AskPageOne;
