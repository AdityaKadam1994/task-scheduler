import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ResetPassLink = (props) => {
  const [email, setEmail] = useState(null);
  const loginDetails = useSelector((state) => state.userData);
  const errors = {
    email: "Email must be present",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (loginDetails) {
      if (email == null) {
        setEmail("");
      } else if (email == loginDetails.email) {
        alert("Please check your email for reset link..");
        window.location.href = "#/reset_password";
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
      <form className="reset-link-form form" onSubmit={submitHandler}>
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
          <button type="submit" className="submit-btn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassLink;
