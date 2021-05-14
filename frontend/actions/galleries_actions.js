export const REQUEST_GALLERIES = 'REQUEST_GALLERIES';
export const REQUEST_FAVORITE_GALLERIES = 'REQUEST_FAVORITE_GALLERIES';
export const RECEIVE_GALLERIES = 'RECEIVE_GALLERIES';
export const REQUEST_CURRENT_GALLERY = 'REQUEST_CURRENT_GALLERY';
export const RECEIVE_CURRENT_GALLERY = 'RECEIVE_CURRENT_GALLERY';
export const CREATE_GALLERY = 'CREATE_GALLERY';
export const UPDATE_GALLERY = 'UPDATE_GALLERY';
export const RECEIVE_GALLERY = 'RECEIVE_GALLERY';
export const DELETE_GALLERY = 'DELETE_GALLERY';

export const requestGalleries = () => ({
    type: REQUEST_GALLERIES
})


export const requestFavoriteGalleries = () => ({
    type: REQUEST_FAVORITE_GALLERIES
})

export const receiveGalleries = galleries => ({
    type: RECEIVE_GALLERIES
})

// export const requestCurrentGallery = id => ({
//     type: REQUEST_CURRENT_GALLERY,
//     id
// })

export const receiveCurrentGallery = gallery => ({
    type: RECEIVE_CURRENT_GALLERY
})

export const createGallery = (gallery, collectedArtworks) => ({
    type: CREATE_GALLERY,
    gallery,
    collectedArtworks
})

export const updateGallery = (gallery, collectedArtworks) => ({
    type: UPDATE_GALLERY,
    gallery,
    collectedArtworks
})

export const receiveGallery = gallery => ({
    type: RECEIVE_GALLERY,
    gallery
})

// export const deleteGallery = id ({
//     type: DELETE_GALLERY,
//     id
// })