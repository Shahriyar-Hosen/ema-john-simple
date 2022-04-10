import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailValue = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordValue = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordValue = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("your two passwords don't match");
      return;
    }

    if (password.length < 6) {
      setError("password must 6 characters or longer");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h4 className="form-title">Sign Up</h4>
        <form onSubmit={handleCreateUser}>
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
            <input className="form-submit" type="submit" value="Sign Up" />
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
            <img src="https://i.ibb.co/5BHNVLD/google.png" alt="" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
