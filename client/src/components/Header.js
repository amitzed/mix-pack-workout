import React from 'react';
import { Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu header-container">
      <Link to="/" className="item header-app-title" data-aos="zoom-in">
        Mix Pack Workout
      </Link>
      <Link to="/workouts/stopwatch" className="item link">
        <button className="ui inverted blue button stopwatch-button">
          <i className="stopwatch icon"></i>
          Stopwatch
        </button>
      </Link>
      <div className="right menu item link">
        <GoogleAuth />
      </div>
    </div>
  )
}

export default Header;
