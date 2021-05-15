import {
    REQUEST_ARTWORKS,
    RECEIVE_ARTWORKS,
    REQUEST_FAVORITE_ARTWORKS,
    REQUEST_GALLERY,
    REQUEST_CURRENT_ARTWORK,
    RECEIVE_CURRENT_ARTWORK,
    TOGGLE_FAVORITE,
    RECEIVE_FAVORITE,
    CLEAR_ARTWORKS
} from '../actions/artworks_actions';

const artwork = {
    id: 0,
    title: "",
    date_created: null,
    color: "",
    style: "",
    medium: "",
    partner_organization: "",
    url: ,
    favorited: false
}

const initialState = {
    artworks: [],
    currentArtwork: {
        id: 0,
        title: "",
        date_created: null,
        color: "",
        style: "",
        medium: "",
        partner_organization: "",
        favorited: false}
}

const artworksReducer = (state = initialState, action) => {
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ARTWORKS:
            return action.artworks
        case CLEAR_ARTWORKS:
            nextState.artworks = [];
            return nextState
        case RECEIVE_CURRENT_ARTWORK:
            nextState.currentArtwork = action.artwork;
            return nextState
        case RECEIVE_FAVORITE:
            nextState.currentArtwork.favorited = !nextState.currentArtwork.favorited
            return nextState
        default:
            return state;
    }
}

export default artworksReducer