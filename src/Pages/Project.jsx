import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Project.css";

const Project = () => {
  // Images array with paths from the "Images" directory in the "public" folder
  const images = [
    { src: "/Images/image1.jpg", name: "YOO PUNE" },
    { src: "/Images/image2.jpg", name: "PANCHSHIL EASTSIDE" },
    { src: "/Images/image3.jpg", name: "CEREBRUM IT PARK B1" },
    { src: "/Images/image4.jpg", name: "PANCHSHIL TOWER" },
  ];

  // Navigation hook
  const navigate = useNavigate();

  // Redirect to the "project" page
  const handleViewMore = () => {
    navigate("/project"); // Replace "/project" with your desired route
  };

  return (
    <div>
      {/* Title */}
      <h1 className="project-title" style={{color:'#0b5079', fontFamily:'lexend deca', textTransform:'capitalize',fontSize:'3rem',fontWeight:'400',marginBottom:'10px'}}> Our Projects </h1>

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
        <button onClick={handleViewMore} className="view-more-button">
          View More
        </button>
      </div>
    </div>
  );
};

export default Project;
