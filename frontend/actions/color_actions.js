export const SET_CURRENT_COLOR = "SET_CURRENT_COLOR";

export const setCurrentColor = (color) => ({
    type: SET_CURRENT_COLOR,
    color
})

export const SET_COLORS = "SET_COLORS";

export const setColors = colors => ({
    type: SET_COLORS,
    colors
})