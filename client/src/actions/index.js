import streams from '../apis/streams';
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS, 
    FETCH_STREAM, 
    DELETE_STREAM,
    EDIT_STREAM  
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues =>  async (dispatch, getState) => {
    // getState; second argument that we can call with Redux thunk after dispatch
    // getState().auth ; retrieves the auth state property from the Reducer index file (auth: authReducer)
    // Destructures the userId property from the auth object
    const { userId } = getState().auth;
    const response =  await streams.post('/streams', { ...formValues, userId });

    dispatch({type: CREATE_STREAM, payload: response.data});
};

// Dispatch: a thunk function, coming from redux-thunk
export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data});
};

// Receive the id of the stream and formValues holding the updates to the stream we want to make
export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
};