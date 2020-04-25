import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSignUp } from "../../store/actions";
import "./form.css";

const SignUp = (props) => {
  const [email, setEmail] = useState(null);
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);
  const [conPass, setConPass] = useState(null);

  const dispatch = useDispatch();
  const errors = {
    email: "Email must be present",
    username: "Name must be present",
    pass: "Password must be present",
    passlength: "Password should be greater than 8 characters",
    confirmpass: "Password doesn't match",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if ((email, user, pass, conPass == null)) {
      setEmail("");
      setUser("");
      setPass("");
    } else {
      dispatch(
        handleSignUp({
          email: email,
          username: user,
          pass: pass,
          confirm_pass: conPass,
        })
      );
      alert("Sign Up Successful");
      window.location.href = "#/login";
    }
  };

  return (
    <div className="form-wrapper">
      <form className="signup-form form" onSubmit={submitHandler}>
        <h2>Sign Up</h2>
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
            <label>Enter your full name.</label>
            <br />
            <input
              type="text"
              value={user}
              placeholder="John Doe"
              onChange={(e) => setUser(e.target.value)}
              className={user == "" ? "has-error" : null}
            />
            <p>{user == "" ? errors.username : null}</p>
          </div>
          <div>
            <label>Choose a password with at least 8 characters.</label>
            <br />
            <input
              type="password"
              value={pass}
              placeholder="password"
              onChange={(e) => setPass(e.target.value)}
              className={
                pass == "" || (pass && pass.length < 8) ? "has-error" : null
              }
            />
            <p>
              {pass == "" ? errors.pass : null}
              {pass && pass.length < 8 ? errors.passlength : null}
            </p>
          </div>
          <div>
            <label>Confirm password.</label>
            <br />
            <input
              type="password"
              value={conPass}
              placeholder="enter your password again"
              onChange={(e) => setConPass(e.target.value)}
              className={conPass !== pass ? "has-error" : null}
            />
            <p>{conPass !== pass ? errors.confirmpass : null}</p>
          </div>
          <button type="submit" className="submit-btn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
