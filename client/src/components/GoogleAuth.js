import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '929596800669-uglib6d73pmtsma7vnc9r6tul51smkim.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get()});
        });
    });
  }

  renderAuthButton() {
    console.log(this.state.isSignedIn);
    if (this.state.isSignedIn === null) {
      return <div>I do not know if we are signed in.</div>
    } else if (this.state.isSignedIn) {
      return <div>I am signed in.</div>
    } else {
      return <div>I am NOT signed in.</div>
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth;