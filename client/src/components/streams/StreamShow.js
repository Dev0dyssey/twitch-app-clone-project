import React from 'react';
import player from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    // Creating a reference object to the DOM property to allow access and modifications of the video player inside the Application without the use of state{} object
    // https://medium.com/@rossbulat/how-to-use-react-refs-4541a7501663
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render(){
        if(!this.props.stream) {
            return <div>Loading...</div>
        }

        const { title, description } = this.props.stream;

        return(
            <div>
            <video ref={this.videoRef} style = {{width: '100%'}} controls = {true} />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] } 
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);