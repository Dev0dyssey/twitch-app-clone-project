import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render(){
        // Reason we can use props; the StreamEdit component is being rendered via a Route from React-Router-DOM. This adds a list of props onto the render which we can than use
        if(!this.props.stream) {
            return <div>Loading...</div>
        }
        return <div>{this.props.stream.title}</div>
    }
}

// ownProps; second argument that can be passed into the mapStateToProps method. References the props passed into the component from outside of the Redux state store
// Such as the props being passed by the Route from React-Router-DOM
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);