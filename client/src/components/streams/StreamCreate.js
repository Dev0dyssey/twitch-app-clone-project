import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    // Helper function to help with rendering the correct Field type inside the Redux Form (i.e input)
    // Destructure input out of the input object (formProps before)
    renderInput({input}) {
        // {...formProps.input; takes all of the input properties and assigns them as props to the <input/> element}
        return <input {...input}/>
    }

    render() {
        return(
            <form>
                {/* Use <Field /> component anytime you want to use a field inside the form (text, checkbox, dropdown, etc) */}
                {/* name = REQUIRED; name of the property the field will manage */}
                {/* component = tells the component what is going to be shown on the screen; how to render it (usually done with a helper function). Without it an error message is thrown */}
                <Field name = "title" component = {this.renderInput}/>
                <Field name = "description" component = {this.renderInput}/>
            </form>
        );
    }
}

// Almost same syntax with Redux Form as the connect()() method
export default reduxForm({
    // Will contain configuration of the Redux Form (Configuration Object)
    // Form: <name> usually descriptive of what the form does/captures
    // This passes a large amount of new props to the component
    form: 'streamCreate'
})(StreamCreate);