import React from "react";
import "./testo.css";

const Testo = () => {
  return (
    <div className="container-fluid testimonial-section py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-5 mb-5">Testimonials</h1>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-12">
            <div
              id="testimonialCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* Dotted indicators */}
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#testimonialCarousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#testimonialCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#testimonialCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#testimonialCarousel"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>

              {/* Carousel items */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="testimonial-item mx-auto">
                    <p className="testimonial-text">
                      <i className="fa fa-quote-left quote-icon"></i>
                      This service was amazing! I was impressed by the quality
                      and attention to detail.
                      <i className="fa fa-quote-right quote-icon"></i>
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="client-img"></div>
                      <div className="ps-3">
                        <h3>Jane Doe</h3>
                        <span className="text-uppercase">Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial-item mx-auto">
                    <p className="testimonial-text">
                      <i className="fa fa-quote-left quote-icon"></i>
                      Fantastic support and excellent results! Highly
                      recommended.
                      <i className="fa fa-quote-right quote-icon"></i>
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="client-img2"></div>
                      <div className="ps-3">
                        <h3>John Smith</h3>
                        <span className="text-uppercase">Entrepreneur</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial-item mx-auto">
                    <p className="testimonial-text">
                      <i className="fa fa-quote-left quote-icon"></i>
                      I couldn’t be happier with the outcome. Thank you for your
                      dedication.
                      <i className="fa fa-quote-right quote-icon"></i>
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="client-img"></div>
                      <div className="ps-3">
                        <h3>Alice Brown</h3>
                        <span className="text-uppercase">Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial-item mx-auto">
                    <p className="testimonial-text">
                      <i className="fa fa-quote-left quote-icon"></i>
                      The experience was seamless, and the results speak for
                      themselves.
                      <i className="fa fa-quote-right quote-icon"></i>
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="client-img2"></div>
                      <div className="ps-3">
                        <h3>Mark Taylor</h3>
                        <span className="text-uppercase">Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
               
              >
                <span className="carousel-control-prev-icon "></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon " ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testo;
