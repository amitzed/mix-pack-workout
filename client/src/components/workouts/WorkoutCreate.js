import React from 'react';
import { connect } from 'react-redux';

import { createWorkout } from '../../actions';
import WorkoutForm from './WorkoutForm';

class WorkoutCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createWorkout(formValues)
  }

  render() {
    return (
      <div className="ui inverted segment">
        <h2 className="ui center aligned icon header">
          <i className="circular green flask icon"></i>
          Enter Workout Details
        </h2>

        <WorkoutForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  {createWorkout}
)(WorkoutCreate);
