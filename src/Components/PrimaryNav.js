import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom"; // Correct import

const PrimaryNav = ({
  btnText,
  newColor,
  changeColor,
  title,
  home,
  about,
  contact,
}) => {
  const [pageTitle, setTitle] = useState("Home");

  const changeTitle = (pageTitle) => {
    switch (pageTitle) {
      case "About":
        document.title = "About Us";
        break;
      case "Contact":
        document.title = "Contact Us";
        break;
      default:
        document.title = "Home";
    }
  };

  // Update document title whenever pageTitle changes
  useEffect(() => {
    changeTitle(pageTitle);
  }, [pageTitle]);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary my-3"
      style={{ padding: 0 }}
    >
      <div className="container-fluid" style={newColor}>
        <NavLink className="navbar-brand" to="/" style={newColor}>
          {title}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/"
                style={newColor}
                onClick={() => setTitle("Home")}
              >
                {home}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={newColor}
                onClick={() => setTitle("About")}
              >
                {about}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={newColor}
                onClick={() => setTitle("Contact")}
              >
                {contact}
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-light mx-2 cursor-pointer"
            style={newColor}
            onClick={changeColor}
          >
            {btnText}
          </button>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

PrimaryNav.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string,
};

PrimaryNav.defaultProps = {
  title: "TextUtils",
  home: "Home",
  about: "About TextUtils",
  contact: "Contact Us",
};

export default PrimaryNav;
