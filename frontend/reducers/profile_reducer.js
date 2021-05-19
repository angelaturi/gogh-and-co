import {
    RECEIVE_PROFILE_GALLERIES,
    REQUEST_PROFILE_GALLERIES,
    RECEIVE_PROFILE_FAVORITES,
    REQUEST_PROFILE_FAVORITES
} from '../actions/profile_actions'

const initialState = {
    galleries: [],
    favorites: [],
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

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case RECEIVE_PROFILE_GALLERIES:
            return {...state, galleries: action.galleries}
        case RECEIVE_PROFILE_FAVORITES:
            return {...state, favorites: action.favorites}
        default:
            return state;
    }
}

export default profileReducer