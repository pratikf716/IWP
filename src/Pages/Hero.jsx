import React from 'react';
import './Hero.css'; // Import the external CSS file
import '@fontsource/lexend-deca/900.css'; // Optional for additional weights
const Hero = () => {
  return (
    <div className="container-fluid  py-5 bg-hero" style={{ marginBottom: '0px' }}>
      <div className="container py-5">
        <div className="row justify-content-start">
          <div className="col-lg-8 text-center text-lg-start">
            <h2 className="display-1">Solution </h2>
            <h3 className="display-2" style={{fontSize:'30px'}}>  for every Leakage Problem</h3>
            
            <div className="pt-2">
              <a href="#" className="btn btn-secondary rounded-pill py-md-3 px-md-5 mx-2">
                Get A Quote
              </a>
              <a href="#" className="btn btn-outline-secondary rounded-pill py-md-3 px-md-5 mx-2">
               Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
