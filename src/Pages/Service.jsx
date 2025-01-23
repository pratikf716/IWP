
import "./Service.css";

const Service = () => {
  const services = [
    { icon: "fa-paint-brush", title: "Regular Painting" },
    { icon: "fa-paint-roller", title: "Wall Painting" },
    { icon: "fa-brush", title: "Floor Coating" },
    { icon: "fa-eraser", title: "Graffiti Removal" },
    { icon: "fa-spray-can", title: "Mildew Removal" },
    { icon: "fa-city", title: "Window Washing" },
  ];

  return (
    <div className="container-fluid ">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
          <h1 className="display-5">Professional Painting Services</h1>
          <hr className="w-25 mx-auto text-primary" style={{ opacity: 1 }} />
        </div>
        <div className="row gy-4 gx-3" >
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 pt-5">
              <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0" style={{backgroundImage:''}} >
                <div className="service-icon p-3">
                  <div>
                    <i className={`fa fa-2x ${service.icon}`}></i>
                  </div>
                </div>
                <h3 className="mt-5">{service.title}</h3>
                <a className="btn shadow-none text-secondary" href="">
                  View Detail<i className="bi bi-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
