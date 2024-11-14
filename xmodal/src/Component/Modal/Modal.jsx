import React, { useEffect, useRef, useState } from "react";

const Modal = ({ setIsOpen, isOpen }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: " ",
    phone: "",
    dob: "",
  });
  const modalRef = useRef();
  const handlerOutSide = () => {
    if (modalRef.current) {
      if (modalRef.current.classList.contains("modal")) {
        setIsOpen(!isOpen);
      }
    }
  };
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const entriesDate = new Date(formData.dob);

    if (!formData.email.includes("@")) {
      alert("Invalid email. Please check your email address.");
    }
    if (formData.phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }
    if (currentDate < entriesDate) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    }

    if (localStorage.getItem("formData")) {
      localStorage.setItem("formData", JSON.stringify(formData));
      setFormData({
        username: "",
        email: "",
        phone: "",
        dob: "",
      });
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("formData")) {
      localStorage.setItem("formData", {});
    }
  }, []);

  // console.log("modal", modalRef);

  return (
    <div className="modal" ref={modalRef} onClick={handlerOutSide}>
      <div className="modal-content">
        <button className="closebtn" onClick={() => setIsOpen(!isOpen)}>
          X
        </button>
        <h1 className="modal-heading">Fill Details</h1>
        <form onSubmit={handlerSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              required
              onChange={handleChange}
              value={formData.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter e-mail"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              required
              onChange={handleChange}
              value={formData.phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
              onChange={handleChange}
              value={formData.dob}
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
