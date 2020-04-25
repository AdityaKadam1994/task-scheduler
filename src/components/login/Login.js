import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const loginDetails = useSelector((state) => state.userData);

  const errors = {
    email: "Email must be present",
    pass: "Password must be present",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (loginDetails) {
      if ((email, pass == null)) {
        setEmail("");
        setPass("");
      } else if (email == loginDetails.email && pass == loginDetails.pass) {
        alert("Login Successful");
        window.location.href = "#/home";
      } else {
        alert("Email or Password incorrect");
      }
    } else {
      alert("Please signup again");
      window.location.href = "/";
    }
  };

  return (
    <div className="form-wrapper">
      <form className="login-form form" onSubmit={submitHandler}>
        <h2>Login</h2>
        <div className="field-wrapper">
          <div>
            <label>Enter your email to get started.</label>
            <br />
            <input
              type="email"
              value={email}
              name="email"
              placeholder="email address"
              onChange={(e) => setEmail(e.target.value)}
              className={email == "" ? "has-error" : null}
            />
            <p>{email == "" ? errors.email : null}</p>
          </div>

          <div>
            <label>Choose a password with at least 8 characters.</label>
            <br />
            <input
              type="password"
              value={pass}
              placeholder="password"
              onChange={(e) => setPass(e.target.value)}
              className={pass == "" ? "has-error" : null}
            />
            <p>{pass == "" ? errors.pass : null}</p>
          </div>

          <Link to="/reset_link" exact>
            Forgot Password
          </Link>
          <br />
          <br />
          <button type="submit" className="submit-btn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
