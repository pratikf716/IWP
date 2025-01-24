// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <>
//       <div className="container-fluid  bg-footer text-light py-5 content"  >
//         <div className="container py-5">
//           <div className="row g-5">
//             <div className="col-lg-3 col-md-6">
//               <h4 className="text" style={{color:'blue'}}>Get In Touch</h4>
//               <hr className="w-25 text-secondary mb-4" style={{ opacity: 1 }} />
//               <p className="mb-4" style={{color:' #04334f'}}>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
//               <p className="mb-2"style={{color:' #04334f'}}><i className="fa fa-map-marker-alt text-info me-3"></i>123 Street, New York, USA</p>
//               <p className="mb-2"style={{color:' #04334f'}}><i className="fa fa-envelope text-info me-3"></i>info@example.com</p>
//               <p className="mb-0"style={{color:' #04334f'}}><i className="fa fa-phone-alt text-info me-3"></i>+012 345 67890</p>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <h4 className="text" style={{color:'blue'}}>Our Services</h4>
//               <hr className="w-25 text-secondary mb-4" style={{ opacity: 1 }} />
//               <div className="d-flex flex-column justify-content-start"style={{color:' #04334f'}}>
//                 <a className=" mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Regular Painting</a>
//                 <a className=" mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Wall Painting</a>
//                 <a className=" mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Floor Coating</a>
//                 <a className=" mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Graffiti Removal</a>
//                 <a className=" mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Mildew Removal</a>
//                 <a className="" href="#"><i className="fa fa-angle-right me-2"></i>Window Washing</a>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <h4 className="text" style={{color:'blue'}}>Quick Links</h4>
//               <hr className="w-25 text-secondary mb-4" style={{ opacity: 1 }} />
//               <div className="d-flex flex-column justify-content-start" style={{color:' #04334f'}}>
//                 <a className=" mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</a>
//                 <a className=" mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</a>
//                 <a className=" mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Our Services</a>
//                 <a className=" mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Meet The Team</a>
//                 <a className=" mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Latest Blog</a>
//                 <a className="" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <h4 className="text" style={{color:'blue'}}>Newsletter</h4>
//               <hr className="w-25  mb-4" style={{ opacity: 1 }} />
//               <form action="">
//                 <div className="input-group"style={{color:' #04334f'}}>
//                   <input type="text" className="form-control p-3 border-0" placeholder="Your Email" />
//                   <button className="btn btn-info" style={{background:'blue'}}>Sign Up</button>
//                 </div>
//               </form>
//               <h6 className="text mt-4 mb-3">Follow Us</h6>
//               <div className="d-flex"  >
//                 <a className="btn btn-lg  btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-twitter"  style={{color:'white'}}></i></a>
//                 <a className="btn btn-lg  btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"style={{color:'white'}}></i></a>
//                 <a className="btn btn-lg btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"style={{color:'white'}}></i></a>
//                 <a className="btn btn-lg  btn-lg-square rounded-circle" href="#"><i className="fab fa-instagram"style={{color:'white'}}></i></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container-fluid  text-white py-1"  style={{background:'#0b5079'}}>
//         <div className="container" >
//           <div className="row g-0">
//             <div className="col-md-6 text-center text-md-start">
//               <p className="mb-md-0">Copyright &copy; <a className="text-white fw-bold" href="#">Your Site Name</a>. All Rights Reserved.</p>
//             </div>
//             <div className="col-md-6 text-center text-md-end">
//               <p className="mb-0">Designed by <a href="https://pawartechnologyservices.com/" target="_blank" className="footer-link" style={{ color: 'or' }}>PTS</a></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-footer text-light py-5 content">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-heading">Get In Touch</h4>
              <hr className="footer-divider" />
              <p className="footer-description">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor
              </p>
              <p className="footer-item">
                <i className="fa fa-map-marker-alt text-info me-3"></i>123 Street, New York, USA
              </p>
              <p className="footer-item">
                <i className="fa fa-envelope text-info me-3"></i>info@example.com
              </p>
              <p className="footer-item">
                <i className="fa fa-phone-alt text-info me-3"></i>+012 345 67890
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-heading">Our Services</h4>
              <hr className="footer-divider" />
              <div className="footer-links">
                <a href="#" className="footer-link">Regular Painting</a>
                <a href="#" className="footer-link">Wall Painting</a>
                <a href="#" className="footer-link">Floor Coating</a>
                <a href="#" className="footer-link">Graffiti Removal</a>
                <a href="#" className="footer-link">Mildew Removal</a>
                <a href="#" className="footer-link">Window Washing</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-heading">Quick Links</h4>
              <hr className="footer-divider" />
              <div className="footer-links">
                <a href="#" className="footer-link">Home</a>
                <a href="#" className="footer-link">About Us</a>
                <a href="#" className="footer-link">Our Services</a>
                <a href="#" className="footer-link">Meet The Team</a>
                <a href="#" className="footer-link">Latest Blog</a>
                <a href="#" className="footer-link">Contact Us</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-heading">Newsletter</h4>
              <hr className="footer-divider" />
              <form action="" className="newsletter-form">
                <div className="input-group">
                  <input type="text" className="form-control newsletter-input" placeholder="Your Email"  />
                  <button className="btn btn-info newsletter-button">Sign Up</button>
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
                Copyright &copy; <a className="text-white fw-bold" href="#">Your Site Name</a>. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
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
