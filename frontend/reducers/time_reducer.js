import {
    SET_CURRENT_TIME,
    SET_TIMES
} from '../actions/time_actions';

const initialState = {
    times: [1800, 1900, 2000, 2001, 2002, 2003, 2005, 2006, 2007, 2008, 2009, 2010],
    currentTime: ''
}

const timeReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_TIME:
            return {...state, currentTime: action.time}
        case SET_TIMES:
            return {...state, times: action.times}
        default:
            return state;
    }
}

export default timeReducer