/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import './UpdateUser.css'

function UpdateUser() {
  const { id } = useParams();
  // create 3 states
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobilenumber, setMobileNumber] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setMobileNumber(result.data.mobilenumber);
        setAge(result.data.age);
      })

      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/"+id, {
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
        <form onSubmit={Update}>
          <h2>Update User</h2>

          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Mobile Number</label>
            <input
              type="text"
              placeholder="Enter Your Mobile Number"
              className="form-control"
              value={mobilenumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Your Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <br/>
          <br/>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
