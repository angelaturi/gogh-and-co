import {
    REQUEST_ARTWORKS,
    RECEIVE_ARTWORKS,
    REQUEST_FAVORITE_ARTWORKS,
    REQUEST_GALLERY,
    REQUEST_CURRENT_ARTWORK,
    RECEIVE_CURRENT_ARTWORK,
    TOGGLE_FAVORITE,
    RECEIVE_FAVORITE,
    CLEAR_ARTWORKS, 
    receiveArtworks,
    receiveCurrentArtwork,
    receiveFavorite
} from '../actions/artworks_actions'
import {createGallery} from '../actions/galleries_actions';
import * as ArtworksAPI from '../utils/artworks_utils';

const artworksMiddleware = ({getState, dispatch}) => next => action => {
    let success = artworks => dispatch(receiveArtworks(artworks));

    switch(action.type){
        case REQUEST_ARTWORKS:
            ArtworksAPI.requestArtworks(success);
            return next(action);
        case REQUEST_FAVORITE_ARTWORKS:
            ArtworksAPI.requestFavoriteArtworks(success);
            return next(action);
        case REQUEST_GALLERY:
            ArtworksAPI.requestGallery(action.id, success);
            return next(action);
        case REQUEST_CURRENT_ARTWORK:
            success = artwork => dispatch(receiveCurrentArtwork(artwork))
            ArtworksAPI.requestCurrentArtwork(action.id, success);
            return next(action);
        case TOGGLE_FAVORITE:
            success = () => dispatch(receiveFavorite())
            ArtworksAPI.toggleFavorite(action.id, success)
            return next(action);
        default:
            return next(action);
    }
}

export default artworksMiddleware