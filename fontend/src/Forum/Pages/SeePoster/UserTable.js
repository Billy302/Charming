import React from "react";
import { Link } from "react-router-dom";

const UserTable = props => (
  
  <table>
    
    <thead>
      <tr>
        <th>No.</th>
        <th>活動名稱</th>
        <th>活動時間</th>
        <th>活動地點</th>
        <th>活動費用</th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.userplace}</td>
            <td>{user.userdate}</td>
            <td>{user.userfee}</td>
            <td>


              <button
                className="button muted-button"
                onClick={() => {
                  props.editRow(user);
                }}
              >
                修改
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                刪除
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
