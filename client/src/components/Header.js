import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Mix Pack Workout
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Workout Plan
        </Link>
      </div>
    </div>
  )
}

export default Header;
