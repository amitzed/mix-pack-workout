import React from 'react';

const KEY = process.env.REACT_APP_GOOGLE_API_CLIENT_ID
const SCOPE = process.env.REACT_APP_GOOGLE_API_SCOPE

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: KEY,
        scope: SCOPE
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({
          isSignedIn: this.auth.isSignedIn.get()
        });
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    });
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    });
  }

  renderAuthBtn() {
    if(this.state.isSignedIn === null) {
      return <div>I can't tell if you're signed in</div>
    } else if(this.state.isSignedIn) {
      return <div>You're Signed In</div>
    } else {
      return <div>You're Not Signed In</div>
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

export default GoogleAuth;
