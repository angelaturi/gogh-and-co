import {
    RECEIVE_CURRENT_USER,
    CREATE_USER,
    LOGIN_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS,
    CLEAR_SESSION_ERRORS,
    loginUser,
    logout,
    createUser,
    receiveCurrentUser,
    receiveErrors
} from '../actions/session_actions'
import * as SessionAPI from '../utils/session_utils'

const sessionMiddleware = ({getState, dispatch}) => next => action => {
    let success = user => dispatch(receiveCurrentUser(user));
    let errors = data => dispatch(receiveErrors(data));

    switch (action.type) {
        case LOGIN_USER:
            SessionAPI.postSession(action.user, success, errors);
            return next(action);
        case LOGOUT_CURRENT_USER:
            SessionAPI.deleteSession(action.user, success, errors);
            return next(action);
        case CREATE_USER:
            SessionAPI.postUser(action.user, success, errors);
            return next(action);
        default:
            next(action);
    }
}

export default sessionMiddleware