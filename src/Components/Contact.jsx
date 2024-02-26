import React from "react";
import "./about.css"; // Import the corresponding CSS file

function Contact() {
  return (
    <div className="Contact">
      <h1 className="Contact-title">Contact Us</h1>
      <form className="Contact-form">
        <input type="text" className="Contact-input" placeholder="Your Name" />
        <input
          type="email"
          className="Contact-input"
          placeholder="Your Email"
        />
        <textarea
          className="Contact-textarea"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" className="Contact-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
