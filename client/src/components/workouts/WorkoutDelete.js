import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import DimmerModal from '../DimmerModal';
import history from '../../history';
import { fetchWorkout, deleteWorkout } from '../../actions';

class WorkoutDelete extends React.Component {
  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.id)
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <Link to="/" className="ui inverted blue button">Cancel</Link>
        <div onClick={() => this.props.deleteWorkout(id)} className="ui negative button">Delete</div>
      </React.Fragment>
    );
  }

  renderDeleteContent() {
    if(!this.props.workout) {
      return 'This action is permanent, are you sure?'
    }
    return `This action is permanent, are you sure you want to delete the workout that occurs on this day/date: ${this.props.workout.day}?`
  }

  render() {
    return (
      <DimmerModal
        title="Delete This Workout"
        content={this.renderDeleteContent()}
        actions={this.renderActions()}
        modalDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { workout: state.workouts[ownProps.match.params.id]}
};

export default connect(
  mapStateToProps,
  { fetchWorkout, deleteWorkout }
)(WorkoutDelete);
