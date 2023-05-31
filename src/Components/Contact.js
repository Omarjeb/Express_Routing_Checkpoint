import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
    <div className="form-content">
    <h1>Contact Nous</h1>
    <label> Name:</label>
      <input type="text" />
      <label> Email:</label>
      <input type="email" />
      <label>Address:</label>
      <input type="text" />
      <label>Phone:</label>
      <input type="number" />
      <button className="btn-home">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
