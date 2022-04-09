import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailValue = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handlePasswordValue = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };
  const handleConfirmPasswordValue = (event) => {
    console.log(event.target.value);
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("your two passwords don't match");
      return;
    }
    
  };

  return (
    <div className="form-container">
      <div>
        <h4 className="form-title">Sign Up</h4>
        <form onClick={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailValue}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordValue}
              type="password"
              password="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordValue}
              type="password"
              password="confirm-password"
              id=""
              required
            />
            <p style={{ color: "red" }}>{error}</p>
            <div className="form-submit">
              <input type="submit" value="Sign Up" />
            </div>
          </div>
        </form>

        <p>
          Already have an account?
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <div className="or-line">
          <hr />
          <span>Or</span>
          <hr />
        </div>
        <div>
          <button className="continue-google">
            <img src="../../images/google.png" alt="" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
