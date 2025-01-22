import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="container-fluid  bg-footer text-light py-5"  style={{background:'#083b5a'}}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text">Get In Touch</h4>
              <hr className="w-25 text-secondary mb-4" style={{ opacity: 1 }} />
              <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
              <p className="mb-2"><i className="fa fa-map-marker-alt text-info me-3"></i>123 Street, New York, USA</p>
              <p className="mb-2"><i className="fa fa-envelope text-info me-3"></i>info@example.com</p>
              <p className="mb-0"><i className="fa fa-phone-alt text-info me-3"></i>+012 345 67890</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text">Our Services</h4>
              <hr className="w-25 text-secondary mb-4" style={{ opacity: 1 }} />
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Regular Painting</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Wall Painting</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Floor Coating</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Graffiti Removal</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Mildew Removal</a>
                <a className="text-light" href="#"><i className="fa fa-angle-right me-2"></i>Window Washing</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text">Quick Links</h4>
              <hr className="w-25 text-secondary mb-4" style={{ opacity: 1 }} />
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Our Services</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Meet The Team</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Latest Blog</a>
                <a className="text-light" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text">Newsletter</h4>
              <hr className="w-25 text-secondary mb-4" style={{ opacity: 1 }} />
              <form action="">
                <div className="input-group">
                  <input type="text" className="form-control p-3 border-0" placeholder="Your Email" />
                  <button className="btn btn-info">Sign Up</button>
                </div>
              </form>
              <h6 className="text mt-4 mb-3">Follow Us</h6>
              <div className="d-flex">
                <a className="btn btn-lg btn-info btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-lg btn-info btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-lg btn-info btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-lg btn-info btn-lg-square rounded-circle" href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  text-white py-4"  style={{background:'#0b5079'}}>
        <div className="container" >
          <div className="row g-0">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">Copyright &copy; <a className="text-white fw-bold" href="#">Your Site Name</a>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">Designed by <a href="https://pawartechnologyservices.com/" target="_blank" className="footer-link" style={{ color: 'orange' }}>PTS</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
