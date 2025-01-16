import React from 'react';
import './About.css'; // Import external CSS file
import img1 from '../Images/about-1.jpg';  // Correct import path for image
import img2 from '../Images/about-2.jpg';  // Correct import path for image

const About = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form behavior
    console.log("Form Submitted");
  };

  return (
    <>
      {/* About Section */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row gx-0 mb-3 mb-lg-0">
            <div className="col-lg-6 my-lg-5 py-lg-5">
              <div className="about-start p-5">
                <h1 className="display-5 mb-4">Welcome To Painter</h1>
                <p>
                  Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et, tempor sit sit
                  diam amet et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore
                  lorem sit. Sanctus clita duo justo et tempor magna dolore erat amet
                </p>
                <a href="" className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-6" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={img1}  // Using the imported image variable
                  alt="About"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          <div className="row gx-0">
            <div className="col-lg-6" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={img2}  // Using the imported image variable
                  alt="About"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-6 my-lg-5 py-lg-5">
              <div className="about-end p-5">
                <h1 className="display-5 mb-4">Why Choose Us?</h1>
                <p>
                  Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et, tempor sit sit
                  diam amet et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore
                  lorem sit. Sanctus clita duo justo et tempor magna dolore erat amet
                </p>
                <a href="" className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">
                  Get A Quote
                </a>
              </div>
            </div>
            <div className="col-lg-6 my-lg-5 py-lg-5">
              <div className="about-start p-5">
                <h1 className="display-5 mb-4">Welcome To Painter</h1>
                <p>
                  Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et, tempor sit sit
                  diam amet et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore
                  lorem sit. Sanctus clita duo justo et tempor magna dolore erat amet
                </p>
                <a href="" className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-6" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={img1}  // Using the imported image variable
                  alt="About"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
