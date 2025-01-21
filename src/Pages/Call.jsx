import React from "react";
import "./call.css";

const Call = () => {
  return (
    <div className="container-fluid bg-primary bg-call-to-action py-5">
      <div className="container py-5">
        <div className="row g-0 justify-content-end" style={{marginRight:'-110px'}}>
          <div className="col-lg-6 text-end custom-right-align" >
            <h1 className="display-6 mb-4" >Do You Have Any Project?</h1>
            <p className="fs-5 fw-normal" >
              Dolores sed duo clita tempor justo dolor <br></br>et stet lorem kasd
              labore dolore lorem ipsum.<br></br> At lorem lorem magna ut et, nonumy et
              labore <br></br>et tempor diam tempor erat dolor rebum sit ipsum.
            </p>
            <a href="/" className="btn btn-secondary rounded-pill py-md-2 px-md-4 mt-4">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
