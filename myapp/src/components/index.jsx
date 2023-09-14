import React, { useEffect, useState } from "react";
import logo from "./divum_logo.png";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { getUser, deleteUser } from "./api";
import Swal from 'sweetalert2'

function Home() {
  const navigate = useNavigate();
  const [tab, settable] = useState([]);

  async function del(email) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteUser(email);
        if (res.status === 200) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          ).then(()=>{window.location.reload();});
        }
      }
    })
  }

  async function user() {
    const data = await getUser();
    settable(data);
  }
  useEffect(() => { user() },[]);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-row mb-3 p-4">
        <div>
          <img src={logo} className="pic" alt="logo"/>
        </div>
        <div className="p-lg-5">
          <h2>User Details</h2>
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
        <table className="table rounded shadow-lg p-3 mb-5 bg-body table-hover table-bordered">
          <thead className="table-danger text-center">
            <tr>
              <td className="col">E-mail</td>
              <td className="col">First name</td>
              <td className="col">Last name</td>
              <td className="col">Mobile</td>
              <td className="col">DOB</td>
              <td className="col">Option</td>
            </tr>
          </thead>
          <tbody className="table-light text-center">
            {tab.map((maindata, index) => {
              return (
                <tr key={index}>
                  <td> {maindata[0]}</td>
                  <td> {maindata[1]}</td>
                  <td> {maindata[2]}</td>
                  <td> {maindata[3]}</td>
                  <td> {maindata[4]}</td>
                  <td>
                    <div className="d-flex justify-content-evenly">
                      <button className="btn btn-outline-primary editbtn" onClick={() => { navigate(`/update/${maindata[0]}`) }}>Edit</button>
                      <button className="btn btn-outline-danger delbtn" onClick={() => { del(maindata[0]) }}>Delete</button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
