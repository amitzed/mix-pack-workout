import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <h5 className="ui center aligned icon header">
          <i className="circular green eye icon"></i>
          How-To Videos & Instructions
        </h5>

        <div className="ui centered grid">
          <div className="doubling four column row link-wrapper">

            <Link to="/workouts/videos">
              <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
                <i className="large middle aligned icon film" />
                Search Videos
              </div>
            </Link>

            <Link to="/workouts/squat">
              <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
                <i className="large middle aligned icon folder open outline" />
                Squat
              </div>
            </Link>

            <Link to="/workouts/bench">
              <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
                <i className="large middle aligned icon folder open outline" />
                Bench Press
              </div>
            </Link>

            <Link to="/workouts/overhead">
              <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
                <i className="large middle aligned icon folder open outline" />
                Overhead Press
              </div>
            </Link>

            <Link to="/workouts/row">
              <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
                <i className="large middle aligned icon folder open outline" />
                Barbell Row
              </div>
            </Link>

            <Link to="/workouts/deadlift">
              <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
                <i className="large middle aligned icon folder open outline" />
                Deadlift
              </div>
            </Link>

          </div>
        </div>



      </div>
    </div>
  );
}

export default Footer;
