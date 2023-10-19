import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./create.css";
import logo from "./divum_logo.png";
import { addUser, editUser, getMail, updateUser } from "./api";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Create() {
  let { emailid } = useParams();
  const navigate = useNavigate();
  const [emailError, setmailError] = useState("");
  const [fnameError, setfnameError] = useState("");
  const [lnameError, setlnameError] = useState("");
  const [numberError, setnumberError] = useState("");
  const [addressError, setaddressError] = useState("");
  const [email, setemail] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [number, setnumber] = useState();
  const [dob, setdob] = useState();
  const [address, setaddress] = useState("");
  async function update() {
    try {
      const res = await editUser(emailid);
      setemail(res[0][0]);
      setfname(res[0][1]);
      setlname(res[0][2]);
      setnumber(parseInt(res[0][3].replace(/[^0-9]/g, "")));
      setdob(res[0][4]);
      setaddress(res[0][5]);
    } catch (error) {
      Swal.fire({
        // position: "top-end",
        icon: "error",
        title: "Server Busy :(",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  useEffect(() => {
    if (typeof emailid === "string") {
      update();
    }
  }, []);
  function title() {
    if (typeof emailid === "string") {
      return "Update Record";
    }
    return "Add New Record";
  }
  function ipEmail() {
    if (typeof emailid === "string") {
      return <input type="email" id="email" value={email} disabled={true} />;
    }
    return (
      <input
        type="email"
        id="email"
        data-testid="testEmail"
        placeholder="Enter Your Email"
        required={true}
        onChange={(Event) => {
          setemail(Event.target.value);
          checkMail();
        }}
      />
    );
  }
  async function checkMail() {
    const re1 = /^[a-z]+[0-9._-]+@[a-z.-]+\.[a-z]{2,63}$/;
    const re2 = /^[a-z]+@[a-z.-]+\.[a-z]{2,63}$/;
    if (re1.test(email) || re2.test(email)) {
      try {
        const res = await getMail(email);
        if (res[0][0]) {
          setmailError("Already Exist");
        } else {
          setmailError("");
        }
      } catch (error) {
        Swal.fire({
          // position: "top-end",
          icon: "error",
          title: "Server Busy :(",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      setmailError("Invalid email");
    }
  }
  function checkFname() {
    const re = /^[a-zA-Z]+$/;
    const isValid = re.test(fname);
    if (!isValid) {
      setfnameError("Invalid first Name");
    } else if (fname.length >= 20) {
      setfnameError("Invalid first Name");
    } else {
      setfnameError("");
    }
  }
  function checkLname() {
    const re = /^[a-zA-Z]+$/;
    const isValid = re.test(lname);
    if (!isValid) {
      setlnameError("Invalid last Name");
    } else if (lname.length >= 20) {
      setlnameError("Invalid last Name");
    } else {
      setlnameError("");
    }
  }
  function checkMoblie() {
    const re = /^\d{10}$/;
    const isValid = re.test(number);
    if (isValid) {
      setnumberError("");
    } else {
      setnumberError("Invalid Number");
    }
  }
  function checkAddr() {
    let isValid = address.length <= 50 ? true : false;
    const re = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    isValid = re.test(address);
    if (isValid) {
      setaddressError("");
    } else {
      setaddressError("enter correct address");
    }
  }
  function getDate() {
    const dt = new Date();
    const fdt = dt
      .toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .reverse()
      .join("-");
    return fdt;
  }
  async function submit(e) {
    e.preventDefault();
    const data = JSON.stringify({
      email: email,
      fname: fname,
      lname: lname,
      mobile: number,
      dob: dob,
      address: address,
    });
    let res = "";
    const flg = typeof emailid !== "string" ? true : false;
    if (flg) {
      try {
        res = await addUser(data);
      } catch (error) {
        Swal.fire({
          // position: "top-end",
          icon: "error",
          title: "Server Busy :(",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      try {
        res = await updateUser(data);
      } catch (error) {
        Swal.fire({
          // position: "top-end",
          icon: "error",
          title: "Server Busy :(",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    if (res.status === 200 && flg) {
      Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "Record Added Successfully :)",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/");
      });
    } else if (res.status === 200 && !flg) {
      Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "Record Updated Successfully :)",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/");
      });
    } else {
      Swal.fire({
        // position: "top-end",
        icon: "error",
        title: "Server Busy :(",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.reload();
      });
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div className="d-flex justify-content-between align-items-center flex-row mb-3 p-4">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="p-lg-5">
          <button
            data-testid="testBackBtn"
            onClick={() => {
              navigate("/");
            }}
            type="button"
            className="btn btn-lg btn-outline-dark"
          >
            Back
          </button>
        </div>
      </div>

      <form
        id="form"
        method="POST"
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <p>{title()}</p>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <br />
          <div className="input-group">{ipEmail()}</div>
        </div>
        <span>{emailError}</span>
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <br />
          <div className="input-group">
            <input
              type="text"
              id="fname"
              placeholder="Enter Your First Name"
              data-testid="testFname"
              value={fname}
              required={true}
              onChange={(Event) => {
                checkFname();
                setfname(Event.target.value);
              }}
            />
          </div>
        </div>
        <span>{fnameError}</span>
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <br />
          <div className="input-group">
            <input
              type="text"
              id="lname"
              placeholder="Enter Your Last Name"
              data-testid="testLname"
              value={lname}
              required={true}
              onChange={(Event) => {
                checkLname();
                setlname(Event.target.value);
              }}
            />
          </div>
        </div>
        <span>{lnameError}</span>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <br />
          <div className="input-group">
            <input
              type="number"
              id="number"
              placeholder="Enter Your number"
              data-testid="testMobile"
              value={number}
              required={true}
              onChange={(Event) => {
                checkMoblie();
                setnumber(Event.target.value);
              }}
            />
          </div>
        </div>
        <span>{numberError}</span>
        <div className="form-group">
          <label htmlFor="dob">Date Of birth</label>
          <br />
          <div className="input-group">
            <input
              type="date"
              max={getDate()}
              id="dob"
              required={true}
              data-testid="testDob"
              value={dob}
              onChange={(Event) => {
                setdob(Event.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Address">Address</label>
          <br />
          <div className="input-group">
            <textarea
              name="address"
              id="address"
              cols="29"
              rows="3"
              data-testid="testAddress"
              placeholder="Max 50"
              required={true}
              value={address}
              onChange={(Event) => {
                checkAddr();
                setaddress(Event.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <span>{addressError}</span>
        <div className="text-center">
          <button
            type="submit"
            data-testid="testBtn"
            className="btn btn-outline-danger"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
