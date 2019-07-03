import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

// Portal creation and definition
const Modal = props => {
    // The initial argument of createPortal; whatever we want to show to the user
    return ReactDOM.createPortal(
        // Using programmatic navigation we can direct the user to another page, allowing the modal to "disappear" when user click outside of its area
        <div onClick = {() => history.push('/')} className = "ui dimmer modals visible active">
            {/* e.stopPropagation; stops the event propagation up the element. This ensures that only when the user clicks outside of the body, will the modal disappear */}
            <div onClick = {(e) => e.stopPropagation()} className = "ui standard modal visible active">
                <div className = "header">Delete Stream</div>
                <div className = "content">Are you sure you want to delete the stream?</div>
                <div className = "actions">
                    <button className = "ui primary button">Delete</button>
                    <button className = "ui button">Cancel</button>
                </div>
            </div>
    {/* Second argument of createPortal; reference to the element we want to render the portal/modal into */}
    {/* Often done by creating a sibling html element inside if index.html file, allowing us to attach the portal to that element */}
    {/* Attaching portal directly to the body will overwrite all of content inside the body element */}
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;