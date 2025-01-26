import "./Service.css";

const Service = () => {
  const services = [
    { icon: "fa-paint-roller", title: "1. BOXTYPE WATERPROOFING TREATMENT", bgImage: "../Images/service1.png" },
    { icon: "fa-paint-roller", title: "2. POLYUREA APPLICATION", bgImage: "../Images/service2.png" },
    { icon: "fa-paint-roller", title: "3. MEMBRANE WATERPROOFING TREATMENT", bgImage: "../Images/service3.png" },
    { icon: "fa-paint-roller", title: "4. POLYURETHANE COATING", bgImage: "../Images/service4.png" },
    { icon: "fa-paint-roller", title: "5. EPOXY COATING", bgImage: "../Images/service5.png" },
    { icon: "fa-paint-roller", title: "6. HIGH-DENSITY POLYETHYLENE", bgImage: "../Images/service6.png" },
  ];

  return (
    <div className="container-fluid">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
          <h1 className="display-5">Our Services</h1>
          <hr className="w-25 mx-auto text-primary" style={{ opacity: 1 }} />
        </div>
        <div className="row gy-4 gx-3">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="service-item d-flex flex-column align-items-center justify-content-between text-center p-5 pt-0"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              >
                <div className="service-icon p-3">
                  <div>
                    <i className={`fa fa-2x ${service.icon}`}></i>
                  </div>
                </div>
                <h3 className="mt-2 title1" >{service.title}</h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
