import React, { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./create.css";
import logo from "./divum_logo.png";

function Create() {
  const date = () => {
    const today = new Date();
    return String(today.getFullYear()) + "-0" + String(today.getMonth()+1) + "-" + String(today.getDate());
  };
  useEffect(() => {
    const dt = date();
    console.log(dt);
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" ,width:'100%'}}>
      <div className="logo">
        <img src={logo} alt="logo" /> 
      </div>
      <div className="form-box" style={{alignSelf:'center'}}>
        <div className="form-value">
          <form>
            <h2>Add Record</h2>
            <div id="message" className="error"></div>
            <div className="row">
              <div className="col-md-6">
                <div className="inputbox">
                  <input type="text" required />
                  <label htmlFor="">First Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="inputbox">
                  <input type="text" required />
                  <label htmlFor="">Last Name</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="inputbox">
                  <input type="email" required />
                  <label htmlFor="">Email</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="inputbox">
                  <input type="text" id="mobile" required />
                  <label htmlFor="mobile">Mobile Number</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="inputbox">
                  <input type="date" max="2023-08-30" required />
                  <label htmlFor="">Date Of Birth</label>
                </div>
                <span className="error" id="pass_err">
                  {" "}
                </span>
              </div>
              <div className="col-md-6">
                <div className="inputbox">
                  {/* <input type="" required /> */}
                  <label htmlFor="">Address</label>
                  <textarea></textarea>
                </div>
                <span className="error" id="pass_err">
                  Max50
                </span>
              </div>
            </div>
            <div className="text-center">
              <button name="submitbtn" id="submitbtn">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
