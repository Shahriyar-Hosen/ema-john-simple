import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailValue = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordValue = (event) => {
    setPassword(event.target.value);
  };
  const handleUserSignIn = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form-container">
      <div>
        <h4 className="form-title">Login</h4>
        <form onSubmit={handleUserSignIn}>
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
        </form>
        <input className="form-submit" type="submit" value="Login" />
        <p>
          New to Ema-john?
          <Link className="form-link" to="/signup">
            Create New Account
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

export default Login;
