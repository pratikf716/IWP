import React from 'react';
import './topbar.css';

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-inner">
        <div className="topbar-left">
          <a href="" className="topbar-link">
            <i className="bi bi-telephone icon"></i> +012 345 6789
          </a>
          <a href="" className="topbar-link">
            <i className="bi bi-envelope icon"></i> info@example.com
          </a>
        </div>
        <div className="topbar-right">
          <a href="" className="topbar-icon-link">
            <i className="fab fa-facebook-f icon"></i>
          </a>
          <a href="" className="topbar-icon-link">
            <i className="fab fa-twitter icon"></i>
          </a>
          <a href="" className="topbar-icon-link">
            <i className="fab fa-linkedin-in icon"></i>
          </a>
          <a href="" className="topbar-icon-link">
            <i className="fab fa-instagram icon"></i>
          </a>
          <a href="" className="topbar-icon-link">
            <i className="fab fa-youtube icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
