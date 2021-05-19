import Galleries from "../components/profile/galleries";

export const REQUEST_GALLERIES = 'REQUEST_GALLERIES';
export const REQUEST_FAVORITE_GALLERIES = 'REQUEST_FAVORITE_GALLERIES';
export const REQUEST_CURRENT_GALLERY = 'REQUEST_CURRENT_GALLERY';
export const RECEIVE_CURRENT_GALLERY = 'RECEIVE_CURRENT_GALLERY';
export const CREATE_GALLERY = 'CREATE_GALLERY';
export const UPDATE_GALLERY = 'UPDATE_GALLERY';
export const RECEIVE_GALLERY = 'RECEIVE_GALLERY';
export const DELETE_GALLERY = 'DELETE_GALLERY';

export const requestFavoriteGalleries = () => ({
    type: REQUEST_FAVORITE_GALLERIES
})

// export const requestCurrentGallery = id => ({
//     type: REQUEST_CURRENT_GALLERY,
//     id
// })

export const receiveCurrentGallery = gallery => ({
    type: RECEIVE_CURRENT_GALLERY
})

export const createGallery = (collectedArtworks) => ({
    type: CREATE_GALLERY,
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

// export const receiveGalleriesThunk = () => {
//     debugger
//     return function (dispatch) {
//         return GalleriesAPI.requestGalleries()
//             .then(
//                 () => {
//                     dispatch(receiveGalleries())
//                 },)

//     } 
// }

export const createGalleryThunk = () => {
    // debugger
    return function (dispatch) {
        return GalleriesAPI.createGallery(gallery, collectedArtworks)
            .then(
                (collectedArtworks) => {
                    dispatch(createGallery(collectedArtworks))
                },)

    } 
}
