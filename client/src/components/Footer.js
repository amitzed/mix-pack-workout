import React from 'react';

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
            <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
              <a href="https://stronglifts.com/squat/" target="_blank">
                <i className="large middle aligned icon video" />
                Squat</a>
            </div>

            <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
              <a href="https://stronglifts.com/bench-press/" target="_blank">
                <i className="large middle aligned icon video" />
                Bench Press</a>
            </div>

            <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
              <a href="https://stronglifts.com/overhead-press/" target="_blank">
                <i className="large middle aligned icon video" />
                Overhead Press</a>
            </div>

            <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
              <a href="https://stronglifts.com/barbell-row/" target="_blank">
                <i className="large middle aligned icon video" />
                Barbell Row</a>
            </div>

            <div className="ui inverted brown center aligned segment link-item" style={{margin: '1em'}}>
              <a href="https://stronglifts.com/deadlift/" target="_blank">
                <i className="large middle aligned icon video" />
                Deadlift</a>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Footer;
