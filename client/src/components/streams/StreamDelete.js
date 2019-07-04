import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {    
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        // Helper method to assist with rendering action buttons as props on the <Modal /> component
        return (
            // Use of React fragments <></> to assist with styling of the <Modal /> component, as Semantic UI does not render the buttons layout correctly when using <div></div>
            // <></> Allows for the buttons to be evenly spaced even as the viewport size changes
            // Alternative way of writing the fragment; <React.Fragment></React.Fragment> used on code quality checkers that do not recognize <></> as valid syntax
            <React.Fragment>
                <button className = "ui button negative">Delete</button>
                <button className = "ui button">Cancel</button>
            </React.Fragment>
        );
    }
    render() {
        return (
            <div>
                StreamDelete
                <Modal 
                    title = "Delete Stream"
                    conent = "Are you sure you want to delete this stream?"
                    actions = {this.renderActions()}
                    // Using programmatic navigation we can direct the user to another page, allowing the modal to "disappear" when user click outside of its area
                    onDismiss = {() => history.push('/')}
                />
            </div>
        );
    }
}

export default connect(null, { fetchStream })(StreamDelete);