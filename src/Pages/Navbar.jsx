import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [showName, setShowName] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-5 py-3" style={{ background: '#0b5079' }}>
      <a
        href="index.html"
        className="navbar-brand d-flex align-items-center"
        onMouseEnter={() => setShowName(true)}
        onMouseLeave={() => setShowName(false)}
      >
        <img className="logo" src="/Images/IWCLOGO.png" alt="img" />
        {showName && (
          <h1 className="m-0 text-uppercase text-white ms-3">
            Indian Waterproofing Company
          </h1>
        )}
      </a>
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
        <div className="navbar-nav ms-auto py-0 pe-4 border-end border-5 border-primary">
          <a href="index.html" className="nav-item nav-link active text-white">
            Home
          </a>
          <a href="about.html" className="nav-item nav-link text-white">
            About
          </a>
          <a href="service.html" className="nav-item nav-link text-white">
            Service
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle text-white"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <a href="blog.html" className="dropdown-item">
                Blog Grid
              </a>
              <a href="detail.html" className="dropdown-item">
                Blog Detail
              </a>
              <a href="team.html" className="dropdown-item">
                The Team
              </a>
              <a href="testimonial.html" className="dropdown-item">
                Testimonial
              </a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link text-white">
            Contact
          </a>
        </div>
        <div className="d-none d-lg-flex align-items-center ps-4">
          <i className="fa fa-2x fa-mobile-alt text-secondary me-3"></i>
          <div>
            <h5 className="text-primary mb-1">
              <small style={{ color: '#f4f4f4' }}>Call Now</small>
            </h5>
            <h6 className="text-light m-0">+012 345 6789</h6>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
