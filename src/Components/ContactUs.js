import React from "react";
import { NavLink } from "react-router";

const ContactUs = ({ newColor }) => {
  return (
    <div className="contact-container py-5" style={newColor}>
      <div className="container">
        <h1 className="text-center mb-4 animate__animated animate__fadeInDown">
          Contact TextGuru
        </h1>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 animate__animated animate__slideInLeft">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3062/3062633.png"
              alt="Contact Us"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "400px" }}
            />
          </div>
          <div className="col-md-6 animate__animated animate__slideInRight">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary w-100"
                style={newColor}
              >
                Send Message
              </button>
            </form>
            <div className="mt-4 text-center">
              <NavLink
                to="/"
                className="btn btn-outline-secondary"
                style={newColor}
              >
                ← Back to Home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;