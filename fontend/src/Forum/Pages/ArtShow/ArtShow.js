// import {React,useState} from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";
// import './ArtShow.css'

import React, { useState } from "react";
import UserTable from "./UserTable";
import EditUserForm from "./EditUserForm";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";

const ArtShow = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette", userdate: "2022", userplace:"1f", userfee:"100" },
    { id: 2, name: "Craig", username: "siliconeidolon", userdate: "2021", userplace:"2f", userfee:"200" },
    { id: 3, name: "Ben", username: "benisphere", userdate: "2019", userplace:"3f", userfee:"300" }
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
      <h1></h1>
      <div className="flex-row">

      <div className="flex-large">
      
          <h2>活動與展覽</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
        
        <div className="flex-large">
          <div>
            <h2>{editing ? "Edit user" : "Add user"}</h2>
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
