import React from 'react';
import { connect } from 'react-redux';


const StreamEdit = (props) => {
    // Reason we can use props; the StreamEdit component is being rendered via a Route from React-Router-DOM. This adds a list of props onto the render which we can than use
    console.log(props);
    return <div>StreamEdit</div>
};

// ownProps; second argument that can be passed into the mapStateToProps method. References the props passed into the component from outside of the Redux state store
// Such as the props being passed by the Route from React-Router-DOM
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps)(StreamEdit);