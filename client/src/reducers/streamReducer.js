import _ from 'lodash';

import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            // Lodash mapKeys method; takes an array of objects[{}], and assigns a specific value as a new key and assigns the original object{} to that key
            // In this case: we take the array of object returned inside action.payload, use the 'id' property as a new key and assign the original objects{} to the new key
            // Reason for ...spread on mapKeys; a large object{} is returned, we want to take the key:value pairs from that object and add them to the new object{} we have created
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};