import React from "react";
import logo from "./divum_logo.png";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  useNavigate,
} from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  // const call = async () => {
  //   const response = await fetch("http://localhost:5000/login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       username: document.getElementById("uname").value,
  //       passwd: document.getElementById("passwd").value,
  //     }),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   });
  //   console.log(response);
  // };

  return (
    <>
      <div className="d-flex justify-content-between flex-row mb-3 p-4">
        <div className="p-2">
          <img src={logo} alt="logo" />
        </div>
        <div className="p-lg-5">
          <button
            onClick={() => {
              navigate("/create");
            }}
            type="button"
            className="btn btn-lg btn-outline-dark"
          >
            Add
          </button>
        </div>
      </div>
      <div className="d-flex p-4">
        <table className="table table-hover table-bordered">
          <thead className="table-danger text-center">
            <tr>
              <th className="col">E-mail</th>
              <th className="col">First name</th>
              <th className="col">Last name</th>
              <th className="col">Mobile</th>
              <th className="col">DOB</th>
              <th className="col">Option</th>
            </tr>
          </thead>
          <tbody className="table-primary"></tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
