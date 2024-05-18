/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  // create 3 states
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mobilenumber, setMobileNumber] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", {
        name,
        email,
        mobilenumber,
        age,
      })
      .then(result => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="homepage">
      <div className="home">
        <form onSubmit={Submit}>
          <h2>Add User</h2>

          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Mobile Number</label>
            <input
              type="text"
              placeholder="Enter Your Mobile Number"
              className="form-control"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Your Age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <br/>
          <br/>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
