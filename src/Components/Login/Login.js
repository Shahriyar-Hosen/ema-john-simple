import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h4 className="form-title">Login</h4>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" password="email" id="" />
          </div>
        </form>
        <div className="form-submit">
          <input type="submit" value="Login" />
        </div>
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
