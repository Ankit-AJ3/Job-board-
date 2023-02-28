import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);



  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Contact Number", JSON.stringify(phone));
      localStorage.setItem("Category", JSON.stringify(profession));
      localStorage.setItem(
        "Password",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }
  return (
    <>
      <div>
        {" "}
        {login ? (

          <form onSubmit={handleFormSubmit}>
            <div><h1 style={{
              textAlign: "center",
              color: "red"
            }}>JOB BOARD</h1>

            </div>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="Phone"
                className="form-control"
                placeholder="Enter contact no"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Choose your Category</label>
              <Form.Control
                as="select"
                onChange={(event) => setProfession(event.target.value)}
              >
                <option>Select</option>
                <option>Employer</option>
                <option>Employee</option>
              </Form.Control>
            </div>
            <br></br>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Sign Up
            </button>
            <p onClick={handleClick} className="forgot-password text-right">
              Already registered{" "}log in?

            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
      </div>

    </>
  );
}

export default Registration;
