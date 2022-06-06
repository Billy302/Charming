import React from "react";
import { Link } from "react-router-dom";
import './UserTable.css';

const UserTable = props => (
    <div className="usertable">
  <table>
    <thead>
      <tr>
        <th>No.</th>
        <th>問題</th>
        <th>類別</th>
        <th>發表者</th>
        <th>發表日期</th>
        
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.userclass}</td>
            <td>{user.userwho}</td>
            <td>{user.userday}</td>
            
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
  </div>
);

export default UserTable;
