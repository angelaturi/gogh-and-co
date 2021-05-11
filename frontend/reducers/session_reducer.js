import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

// need to create a place in our state where we can store information about our current user


// default state for session - want to return if no current user

const _nullSession = {
    currentUser: null
};

export default (state = _nullSession, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {currentUser: action.user})
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return state;
    }
};