import React from "react";
import { NavLink } from "react-router";

const About = ({newColor}) => {
  return (
    <div className="about-container py-3" style={newColor}>
      <div className="container">
        <h1 className="text-center mb-4 animate__animated animate__fadeInDown">
          About TextGuru
        </h1>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 animate__animated animate__slideInLeft">
            <img
              src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Document-file-logo-by-Mansel-Brist.jpg"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 animate__animated animate__slideInRight">
            <h3>Why Choose TextGuru?</h3>
            <p className="lead">
              TextGuru is your one-stop solution for all your text formatting
              needs. Whether you're looking to transform your text to uppercase,
              lowercase, or capitalized case, TextGuru has got you covered!
            </p>
            <ul className="list-group">
              <li className="list-group-item" style={newColor}>
                ✔ Simple and intuitive interface
              </li>
              <li className="list-group-item" style={newColor}>
                ✔ Fast and efficient text transformations
              </li>
              <li className="list-group-item" style={newColor}>
                ✔ Calculate word count, character count, and reading time
              </li>
              <li className="list-group-item" style={newColor}>✔ Completely free to use</li>
            </ul>
            <NavLink
              to="/"
              className="btn btn-primary mt-4 animate__animated animate__pulse animate__infinite"
            >
              Explore Features
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
