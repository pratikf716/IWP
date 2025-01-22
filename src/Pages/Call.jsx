import React from "react";
import "./call.css";

const Call = () => {
  return (
    <div className="container-fluid bg-primary bg-call-to-action py-5">
      <div className="container py-5">
        <div className="row g-0 justify-content-end custom-row">
          <div className="col-lg-6 custom-col">
            <h1 className="custom-heading mb-4">Do You Have Any Project?</h1>
            <p className="custom-paragraph">
              Dolores sed duo clita tempor justo dolor <br />
              et stet lorem kasd labore dolore lorem ipsum.
              <br />
              At lorem lorem magna ut et, nonumy et labore <br />
              et tempor diam tempor erat dolor rebum sit ipsum.
            </p>
            <a href="/" className="custom-button">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
