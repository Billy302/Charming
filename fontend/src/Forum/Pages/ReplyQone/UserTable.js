import React from "react";

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>序號</th>
        <th>回應者</th>
        <th>回應時間</th>
        <th>回應內容</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.usertime}</td>
            <td>{user.userreply}</td>
            <td>{user.userblank}</td>
            

            <td>
              <button
                className="button muted-button"
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
