import React from 'react';
import ReactDOM from 'react-dom';

// Portal creation and definition
const Modal = props => {
    // The initial argument of createPortal; whatever we want to show to the user
    return ReactDOM.createPortal(
        <div className = "ui dimmer modals visible active">
            <div className = "ui standard modal visible active">
                Modal Testing Underway
            </div>
    {/* Second argument of createPortal; reference to the element we want to render the portal/modal into */}
    {/* Often done by creating a sibling html element inside if index.html file, allowing us to attach the portal to that element */}
    {/* Attaching portal directly to the body will overwrite all of content inside the body element */}
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;