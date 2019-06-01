import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/index';

class GoogleAuth extends React.Component {

    componentDidMount() {
        // We need to load the specific part of the gapi library. In this case we are using the client authentication part
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                // clientId generated by Google API project
                clientId: '917601408536-3im2hkuhhntq9oajrc392jq8s6o9tt0c.apps.googleusercontent.com',
                // Need to define the scope; what parts of the user profile/account we want access to
                scope: 'email'
            }).then(()=> {
                // Reference to the auth object (from the gapi)
                this.auth = window.gapi.auth2.getAuthInstance();
                // Update of Redux store based on whether the use is signed in or not
                this.onAuthChange(this.auth.isSignedIn.get());
                // Listens to any changes made to isSignedIn and call the onAuthChange()
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    // Helper function that sets the isSignedIn state
    // Returns a boolean true/false, can be passed as an argument of the function (isSignedIn)
    onAuthChange = (isSignedIn) => {
        // If statement to determine whether the use is signed in or not. Retrieved from the gapi
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };

    // Helper methods to handle Sign In and Sign Out when button is clicked
    onSignInClick = () => {
        // this.auth = auth comes from the gapi call within componentDidMount
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        // The value of isSignedIn is coming from the Redux store which is passed on the .props; reason fro this.props.isSignedIn
        if(this.props.isSignedIn === null){
            return null;
        } else if(this.props.isSignedIn) {
            return (
                    <button onClick = {this.onSignOutClick} className = "ui red google button">
                        <i className = "google icon" />
                        Sign Out
                    </button>
                )
        } else {
            return (
                    <button onClick = {this.onSignInClick} className = "ui red google button">
                        <i className = "google icon" />
                        Sign In with Google
                    </button>
                )
        }
    }

    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);