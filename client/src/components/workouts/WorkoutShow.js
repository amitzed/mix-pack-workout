import React from 'react';
import { connect } from 'react-redux';

import { fetchWorkout } from '../../actions';

class WorkoutShow extends React.Component {
  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.id)
  }

  render() {
    if(!this.props.workout) {
      return (
        <div className="ui icon message">
          <i className="notched circle loading icon"></i>
          <div className="content">
            <div className="header">
              Just one second
            </div>
            <p>We're getting that content for you.</p>
          </div>
        </div>
      );
    }

    const {
      day,
      exercise1Title,
      exercise1Sets,
      exercise1Reps,
      exercise2Title,
      exercise2Sets,
      exercise2Reps,
      exercise3Title,
      exercise3Sets,
      exercise3Reps,
      cardioType,
      cardioTime
    } = this.props.workout

    return (
      <div className="show-wrapper">
        <h2 className="ui horizontal inverted divider header">
          {day}
        </h2>
        <p className="center aligned" style={{textAlign: 'center'}}>
          On {day} this is the workout you have planned
        </p>
        <h4 className="ui horizontal inverted divider header">
          <i className="circular green thumbtack icon"></i>
        </h4>
        <table className="ui inverted definition table">
          <tbody>

            <tr>
              <td className="two wide column" data-aos="fade-up">Exercise 1</td>
              <td>
                {
                  !exercise1Title
                  ?
                  null
                  :
                  <span>{exercise1Title} | Reps:&nbsp;{exercise1Reps} | Reps:&nbsp;{exercise1Sets}</span>
                }
              </td>
            </tr>

            <tr>
              <td data-aos="fade-up">Exercise 2</td>
                <td>
                  {
                    !exercise2Title
                    ?
                    null
                    :
                    <span>{exercise2Title} | Reps:&nbsp;{exercise2Reps} | Reps:&nbsp;{exercise2Sets}</span>
                  }
                </td>
            </tr>

            <tr>
              <td data-aos="fade-up">Exercise 3</td>
                <td>
                  {
                    !exercise3Title
                    ?
                    null
                    :
                    <span>{exercise3Title} | Reps:&nbsp;{exercise3Reps} | Reps:&nbsp;{exercise3Sets}</span>
                  }
                </td>
            </tr>

            <tr>
              <td data-aos="fade-up">Cardio</td>
                <td>
                  {
                    !cardioType
                    ?
                    null
                    :
                    <span>{cardioType} | Time:&nbsp;{cardioTime}</span>
                  }
                </td>
            </tr>

          </tbody>
        </table>
      </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { workout: state.workouts[ownProps.match.params.id]}
}

export default connect(
  mapStateToProps,
  { fetchWorkout }
)(WorkoutShow);
