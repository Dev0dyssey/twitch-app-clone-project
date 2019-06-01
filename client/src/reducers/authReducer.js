// Initial state (default state) = Initilazer;  to be passed into the reducer
const INITIAL_STATE = {
    isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            // ...spread method: takes the original value ([array] or {object}) and turns it into set of items
            // These items can than be modifies such as below, where isSignedIn value is updated
            return { ...state, isSignedIn: true };
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false};
        default:
            return state;
    }
};