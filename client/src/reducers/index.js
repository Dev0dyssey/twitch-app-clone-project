import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    // Redux form must be declared with key form: <name>
    form: formReducer,
    streams: streamReducer
});