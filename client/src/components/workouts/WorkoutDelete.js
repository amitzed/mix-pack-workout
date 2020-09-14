import React from 'react';

import DimmerModal from '../DimmerModal';
import history from '../../history';

const WorkoutDelete = () => {
  const actions = (
    <React.Fragment>
      <div className="ui inverted blue button">Cancel</div>
      <div className="ui negative button">Delete</div>
    </React.Fragment>
  );

  return (
    <div>
      <DimmerModal
        title="Delete This Workout"
        content="This action is permanent, are you sure?"
        actions={actions}
        modalDismiss={() => history.push('/')}
      />
    </div>
  );
}

export default WorkoutDelete;
