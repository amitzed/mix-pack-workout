import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h2 className="ui icon header">
        <i className="ban icon ban-icon"></i>
        <div className="content">
          Oops! Page Not Found

          <div className="notfound-404">
            <span>4</span><span>0</span><span>4</span>
          </div>

          <div className="sub header">We're sorry, but the page you requested was not found.</div>
          <Link to="/">
            <button className="ui green button big home-btn">
              Go To Homepage
            </button>
          </Link>
        </div>
      </h2>
    </div>
  )
}

export default NotFound;
