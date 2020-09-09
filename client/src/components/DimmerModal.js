import React from 'react';
import ReactDOM from 'react-dom';

import history from '../history';

const DimmerModal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={() => history.push('/')}>
      <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>

        <div className="header">Delete This Workout</div>
        <div className="content">
          <p>This action is permanent, are you sure?</p>
        </div>
        <div className="actions">
          <div className="ui inverted blue button">Cancel</div>
          <div className="ui negative button">Delete</div>
        </div>

      </div>
    </div>,

    document.querySelector('#delete-popup')
  );
};

export default DimmerModal;
