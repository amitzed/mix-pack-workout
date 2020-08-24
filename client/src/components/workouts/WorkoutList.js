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
        <div key={workout.id}>
          <div>
            {workout.day}
            <div>
              {workout.exercise1Title}
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
        <div>
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
