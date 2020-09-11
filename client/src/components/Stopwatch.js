import React from 'react';

import history from '../history';

class Stopwatch extends React.Component {

  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
    };

    startTimer = () => {
      this.setState({
        timerOn: true,
        timerTime: this.state.timerTime,
        timerStart: Date.now() - this.state.timerTime
      });
      this.timer = setInterval(() => {
        this.setState({
          timerTime: Date.now() - this.state.timerStart
        });
      }, 10);
    };

    stopTimer = () => {
      this.setState({ timerOn: false });
      clearInterval(this.timer);
    };

    resetTimer = () => {
      this.setState({
        timerStart: 0,
        timerTime: 0
      });
    };

    render() {
      const { timerTime } = this.state;
      let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
      let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
      let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

      return (

        <div className="ui dimmer modals visible active stopwatch-app-container" onClick={() => history.push('/')}>
          <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()} style={{background: '#4b0082'}}>
            <br/>
            <h5>Click Outside This Box To Return To Home Screen</h5>
            <div className="stopwatch-app">
              <div className="stopwatch-header"><i className="stopwatch icon"></i></div>
              <div className="stopwatch-display">
                {minutes} : {seconds} : {centiseconds}
              </div>
              {this.state.timerOn === false && this.state.timerTime === 0 && (
                <button onClick={this.startTimer}><i className="play icon"></i></button>
              )}
              {this.state.timerOn === true && (
                <button onClick={this.stopTimer}><i className="pause icon"></i></button>
              )}
              {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button onClick={this.startTimer}>Resume</button>
              )}
              {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button onClick={this.resetTimer}><i className="undo icon"></i></button>
              )}
            </div>

          </div>
        </div>

      );
    }
}

export default Stopwatch;
