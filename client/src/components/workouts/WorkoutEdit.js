import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { fetchWorkout, editWorkout } from '../../actions';
import WorkoutForm from './WorkoutForm';

class WorkoutEdit extends React.Component {
  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    if(!this.props.workout) {
      return <h5>Loading...</h5>
    }

    return (
      <div className="ui inverted segment">
        <h2 className="ui center aligned icon header">
          <i className="circular green flask icon"></i>
          Edit Workout Details
        </h2>

        <WorkoutForm
          initialValues={_.pick(
            this.props.workout,
            'day',
            'exercise1Title',
            'exercise1Sets',
            'exercise1Reps',
            'exercise2Title',
            'exercise2Sets',
            'exercise2Reps',
            'exercise3Title',
            'exercise3Sets',
            'exercise3Reps',
            'cardioType',
            'cardioTime'
          )}
          onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  return { workout: state.workouts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchWorkout, editWorkout }
)(WorkoutEdit);
