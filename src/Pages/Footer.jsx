
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-footer text-light py-5 content " >
        <div className="container py-5">
          <div className="row g-5 ">
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-heading">Get In Touch</h4>
              <hr className="footer-divider" />
              <p className="footer-description">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor
              </p>
              <p className="footer-item">
  <i className="fa fa-map-marker-alt me-3" style={{ color: '#0b5079' }}></i>
  123 Street, New York, USA
</p>
<p className="footer-item">
  <i className="fa fa-envelope me-3" style={{ color: '#0b5079' }}></i>
  info@example.com
</p>
<p className="footer-item">
  <i className="fa fa-phone me-3" style={{ color: '#0b5079' }}></i>
  +012 345 67890
</p>

            </div>
            <div className="col-lg-3 col-md-6 ">
              <h4 className="footer-heading">Our Services</h4>
              <hr className="footer-divider" />
              <div className="footer-links" >
              <a href="#" className="footer-link">Boxtype Waterproofing Treatment</a>
<a href="#" className="footer-link">Polyurea Application</a>
<a href="#" className="footer-link">Membrane Waterproofing Treatment</a>
<a href="#" className="footer-link">Polyurethane Coating</a>
<a href="#" className="footer-link">Epoxy Coating</a>
<a href="#" className="footer-link">High-Density Polyethylene</a>

              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-heading">Quick Links</h4>
              <hr className="footer-divider" />
              <div className="footer-links">
                <a href="#" className="footer-link">Home</a>
                <a href="#" className="footer-link">About Us</a>
                <a href="#" className="footer-link">Our Services</a>
                <a href="#" className="footer-link">Our Projects</a>
                <a href="#" className="footer-link">Request a Quote</a>
             
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-heading">Newsletter</h4>
              <hr className="footer-divider" />
              <form action="" className="newsletter-form">
                <div className="input-group">
                  <input type="text" className="form-control newsletter-input" placeholder="Your Email"  />
                  <button className="btn btn-info newsletter-button " style={{background:'#0b5079',color:'white'}} >Sign Up</button>
                </div>
              </form>
              <h6 className="footer-subheading">Follow Us</h6>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-bottom text-white py-4">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                Copyright &copy; <a className="text-white fw-bold" href="#">Indian WaterProofing</a>. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0" >
                Designed by <a href="https://pawartechnologyservices.com/" target="_blank" className="footer-link">PTS</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
