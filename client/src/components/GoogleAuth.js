import React from 'react';

const KEY = process.env.REACT_APP_GOOGLE_API_CLIENT_ID
const SCOPE = process.env.REACT_APP_GOOGLE_API_SCOPE

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: KEY,
        scope: SCOPE
      });
    });
  }

  render() {
    return (
      <div>
        Google Authentication
      </div>
    );
  }
}

export default GoogleAuth;
