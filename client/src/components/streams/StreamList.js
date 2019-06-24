import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    // Helper function to render the Delete & Edit buttons
    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className = "right floated content">
                    <button className = "ui button primary">
                        Edit
                    </button>
                    <button className = "ui button negative">
                        Delete
                    </button>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return(
                <div className="item" key = {stream.id}>
                    {/* Reason for the button to be called at the beginning of the code; Semantic UI rules - to style the element properly the code should be placed at the top of the element code */}
                    {this.renderAdmin(stream)}
                    <i className = "large middle aligned icon camera" />
                    <div className = "content">
                        {stream.title}
                    <div className = "description">
                        {stream.description}
                    </div>
                    </div>
                </div>
            )
        })
    }

    // Helper method to show a Create Stream button when a user is signed in
    renderCreate() {
        if(this.props.isSignedIn) {
            return(
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className = "ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // Object.<name> ; built in JavaScript function(takes object{} as an argument). Pulls all value of an object{}, and inserted into an array
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);