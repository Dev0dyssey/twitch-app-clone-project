import streams from '../apis/streams';
import history from '../history';
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
    // Do some programmatic navigation to get user back to the Root Route (Showing list of Streams to the User)
    // Navigate using history.push('<path>'); this tells the App where to navigate the customer
    history.push('/');

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
// .patch instead of .put request; allows us to keep other properties that are not being updated (in this case the userID)
export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push('/');
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
    history.push('/');
};