import React, { useState, useEffect } from "react";
import './EditUserForm.css';

const EditUserForm = props => {
  const initialFormState = { id: null, name: "", username: "", userclass: "", userwho: "", userday: "" };
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  );

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.editing ? props.updateUser(user.id, user) : props.addUser(user);
        resetAddUser();
      }}
    >
      <label>No.</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
        <br />
      <label>問題</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
        <br />
        <label>類別</label>
       <input
        type="text"
        name="userclass"
        value={user.userclass}
        onChange={handleInputChange}
      />
        <br />
      <label>發表者</label>
      <input
        type="text"
        name="userwho"
        value={user.userwho}
        onChange={handleInputChange}
      />
        <br />
      <label>發表日期</label>
      <input
        type="text"
        name="userday"
        value={user.userday}
        onChange={handleInputChange}
      />
      <br />

      <button>{props.editing ? "修改問題" : "新增問題"}</button>
      <br />
      {props.editing && (
        <button onClick={resetAddUser} className="button muted-button">
          取消
        </button>
      )}
    </form>
  );
};

export default EditUserForm;
