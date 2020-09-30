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

            <Link to="/workouts/videos" className="">
              <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
                <i className="large middle aligned icon film" />
                Search Videos
              </div>
            </Link>

            <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
              <a href="https://stronglifts.com/squat/" target="_blank" rel="noopener noreferrer">
                <i className="large middle aligned icon folder open outline" />
                Squat</a>
            </div>

            <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
              <a href="https://stronglifts.com/bench-press/" target="_blank" rel="noopener noreferrer">
                <i className="large middle aligned icon folder open outline" />
                Bench Press</a>
            </div>

            <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
              <a href="https://stronglifts.com/overhead-press/" target="_blank" rel="noopener noreferrer">
                <i className="large middle aligned icon folder open outline" />
                Overhead Press</a>
            </div>

            <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
              <a href="https://stronglifts.com/barbell-row/" target="_blank" rel="noopener noreferrer">
                <i className="large middle aligned icon folder open outline" />
                Barbell Row</a>
            </div>

            <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
              <a href="https://stronglifts.com/deadlift/" target="_blank" rel="noopener noreferrer">
                <i className="large middle aligned icon folder open outline" />
                Deadlift</a>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Footer;
