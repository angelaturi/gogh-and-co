import {
    postUser,
    postSession,
    deleteSession
} from '../utils/session_utils';

// constants messengers to reducers, make sure the same no matter where we use them

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"

// action creators - return POJO with type and payload

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

// thunk actions - organize way to keep our state 'in-check'

export const createAccount = formUser => dispatch => postUser(formUser)
    .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )

export const login = formUser => dispatch => postSession(formUser)
    .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )

export const logout = () => dispatch => deleteSession()
    .then(
        () => dispatch(logoutCurrentUser()),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )

ex



