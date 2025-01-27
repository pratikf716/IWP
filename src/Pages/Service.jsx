import "./Service.css";
import { FaPaintRoller, FaBrush, FaPaintBrush, FaPalette } from "react-icons/fa"; // Font Awesome icons
import { LuPaintbrush } from "react-icons/lu"; // Lucide React icon
import { TbBrush } from "react-icons/tb"; // Tabler icons

const Service = () => {
  const services = [
    { icon: <FaPaintRoller />, title: "1. BOXTYPE WATERPROOFING TREATMENT", bgImage: "../Images/service1.png" },
    { icon: <FaBrush />, title: "2. POLYUREA APPLICATION", bgImage: "../Images/service2.png" },
    { icon: <LuPaintbrush />, title: "3. MEMBRANE WATERPROOFING TREATMENT", bgImage: "../Images/service3.png" },
    { icon: <LuPaintbrush />, title: "4. POLYURETHANE COATING", bgImage: "../Images/service4.png" },
    { icon: <FaPaintRoller />, title: "5. EPOXY COATING", bgImage: "../Images/service5.png" },
    { icon: <FaBrush />, title: "6. HIGH-DENSITY POLYETHYLENE", bgImage: "../Images/service6.png" },
  ];

  return (
    <div className="container-fluid">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
          <h1 className="display-5 " style={{color:'#0b5079'}}>Our Services</h1>
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
                  <div  style={{ fontSize: "2rem", color: "white" }}>{service.icon}</div>
                </div>
                <h3 className="mt-2 title1">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
