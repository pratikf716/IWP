import React from 'react';
import './Hero.css'; // Import the external CSS file

const Hero = () => {
  return (
    <div className="container-fluid bg-primary py-5 bg-hero" style={{ marginBottom: '90px' }}>
      <div className="container py-5">
        <div className="row justify-content-start">
          <div className="col-lg-8 text-center text-lg-start">
            <h2 className="display-1">Welcome to</h2>
            <h3 className="display-2">Indian Waterproofing</h3>
            <h3 className="display-2">Company</h3>
            <div className="pt-2">
              <a href="#" className="btn btn-secondary rounded-pill py-md-3 px-md-5 mx-2">
                Get A Quote
              </a>
              <a href="#" className="btn btn-outline-secondary rounded-pill py-md-3 px-md-5 mx-2">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
