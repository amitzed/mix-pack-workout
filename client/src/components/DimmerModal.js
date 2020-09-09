import React from 'react';
import ReactDOM from 'react-dom';

const DimmerModal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">

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
