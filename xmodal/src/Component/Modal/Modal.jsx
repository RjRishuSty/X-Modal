import React from "react";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1 className="modal-heading">Fill Details</h1>
        <form>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter e-mail"
              required
            />
          </div>
          <div className="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="form-group">
            <label for="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
