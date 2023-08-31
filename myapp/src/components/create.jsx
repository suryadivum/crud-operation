import React, { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./create.css";
import logo from "./divum_logo.png";

function Create() {
  const date = () => {
    const today = new Date();
    return (
      String(today.getFullYear()) +
      "-0" +
      String(today.getMonth() + 1) +
      "-" +
      String(today.getDate())
    );
  };
  useEffect(() => {
    const dt = date();
    console.log(dt);
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <form id="form" method="POST">
        <p>Add New Record</p>
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <br />
          <div className="input-group">
            <input type="text" id="fname" placeholder="Enter Your First Name" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <br />
          <div className="input-group">
            <input type="text" id="lname" placeholder="Enter Your Last Name" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <br />
          <div className="input-group">
            <input type="email" id="email" placeholder="Enter Your Email" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <br />
          <div className="input-group">
            <input type="number" id="number" placeholder="Enter Your number" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date Of birth</label>
          <br />
          <div className="input-group">
            <input type="date" id="dob" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Address">Address</label>
          <br />
          <div className="input-group">
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="3"
              placeholder="Max 50"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-outline-danger">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
