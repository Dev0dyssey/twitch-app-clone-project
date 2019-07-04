import React from 'react';
import ReactDOM from 'react-dom';

// Portal creation and definition
const Modal = props => {
    // The initial argument of createPortal; whatever we want to show to the user
    return ReactDOM.createPortal(
        <div onClick = {props.onDismiss} className = "ui dimmer modals visible active">
            {/* e.stopPropagation; stops the event propagation up the element. This ensures that only when the user clicks outside of the body, will the modal disappear */}
            {/* Content of the Modal coming from the props when <Modal /> is rendered inside of <StreamDelete /> */}
            <div onClick = {(e) => e.stopPropagation()} className = "ui standard modal visible active">
                <div className = "header">{props.title}</div>
                <div className = "content">{props.conent}</div>
                <div className = "actions">
                    {props.actions}
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