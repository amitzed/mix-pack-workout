import React from 'react';
import { connect } from 'react-redux';

import { fetchWorkouts } from '../../actions';

class WorkoutList extends React.Component {
  componentDidMount() {
    this.props.fetchWorkouts();
  }

  render() {
    return (
      <div>
        WorkoutList
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
