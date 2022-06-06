import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const initialFormState = { id: null, name: "", username: "", usertime: "", userreply: "" };
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
      <label>序號</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />

      <label>回應者</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />

        <label>回應時間</label>
        <input
        type="text"
        name="usertime"
        value={user.usertime}
        onChange={handleInputChange}
      />
        <label>回應內容</label>
        <input
        type="text" rows="5"
        name="userreply"
        value={user.userreply}
        onChange={handleInputChange}
      />
      

        


  


      <button>{props.editing ? "修改回應" : "新增回應"}</button>
      {props.editing && (
        <button onClick={resetAddUser} className="button muted-button">
          Cancel
        </button>
      )}
    </form>
  );
};

export default EditUserForm;
