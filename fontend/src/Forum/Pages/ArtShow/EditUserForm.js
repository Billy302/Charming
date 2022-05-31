import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const initialFormState = { id: null, name: "", username: "", userdate: "", userplace: "", userfee: "" };
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
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />

      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />

        <label>活動時間</label>
       <input
        type="text"
        name="userdate"
        value={user.userdate}
        onChange={handleInputChange}
      />

      <label>活動地點</label>
      <input
        type="text"
        name="userplace"
        value={user.place}
        onChange={handleInputChange}
      />

      <label>活動費用</label>
      <input
        type="text"
        name="userfee"
        value={user.fee}
        onChange={handleInputChange}
      />

      <button>{props.editing ? "Update user" : "Add user"}</button>
      {props.editing && (
        <button onClick={resetAddUser} className="button muted-button">
          Cancel
        </button>
      )}
    </form>
  );
};

export default EditUserForm;
