import React from 'react';
import { Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Mix Pack Workout
      </Link>
      <Link to="/workouts/stopwatch" className="item link">
        <button className="ui inverted blue button">
          <i className="stopwatch icon"></i>
          Stopwatch
        </button>
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  )
}

export default Header;
