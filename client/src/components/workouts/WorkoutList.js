import React from 'react';
import { connect } from 'react-redux';

import { fetchWorkouts } from '../../actions';

class WorkoutList extends React.Component {
  componentDidMount() {
    this.props.fetchWorkouts();
  }

  renderList() {
    return this.props.workouts.map(workout => {
      return (
        <div className="ui two column centered" key={workout.id}>
          <div className="ui segments">

            <div className="ui inverted brown center aligned segment" style={{margin: '1em'}}>
              <i className="large middle aligned icon calendar alternate outline" />
              <p>{workout.day}</p>
            </div>

            <div className="ui segments">
              <div className="ui inverted center aligned segment">
                <i className="large circular green flask icon"></i>
                <p>
                  {
                    !workout.exercise1Title
                    ?
                    null
                    :
                    <span>Exercise 1: {workout.exercise1Title}</span>
                  }
                </p>

                  {
                    !workout.exercise1Sets && !workout.exercise1Reps
                    ?
                    null
                    :
                    <div className="ui segments">
                      <div className="ui horizontal segments">
                        <div className="ui secondary inverted segment">
                          <p>Sets: {workout.exercise1Sets}</p>
                        </div>
                        <div className="ui tertiary inverted segment">
                          <p>Reps: {workout.exercise1Reps}</p>
                        </div>
                      </div>
                    </div>
                  }

                <p>
                  {
                    !workout.exercise2Title
                    ?
                    null
                    :
                    <span>Exercise 2: {workout.exercise2Title}</span>
                  }
                </p>

                  {
                    !workout.exercise2Sets && !workout.exercise2Reps
                    ?
                    null
                    :
                    <div className="ui segments">
                      <div className="ui horizontal segments">
                        <div className="ui secondary inverted segment">
                          <p>Sets: {workout.exercise2Sets}</p>
                        </div>
                        <div className="ui tertiary inverted segment">
                          <p>Reps: {workout.exercise2Reps}</p>
                        </div>
                      </div>
                    </div>
                  }

                <p>
                  {
                    !workout.exercise3Title
                    ?
                    null
                    :
                    <span>Exercise 3: {workout.exercise3Title}</span>
                  }
                </p>

                  {
                    !workout.exercise3Sets && !workout.exercise3Reps
                    ?
                    null
                    :
                    <div className="ui segments">
                      <div className="ui horizontal segments">
                        <div className="ui secondary inverted segment">
                          <p>Sets: {workout.exercise3Sets}</p>
                        </div>
                        <div className="ui tertiary inverted segment">
                          <p>Reps: {workout.exercise3Reps}</p>
                        </div>
                      </div>
                    </div>
                  }

                {
                  !workout.cardioTime || !workout.cardioType
                  ?
                  null
                  :
                  <div className="ui segments">
                    <p>Cardio: {workout.cardioType}</p>
                    <div className="ui horizontal segments">
                      <div className="ui secondary inverted segment">
                        <p>Time: {workout.cardioTime}</p>
                      </div>
                    </div>
                  </div>
                }

              </div>
            </div>

          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2 className="ui center aligned icon header medium">
          <i className="circular green eye dropper icon"></i>
          WorkoutList
        </h2>
        <div className="ui stackable four column grid">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workouts: Object.values(state.workouts),
    currentUserId: state.auth.userId
  };
}

export default connect(
  mapStateToProps,
  {fetchWorkouts}
)(WorkoutList);
