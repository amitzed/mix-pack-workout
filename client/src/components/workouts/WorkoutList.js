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
        <div className="" key={workout.id}>
          <div>
            {workout.day}
            <div>
              Exercise: {workout.exercise1Title}
            </div>
            <div>
              {
                !workout.exercise1Sets
                ?
                <div>
                  {workout.exercise1Sets}
                  {workout.exercise1Reps}
                </div>
                :
                <div>
                  Sets: {workout.exercise1Sets}
                  Reps: {workout.exercise1Reps}
                </div>
              }
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>WorkoutList</h2>
        <div className="ui centered grid">
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
