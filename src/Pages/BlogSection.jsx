import React from "react";
import "./BlogSection.css"; // Import the external CSS file
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCalendarAlt } from 'react-icons/fa'; // Importing a calendar icon

const BlogSection = () => {
  // Blog data
  const blogs = [
    {
      id: 1,
      title: "Dolor clita vero elitr sea stet dolor justo diam",
      date: "Jan 01",
      year: "2045",
      views: 12345,
      comments: 123,
      user: "John Doe",
      userImage: "/images/user.jpg",
    },
    {
      id: 2,
      title: "Sit amet lorem ipsum dolor sit amet",
      date: "Feb 15",
      year: "2045",
      views: 67890,
      comments: 456,
      user: "Jane Smith",
      userImage: "/images/user.jpg",
    },
    {
      id: 3,
      title: "Consectetur adipiscing elit sed do eiusmod",
      date: "Mar 10",
      year: "2045",
      views: 23456,
      comments: 789,
      user: "Alex Johnson",
      userImage: "/images/user.jpg",
    },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
          <h1 className="display-5">Latest Articles From Our Blog</h1>
          <hr className="w-25 mx-auto text-primary" style={{ opacity: 1 }} />
        </div>
        <div className="row g-3">
          {blogs.map((blog) => (
            <div className="col-xl-4 col-lg-6" key={blog.id}>
              <div className={`blog-item blog-${blog.id}`}>
                <div className="content-section">
                  <div className="calendar-title-container">
                    <div className="calendar">
                      <FaCalendarAlt className="calendar-icon" />
                      <p>{blog.date}</p>
                      <small>{blog.year}</small>
                    </div>
                  </div>
                  <div className="title">{blog.title}</div>
                  <div className="details"></div>
                  <div className="user-details">
                    <div className="d-flex align-items-center">
                      <div
                        className="user-avatar"
                        style={{
                          backgroundImage: blog.userImage
                            ? `url(${blog.userImage})`
                            : "none",
                        }}
                      >
                        {!blog.userImage && <span>{blog.user[0]}</span>}
                      </div>
                      <small className="text-uppercase ms-2">{blog.user}</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <small className="ms-3">
                        <i className="fa fa-eye text-secondary me-2"></i>
                        {blog.views}
                      </small>
                      <small className="ms-3">
                        <i className="fa fa-comment text-secondary me-2"></i>
                        {blog.comments}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="image-section"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
