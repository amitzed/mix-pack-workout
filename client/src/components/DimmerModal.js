import React from 'react';
import ReactDOM from 'react-dom';

import history from '../history';

const DimmerModal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={() => history.push('/')}>
      <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>

        <div className="header">{props.title}</div>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <div className="actions">
          {props.actions}
        </div>

      </div>
    </div>,

    document.querySelector('#dimmer-modal')
  );
};

export default DimmerModal;
