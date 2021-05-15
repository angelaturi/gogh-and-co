import {
    SET_CURRENT_COLOR,
    SET_COLORS
} from '../actions/color_actions';

const initialState = {
    colors: ["white", "gray", "pink", "purple", "royal", "blue", "green", "yellow", "orange", "red", "brown", "black"],
    currentColor: ''
}

const colorReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_COLOR:
            return {...state, currentColor: action.color}
        case SET_COLORS:
            return {...state, colors: action.colors}
        default:
            return state;
    }
}

export default colorReducer