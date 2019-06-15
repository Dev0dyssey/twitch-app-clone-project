import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    // Controlled element! 
    // Helper function to help with rendering the correct Field type inside the Redux Form (i.e input)
    // Destructure input and other properties out of the input object (formProps before)
    renderInput({input, label, meta}) {
        // {...formProps.input; takes all of the input properties and assigns them as props to the <input/> element}
        return (
            <div className = "field">
                <label>{label}</label>
                <input {...input}/>
                <div>{meta.error}</div>
            </div>
        );
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return(
            // this.props.handleSubmit; coming from Redux form - handSubmit provided as a prop inside the prop object. Console.log(this.props) to see all methods on Redux form object
            // Handles event.preventDefault() automatically. We do not need to pass onSubmit() with an event object/argument
            // Will instead be called with the values contained inside of the field inputs
            <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "ui form">
                {/* Use <Field /> component anytime you want to use a field inside the form (text, checkbox, dropdown, etc) */}
                {/* name = REQUIRED; name of the property the field will manage */}
                {/* component = tells the component what is going to be shown on the screen; how to render it (usually done with a helper function). Without it an error message is thrown */}
                <Field name = "title" component = {this.renderInput} label = "Enter Title"/>
                <Field name = "description" component = {this.renderInput} label = "Enter Description"/>
                <button className = "ui button primary">Submit</button>
            </form>
        );
    }
}

// Will use the exact same object as the onSubmit() method; formValues(or any name we chose)
const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        // Only ran if the user did not enter a title
        errors.title = 'You must enter a title';
    }

    if(!formValues.description){
        errors.description = "You must enter a description";
    }

    return errors;
};

// Almost same syntax with Redux Form as the connect()() method
export default reduxForm({
    // Will contain configuration of the Redux Form (Configuration Object)
    // Form: <name> usually descriptive of what the form does/captures
    // This passes a large amount of new props to the component
    form: 'streamCreate',
    validate
})(StreamCreate);