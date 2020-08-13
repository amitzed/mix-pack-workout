import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

const KEY = process.env.REACT_APP_GOOGLE_API_CLIENT_ID
const SCOPE = process.env.REACT_APP_GOOGLE_API_SCOPE

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: KEY,
        scope: SCOPE
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    });
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthBtn() {
    if(this.props.isSignedIn === null) {
      return null;
    } else if(this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red button">
          <i className="google icon"></i>
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui blue button">
          <i className="google icon"></i>
          Sign In
        </button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthBtn()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn}
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
