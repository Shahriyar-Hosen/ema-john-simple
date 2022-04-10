import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const Shipment = () => {
  const [user, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameValue = (event) => {
    setName(event.target.value);
  };
  const handleAddressValue = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneValue = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, address, phone };
    console.log(shipping);
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
              value={user?.email}
              readOnly
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
