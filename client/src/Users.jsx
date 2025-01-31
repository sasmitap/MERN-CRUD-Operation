/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Users.css'

function Users() {
  // For creating variable and state
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res => {console.log(res)
      window.location.reload()})
    .catch(err => console.log(err))
  }
  
  return (
    <div className="  d-flex vh-100 bg-primary justify-content-center align-items-center">
     
      <div className=" w-50 bg-white rounded p-3">
       
        {/* To move to create router i.e.CreateUser */}
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <br/>
        <br/>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              // To retieve data's , use return statement
              return (
                <>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobilenumber}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={`/update/${user._id}`} className="btn btn-success">
                        Update
                      </Link>
                      <button className="btn btn-danger" 
                      onClick={(e) => handleDelete(user._id)}>Delete</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
