// create user

export const postUser = (user, success, error) => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user },
        success,
        error
    })
};

// sign user in

export const postSession = (user, success, error) => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user },
        success,
        error
    })
};

// log user out

export const deleteSession = (error) => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session',
        error
    })
};