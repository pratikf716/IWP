import React from "react";
import "./testo.css";

const Testo = () => {
  return (
    <div className="container-fluid testimonial-section py-5">
      <div className="container py-5">
        <div className="row g-0 justify-content-end">
          <div className="col-lg-6">
            <h1 className="display-5 mb-4">Testimonials</h1>
            <div className="testimonial-carousel">
              <div className="testimonial-item">
                <p className="testimonial-text">
                  <i className="fa fa-quote-left quote-icon"></i>
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd
                  labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                  et labore et tempor diam tempor erat dolor rebum sit ipsum.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid client-img"
                   
                  />
                  <div className="ps-3">
                    <h3>Client Name</h3>
                    <span className="text-uppercase">Profession</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <p className="testimonial-text">
                  <i className="fa fa-quote-left quote-icon"></i>
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd
                  labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                  et labore et tempor diam tempor erat dolor rebum sit ipsum.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid client-img2"
                   
                  />
                  <div className="ps-3">
                    <h3>Client Name</h3>
                    <span className="text-uppercase">Profession</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testo;
