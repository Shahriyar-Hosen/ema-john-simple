import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-container">
      <div>
        <h4 className="form-title">Sign Up</h4>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" password="email" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" password="confirm-password" id="" />
          </div>
        </form>
        <div className="form-submit">
          <input type="submit" value="Sign Up" />
        </div>
        <p>
          Already have an account?
          <Link className="form-link" to="/signup">
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
