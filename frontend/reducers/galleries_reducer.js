import {
    REQUEST_GALLERIES,
    REQUEST_FAVORITE_GALLERIES,
    RECEIVE_GALLERIES,
    REQUEST_CURRENT_GALLERY,
    RECEIVE_CURRENT_GALLERY,
    CREATE_GALLERY,
    UPDATE_GALLERY,
    RECEIVE_GALLERY,
    DELETE_GALLERY
} from '../actions/galleries_actions'

const initialState = {
    collectedArtworks: [],
    galleries: [],
    currentGallery: {
        id: 0,
        title: '',
        description: '',
        firstArtwork: {
            id: 0,
            title: "",
            date_created: null,
            color: "",
            style: "",
            medium: "",
            partner_organization: ""}}
}

const galleriesReducer = (state = initialState, action) => {
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_GALLERIES:
            return action.galleries
        case RECEIVE_GALLERY:
            nextState.galleries.push(action.gallery)
            return nextState
        case RECEIVE_CURRENT_GALLERY:
            nextState.currentGallery = action.gallery
            return nextState
        case CREATE_GALLERY:
            return {...state,
            collectedArtworks: action.collectedArtworks}
        default:
            return state;
    }
}

export default galleriesReducer