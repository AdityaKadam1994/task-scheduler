import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleReset } from "../../store/actions";

const ResetPassword = (props) => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [conPass, setConPass] = useState(null);
  const loginDetails = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const errors = {
    email: "Email must be present",
    pass: "Password must be present",
    passlength: "Password should be greater than 8 characters",
    confirmpass: "Password doesn't match",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (loginDetails) {
      if ((email, pass, conPass == null)) {
        setEmail("");
        setPass("");
      } else if (email == loginDetails.email) {
        dispatch(
          handleReset({
            email: email,
            pass: pass,
            confirm_pass: conPass,
          })
        );
        alert("Password Reseted Successful");
        window.location.href = "#/login";
      } else {
        alert("Email not registered");
      }
    } else {
      alert("Please signup again");
      window.location.href = "/";
    }
  };

  return (
    <div className="form-wrapper">
      <form className="reset-password-form form" onSubmit={submitHandler}>
        <h2>Reset Password</h2>
        <div className="field-wrapper">
          <div>
            <label>
              Enter your email to get started. &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;
            </label>
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

export default ResetPassword;
