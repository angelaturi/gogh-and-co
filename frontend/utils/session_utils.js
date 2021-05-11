// create user

export const postUser = user => {
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
};

// sign user in

export const postSession = user => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
};

// log user out

export const deleteSession = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
};