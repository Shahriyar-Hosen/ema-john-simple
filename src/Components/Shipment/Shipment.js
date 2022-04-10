import React, { useState } from "react";

const Shipment = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailValue = (event) => {
    setEmail(event.target.value);
  };
  const handleNameValue = (event) => {
    setEmail(event.target.value);
  };
  const handleAddressValue = (event) => {
    setPassword(event.target.value);
  };
  const handlePhoneValue = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <div>
        <h4 className="form-title">Shipping Information</h4>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="text">Name</label>
            <input
              onBlur={handleNameValue}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
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
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressValue}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              onBlur={handlePhoneValue}
              type="text"
              name="phone"
              id=""
              required
            />
            <p style={{ color: "red" }}>{error}</p>
            <input className="form-submit" type="submit" value="Add Shipping" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shipment;
