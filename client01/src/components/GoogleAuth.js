import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount(){
    window.gapi.load('client:auth2', ()=> {
      window.gapi.client.init({
        clientId: '929596800669-uglib6d73pmtsma7vnc9r6tul51smkim.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return <div>Google Auth</div>
  }
}

// THis note is a Test if changes are detected by git...

export default GoogleAuth;