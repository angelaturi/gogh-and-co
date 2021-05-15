export const SET_CURRENT_TIME = "SET_CURRENT_TIME";

export const setCurrentTime = (time) => ({
    type: SET_CURRENT_TIME,
    time
})

export const SET_TIMES = "SET_TIMES";

export const setTimes = times => ({
    type: SET_TIMES,
    times
})