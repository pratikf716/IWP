import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./navbar.css";

const Navbar = () => {
  const [showName, setShowName] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg shadow-sm  px-5 py-3" style={{ background: "#0b5079" }}>
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <img className="logo" src="/Images/IWCLOGO.png" alt="img" />
        <h1 className="m-0 text-uppercase text-white ms-3">Indian Waterproofing Company</h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4 border-end border-5 border-primary" style={{ gap: "20px" }}>
          <Link to="/" className="nav-item nav-link active text-white">Home</Link>
          <Link to="/about" className="nav-item nav-link text-white">About</Link>
          <Link to="/services" className="nav-item nav-link text-white">Services</Link>
          <Link to="/projects" className="nav-item nav-link text-white">Projects</Link> {/* Ensure this path is correct */}
        </div>
      </div>
      <div className="d-none d-lg-flex align-items-center ps-4">
          <i className="fa fa-2x fa-mobile-alt text-secondary me-3"></i>
          <div>
            <h5 className="text-primary mb-1">
              <small style={{ color: "#f4f4f4" }}>Call Now</small>
            </h5>
            <h6 className="text-light m-0">+012 345 6789</h6>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
