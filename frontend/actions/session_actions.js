import {
    postUser,
    postSession,
    deleteSession
} from '../utils/session_utils';

// constants messengers to reducers, make sure the same no matter where we use them

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

// action creators - return POJO with type and payload

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

// thunk actions - organize way to keep our state 'in-check'

export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))

export const login = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()))





