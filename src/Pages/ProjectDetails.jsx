import "./ProjectDetails.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Project = () => {
  // Images array with paths from the "Images" directory in the "public" folder
  const images = [
    { src: "./Images/image1.jpg", name: "YOO PUNE" },
    { src: "./Images/image2.jpg", name: "PANCSHIL EASTSIDE" },
    { src: "./Images/image3.jpg", name: "CEREBRUM IT PARK B1" },
    { src: "./Images/image4.jpg", name: "PANCHSHIL TOWER" },
    { src: "./Images/image5.jpg", name: "COURTYARD MARRIOT" },
    { src: "./Images/image6.jpg", name: "PANCHSHIL 69" },
    { src: "./Images/image7.jpg", name: "BEVERLY HILLS" },
    { src: "./Images/image8.jpg", name: "TRUMP TOWER" },
    { src: "./Images/image9.jpg", name: "TRINITY" },
    { src: "./Images/image10.jpg", name: "SHAPOORJI SPRESIDENCY" },
    { src: "./Images/image11.jpg", name: "ULTIMA BUSINESS CENTRE" },
    { src: "./Images/image12.jpg", name: "RIVERWALK 212" },
    { src: "./Images/image13.jpg", name: "VISTARA IVY" },
    { src: "./Images/image14.jpg", name: "YOO VILLA" },
    { src: "./Images/image15.jpg", name: "THE GOLDEN BELL" },
    { src: "./Images/image16.jpg", name: "EASTERLIA" },
    { src: "./Images/image17.jpg", name: "CAPRICORN GREENPARK" },
    { src: "./Images/image18.jpg", name: "PARANJAPE RICHMOND PARK" },
    { src: "./Images/image19.jpg", name: "ICON ROSELIA" },
    { src: "./Images/image20.jpg", name: "RAVINDRA SKY TWINS" },
    { src: "./Images/image21.jpg", name: "VISTARA HOMES" },
    { src: "./Images/image22.jpg", name: "ICON 37" },
    { src: "./Images/image23.jpg", name: "RAVINDRA TOWER" },
    { src: "./Images/image24.jpg", name: "RAVINDRA SKY WATERS" },
    { src: "./Images/image25.jpg", name: "SANKLA VISTA" },
  ];

  const navigate = useNavigate(); // Hook for navigation

  return (
    <div>
      <Navbar />
      {/* Title */}
      <h1 className="project-title">Project</h1>

      {/* Image Gallery */}
      <div className="project-gallery">
        {images.map((image, index) => (
          <div key={index} className="project-item">
            <img src={image.src} alt={image.name} className="project-image" />
            <p className="project-name">{image.name}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="view-more-container">
        {/* <button onClick={handleViewMore} className="view-more-button">
          View More
        </button> */}
      </div>

      {/* Back to Home Button */}
      <div className="back-to-home-container">
        <button onClick={() => navigate("/")} className="back-to-home-button">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Project;
