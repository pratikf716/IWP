import React from "react";
import "./About.css"; // Import external CSS file
import img from "../Images/abouttt-3.jpg";
import img1 from "../Images/aboutt-3.jpg"; // Correct import path for image
import img2 from "../Images/abouttt-4.jpg"; // Correct import path for image


const About = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form behavior
    console.log("Form Submitted");
  };

  return (
    <>
      {/* About Section */}
      <div className="container-fluid ">
        <div className="container ">
          <div className="row gx-0 mb-3 mb-lg-0">
            <div className="col-lg-6 my-lg-5 py-lg-5">
              <div className="about-start p-5">
                <h1 className="display-5 mb-4">
                  <span style={{ color: "#0b5079" }}>How</span>
                  <span style={{ color: "skyblue" }}> we began?</span>
                </h1>

                <p>
                  The Indian Waterproofing Company has been at the forefront of
                  the waterproofing industry for over five decades, delivering
                  unparalleled solutions designed to protect and preserve
                  structures. Founded by Late Mr. Nasir Khan (1948–2020), a
                  visionary leader who earned the title of “Doctor of
                  Waterproofing” in Pune, Our company stands as a testament to
                  his dedication and expertise. Today, the legacy continues
                  under the able leadership of Mr. Asrar Khan and Nihar Khan, (
                  B.E. Civil ), who bring modern insights and technical
                  expertise to the company’s operations.
                </p>
              </div>
            </div>
            <div className="col-lg-6" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={img1} // Using the imported image variable
                  alt="About"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          <div className="row gx-0">
            <div className="col-lg-6" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolutee w-100 h-100"
                  src={img} // Using the imported image variable
                  alt="About"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 my-lg-5 py-lg-5">
              <div className="about-end p-5">
                <h1 className="display-5 mb-4">
                  <span style={{ color: "#0b5079" }}>Our</span>
                  <span style={{ color: "skyblue" }}> Vision</span>
                </h1>

                <p>
                  To establish The Indian Waterproofing Company as the industry
                  leader in providing cutting-edge waterproofing solutions while
                  maintaining an unwavering commitment to quality, innovation,
                  and customer satisfaction. We aim to redefine the standards of
                  the waterproofing industry by protecting and preserving
                  structures, ensuring their longevity, and contributing to a
                  sustainable future.
                </p>
              </div>
            </div>
            <div className="col-lg-6 my-lg-5 py-lg-5">
              <div className="about-start p-5">
                <h1 className="display-5 mb-4">
                  <span style={{ color: "#0b5079" }}>Our</span>
                  <span style={{ color: "skyblue" }}> Mission</span>
                </h1>

                <p>
                  Our mission is to deliver superior waterproofing services and
                  solutions that safeguard the integrity of structures while
                  ensuring customer satisfaction and operational excellence.
                  Guided by our founder's legacy, we commit to excellence in
                  every project, fostering innovation and adopting best
                  practices to meet the diverse needs of our clients.
                </p>
              </div>
            </div>
            <div className="col-lg-6" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={img2} // Using the imported image variable
                  alt="About"
                  style={{ objectFit: "cover" }}
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
