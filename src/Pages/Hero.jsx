import React from 'react';
import './Hero.css'; // Import the external CSS file

const Hero = () => {
  return (
    <div className="container-fluid bg-primary py-5 bg-hero" style={{ marginBottom: '90px' }}>
      <div className="container py-5">
        <div className="row justify-content-start">
          <div className="col-lg-8 text-center text-lg-start">
            <h1 className="display-1 text-dark">We Bring Your Home To Lively Colors</h1>
            
            <div class="pt-2">
                        <a href="" class="btn btn-secondary rounded-pill py-md-3 px-md-5 mx-2">Get A Quote</a>
                        <a href="" class="btn btn-outline-secondary rounded-pill py-md-3 px-md-5 mx-2">Contact Us</a>
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
