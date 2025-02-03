import React from "react";
import "./testo.css";
import { FaFonticons } from "react-icons/fa";

const Testo = () => {
  return (
    <div className="containerss-fluid testimonial-section py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="display-5 " style={{ fontFamily: "lexend deca" }}>
            Testimonials <hr
  className="mx-auto text-primary"
  style={{
    opacity: 1,
  
    borderColor: "white", // Set the line color to white
    borderWidth: "1px", // Optional: Adjust thickness if needed
   
   
  }}
/>
          </h1>
         
        </div>
        <div className="container "></div>
        <div className="row g-0">
          <div className="col-12">
            <div
              id="testimonialCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* Dotted indicators */}
             

              {/* Carousel items */}
              <div className="carousel-inner">
                {[
                  {
                    text: "This service was amazing! I was impressed by the quality and attention to detail.",
                    name: "Jane Doe",
                    role: "Designer",
                    imgClass: "client-img",
                  },
                  {
                    text: "Fantastic support and excellent results! Highly recommended.",
                    name: "John Smith",
                    role: "Entrepreneur",
                    imgClass: "client-img2",
                  },
                  {
                    text: "I couldn’t be happier with the outcome. Thank you for your dedication.",
                    name: "Alice Brown",
                    role: "Manager",
                    imgClass: "client-img",
                  },
                  {
                    text: "The experience was seamless, and the results speak for themselves.",
                    name: "Mark Taylor",
                    role: "Developer",
                    imgClass: "client-img2",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="testimonial-item mx-auto">
                      <p className="testimonial-text">
                        <i className="fa fa-quote-left quote-icon"></i>
                        {testimonial.text}
                        <i className="fa fa-quote-right quote-icon"></i>
                      </p>
                      <div className="d-flex align-items-center justify-content-center">
                        <div className={testimonial.imgClass}></div>
                        <div className="ps-3">
                          <h3>{testimonial.name}</h3>
                          <span className="text-uppercase">{testimonial.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Custom FontAwesome Carousel controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <i className="fa-solid fa-arrow-left" style={{fontSize:'3rem', border:' 1px solid white',borderRadius:'50%',padding:'10px'}}></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
               <i className="fa-solid fa-arrow-right" style={{fontSize:'3rem', border:' 1px solid white',borderRadius:'50%',padding:'10px'}}></i>
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
