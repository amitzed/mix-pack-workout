import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <h5 className="ui center aligned icon header">
          <i className="circular green eye icon"></i>
          <span>How-To Videos & Instructions</span>
        </h5>

        <div className="ui centered grid">
          <div className="doubling four column row link-wrapper">

            <Link to="/workouts/videos" data-aos="flip-right">
              <div className="ui inverted center aligned segment link-item" style={{margin: '1em'}}>
                <i className="large middle aligned icon film" />
                Search Videos
              </div>
            </Link>

            <Link to="/workouts/squat" data-aos="flip-left">
              <div className="ui inverted center aligned segment link-item" style={{margin: '1em'}}>
                <i className="large middle aligned icon folder open outline" />
                Squat
              </div>
            </Link>

            <Link to="/workouts/bench" data-aos="flip-left">
              <div className="ui inverted center aligned segment link-item" style={{margin: '1em'}}>
                <i className="large middle aligned icon folder open outline" />
                Bench Press
              </div>
            </Link>

            <Link to="/workouts/overhead" data-aos="flip-left">
              <div className="ui inverted center aligned segment link-item" style={{margin: '1em'}}>
                <i className="large middle aligned icon folder open outline" />
                Overhead Press
              </div>
            </Link>

            <Link to="/workouts/row" data-aos="flip-left">
              <div className="ui inverted center aligned segment link-item" style={{margin: '1em'}}>
                <i className="large middle aligned icon folder open outline" />
                Barbell Row
              </div>
            </Link>

            <Link to="/workouts/deadlift" data-aos="flip-left">
              <div className="ui inverted center aligned segment link-item" style={{margin: '1em'}}>
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
