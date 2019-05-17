import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        // We need to load the specific part of the gapi library. In this case we are using the client authentication part
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                // clientId generated by Google API project
                clientId: '917601408536-3im2hkuhhntq9oajrc392jq8s6o9tt0c.apps.googleusercontent.com',
                // Need to define the scope; what parts of the user profile/account we want access to
                scope: 'email'
            });
        });
    }

    render(){
        return<div>GoogleAuth</div>
    }
}

export default GoogleAuth;