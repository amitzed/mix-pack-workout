import React from 'react';
import { connect } from 'react-redux';

const WorkoutEdit = (props) => {
  console.log(props);
  return (
    <div>
      WorkoutEdit
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {

  return { workout: state.workouts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps
)(WorkoutEdit);
