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
        const { id } = this.props.match.params;

        // Original line of code before destructure; this.props.fetStream(this.props.match.params.id)
        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    // Clean up of any resources the Application has created
    // Such as the video player that attempts to connect and show video even when user navigates away from the Stream page
    // .destroy method tells the player to stop attempting to stream video and detach itself from the element we created inside the render() method
    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        if (this.player || !this.props.stream) {
            return;
        }

        const { id } = this.props.match.params;
        // See the node-media server documentation to remind how the player is created
        this.player = player.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
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