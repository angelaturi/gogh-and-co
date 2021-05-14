import {
    REQUEST_GALLERIES,
    REQUEST_FAVORITE_GALLERIES,
    RECEIVE_GALLERIES,
    REQUEST_CURRENT_GALLERY,
    RECEIVE_CURRENT_GALLERY,
    CREATE_GALLERY,
    UPDATE_GALLERY,
    RECEIVE_GALLERY,
    DELETE_GALLERY,
    receiveGalleries,
    receiveGallery,
    receiveCurrentGallery,
} from '../actions/galleries_actions';
import {requestGallery} from '../actions/artworks_actions';
import * as GalleriesAPI from '../utils/galleries_utils';

const galleriesMiddleware = ({getState, dispatch}) => next => action => {
    let success = galleries => dispatch(receiveGalleries(galleries));
    
    switch (action.type) {
        case REQUEST_GALLERIES: 
            GalleriesAPI.requestGalleries(success);
            return next(action);
        case REQUEST_FAVORITE_GALLERIES:
            GalleriesAPI.requestFavoriteGalleries(success);
            return next(action);
        // case REQUEST_CURRENT_GALLERY:
        //     success = gallery => dispatch(receiveCurrentGallery(gallery));
        //     GalleriesAPI.requestCurrentGallery(action.id, success);
        //     return next(action);
        case CREATE_GALLERY:
            success = gallery => dispatch(receiveGallery(gallery))
            GalleriesAPI.createGallery(action.gallery, action.collectedArtworks, success, errors);
            return next(action);
        case UPDATE_GALLERY:
            success = gallery => {
                dispatch(receiveCurrentGallery(gallery))
                dispatch(requestGallery(gallery.id))
            }
            GalleriesAPI.updateGallery(action,gallery, action.collectedArtworks, success, errors);
            return next(action);
        case DELETE_GALLERY:
            GalleriesAPI.deleteGallery(action.id, errors);
            return next(action);
        default:
            return next(action);
    }
}

export default galleriesMiddleware