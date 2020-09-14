import React from 'react';
import { connect } from 'react-redux';

import DimmerModal from '../DimmerModal';
import history from '../../history';
import { fetchWorkout } from '../../actions';

class WorkoutDelete extends React.Component {
  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.id)
  }

  renderActions() {
    return (
      <React.Fragment>
        <div className="ui inverted blue button">Cancel</div>
        <div className="ui negative button">Delete</div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <DimmerModal
          title="Delete This Workout"
          content="This action is permanent, are you sure?"
          actions={this.renderActions()}
          modalDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchWorkout }
)(WorkoutDelete);
