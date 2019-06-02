// Define types in a separate file to help with debugging if the case is misspelled 
import { SIGN_IN, SIGN_OUT } from '../actions/types';

// Initial state (default state) = Initilazer;  to be passed into the reducer
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            // ...spread method: takes the original value ([array] or {object}) and turns it into set of items
            // These items can than be modifies such as below, where isSignedIn value is updated
            return { ...state, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
};