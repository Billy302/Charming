import React, { useState } from "react";
import UserTable from "./UserTable";
import EditUserForm from "./EditUserForm";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";
import './ArtShow.css';
import { Link } from "react-router-dom"


const ArtShow = () => {
  const usersData = [
    { id: 1, name: "1", username: "2022「世間都是貓」台日交流藝術聯展台中展", userdate: "2022-08-06~2022-09-04", userplace:"Smohouse思默好時 好睞空間", userfee:"100" },
    { id: 2, name: "2", username: "DAVID HOCKNEY EXHIBITION IN SEOUL", userdate: "2022-09-09~2023-01-31", userplace:"MUSEUM OF ART (SEMA)", userfee:"200" },
    { id: 3, name: "3", username: "The Cleaner", userdate: "2022-10-09~2023-01-09", userplace:"Louisiana Museum of Modern Art", userfee:"免費" },
    { id: 4, name: "4", username: "凝視瑪莉納", userdate: "	2022-10-11~2023-02-02", userplace:"台北美術館", userfee:"700" },
    { id: 5, name: "5", username: "畫中台北-大稻埕少年郭雪湖特展", userdate: "2022-10-20~2023-03-30", userplace:"台北探索館特展廳", userfee:"300" }
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
    

    <div className="container">
      <UnloginNav />
      
      <div className="flex-row">

      <div className="flex-large">
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
      <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>

        
        <div className="flex-large-two">
          <div>
            <h2>{editing ? "修改活動" : "新增活動"}</h2>
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

export default ArtShow;
