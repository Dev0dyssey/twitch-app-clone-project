import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    };

    render(){
        // Reason we can use props; the StreamEdit component is being rendered via a Route from React-Router-DOM. This adds a list of props onto the render which we can than use
        if(!this.props.stream) {
            return <div>Loading...</div>
        }
        return(
            <div>
                <h3>Edit a Stream</h3>
                {/* InitialValues; very specific property on Redux-Form. Reason we can use it is because the form itself is wrapped inside of ReduxForm({}) */}
                {/* See <StreamForm /> for the wrapping example */}
                {/* InitialValues names MUST match the input field names from the form itself. name === name NOT names !== name */}
                <StreamForm 
                // The lodash _.pick() function allows us to select what properties we want to pass from an object. In this case we are passing title and description from the this.props.stream object
                // Useful to avoid any issues where the backend server does not want returning values that should not be edited (streamId and userId)
                    initialValues = {_.pick(this.props.stream, 'title', 'description' )}
                    onSubmit = {this.onSubmit}
                />
            </div>
        );
    }
}

// ownProps; second argument that can be passed into the mapStateToProps method. References the props passed into the component from outside of the Redux state store
// Such as the props being passed by the Route from React-Router-DOM
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);