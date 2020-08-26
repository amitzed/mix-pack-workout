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
              <p>{workout.day}</p>
            </div>

            <div className="ui segments">
              <div className="ui inverted center aligned segment">

                <p>
                  {
                    !workout.exercise1Title
                    ?
                    null
                    :
                    <span>Exercise 1: {workout.exercise1Title}</span>
                  }
                </p>
                <div className="ui segments">
                  {
                    !workout.exercise1Sets
                    ?
                    null
                    :
                    <div className="ui horizontal segments">
                      <div className="ui secondary inverted segment">
                        <p>Sets: {workout.exercise1Sets}</p>
                      </div>
                      <div className="ui tertiary inverted segment">
                        <p>Reps: {workout.exercise1Reps}</p>
                      </div>
                    </div>
                  }
                </div>
                <p>
                  {
                    !workout.exercise2Title
                    ?
                    null
                    :
                    <span>Exercise 2: {workout.exercise2Title}</span>
                  }
                </p>
                <div className="ui segments">
                  {
                    !workout.exercise2Sets
                    ?
                    null
                    :
                    <div className="ui horizontal segments">
                      <div className="ui secondary inverted segment">
                        <p>Sets: {workout.exercise2Sets}</p>
                      </div>
                      <div className="ui tertiary inverted segment">
                        <p>Reps: {workout.exercise2Reps}</p>
                      </div>
                    </div>
                  }
                </div>
                <p>
                  {
                    !workout.exercise3Title
                    ?
                    null
                    :
                    <span>Exercise 3: {workout.exercise3Title}</span>
                  }
                </p>
                <div className="ui segments">
                  {
                    !workout.exercise3Sets
                    ?
                    null
                    :
                    <div className="ui horizontal segments">
                      <div className="ui secondary inverted segment">
                        <p>Sets: {workout.exercise3Sets}</p>
                      </div>
                      <div className="ui tertiary inverted segment">
                        <p>Reps: {workout.exercise3Reps}</p>
                      </div>
                    </div>
                  }
                </div>

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
      <div className="">
        <h2>WorkoutList</h2>
        <div className="ui stackable four column grid">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {workouts: Object.values(state.workouts)};
}

export default connect(
  mapStateToProps,
  {fetchWorkouts}
)(WorkoutList);
