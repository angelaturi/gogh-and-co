export const REQUEST_ARTWORKS = "REQUEST_ARTWORKS";
export const RECEIVE_ARTWORKS = "RECEIVE_ARTWORKS";
export const REQUEST_FAVORITE_ARTWORKS = "REQUEST_FAVORITE_ARTWORKS";
export const REQUEST_GALLERY = "REQUEST_GALLERY";
export const REQUEST_CURRENT_ARTWORK = "REQUEST_CURRENT_ARTWORK";
export const RECEIVE_CURRENT_ARTWORK = "RECEIVE_CURRENT_ARTWORK";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const CLEAR_ARTWORKS = "CLEAR_ARTWORKS";
export const RECEIVE_ARTWORKS_FAIL = "RECEIVE_ARTWORKS_FAIL"
import * as ArtworksAPI from '../utils/artworks_utils';

export const requestArtworks = () => {
    return function (dispatch) {
        return ArtworksAPI.requestArtworks()
            .then(
                (artworks) => {
                    debugger
                    dispatch(receiveArtworks(artworks))
                },
                (err) => dispatch(receiveArtworksFail(err))
            )
    } 
}

export const receiveArtworksFail = error => ({
    type: RECEIVE_ARTWORKS_FAIL,
    error
})

export const receiveArtworks = artworks => ({
    type: RECEIVE_ARTWORKS,
    artworks
})

export const requestFavoriteArtworks = () => ({
    type: REQUEST_FAVORITE_ARTWORKS
})

export const requestGallery = id => ({
    type: REQUEST_GALLERY,
    id
})

export const requestCurrentArtwork = id => ({
    type: REQUEST_CURRENT_ARTWORK,
    id
})

export const receiveCurrentArtwork = artwork => ({
    type: RECEIVE_CURRENT_ARTWORK,
    artwork
})

export const toggleFavorite = id => ({
    type: TOGGLE_FAVORITE,
    id
})

export const receiveFavorite = id => ({
    type: RECEIVE_FAVORITE
})

export const clearArtworks = () => ({
    type: CLEAR_ARTWORKS
})