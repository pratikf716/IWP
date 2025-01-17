import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      imgSrc: "Images/blog-1.jpg",
      date: "Jan 01",
      year: "2045",
      title: "Dolor clita vero elitr sea stet dolor justo diam",
      author: "John Doe",
      views: 12345,
      comments: 123
    },
    {
      id: 2,
      imgSrc: "Images/blog-2.jpg",
      date: "Jan 01",
      year: "2045",
      title: "Dolor clita vero elitr sea stet dolor justo diam",
      author: "John Doe",
      views: 12345,
      comments: 123
    },
    {
      id: 3,
      imgSrc: "Images/blog-3.jpg",
      date: "Jan 01",
      year: "2045",
      title: "Dolor clita vero elitr sea stet dolor justo diam",
      author: "John Doe",
      views: 12345,
      comments: 123
    }
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
          <h1 className="display-5">Latest Articles From Painting Blog</h1>
          <hr className="w-25 mx-auto text-primary" style={{ opacity: 1 }} />
        </div>
        <div className="row g-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-xl-4 col-lg-6">
              <div className="blog-item" style={{ backgroundColor: 'yellow' }}>
                <img className="img-fluid w-100" src={post.imgSrc} alt="" />
                <div className="d-flex align-items-center">
                  <div
                    className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4"
                    style={{ width: '60px', height: '100px' }}
                  >
                    <i className="fa fa-calendar-alt text-primary mb-2"></i>
                    <p className="m-0 text-white">{post.date}</p>
                    <small className="text-white">{post.year}</small>
                  </div>
                  <a className="h4 m-0 text-truncate me-4" href="" style={{ textDecoration: 'none' }}>
                  {post.title}
                  </a>

                </div>
                <div className="d-flex justify-content-between border-top border-secondary p-4">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle me-2"
                      src="Images/user.jpg"
                      width="30"
                      height="30"
                      alt=""
                    />
                    <small className="text-uppercase">{post.author}</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <small className="ms-3">
                      <i className="fa fa-eye text-secondary me-2"></i>
                      {post.views}
                    </small>
                    <small className="ms-3">
                      <i className="fa fa-comment text-secondary me-2"></i>
                      {post.comments}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
