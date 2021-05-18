import {
    REQUEST_ARTWORKS,
    RECEIVE_ARTWORKS,
    REQUEST_FAVORITE_ARTWORKS,
    REQUEST_GALLERY,
    SET_CURRENT_ARTWORK,
    RECEIVE_CURRENT_ARTWORK,
    TOGGLE_FAVORITE,
    RECEIVE_FAVORITES,
    CLEAR_ARTWORKS,
    RECEIVE_ARTWORKS_FAIL
} from '../actions/artworks_actions';

const artworks = [
        {id: 0, title: 'The Starry Night', creator_id: 1, date_created: 1889, color: 'blue', style: 'Post-Impressionism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 1, title:'Panel for Edwin R. Campbell No. 4', creator_id: 2, date_created: 1914, color: 'blue', style: 'Expressionism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 2, title: 'The Persistence of Memory', creator_id: 3, date_created: 1931, color: 'brown', style: 'Surrealism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 3, title: 'The Town of the Poor', creator_id: 4, date_created: 1951, color: 'gray', style: 'Abstract Expressionism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 4, title: 'The Juggler', creator_id: 5, date_created: 1956, color: 'brown', style: 'Surrealism', medium: 'Oil and inlaid mother of pearl on board', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 5, title: 'Portrait of Meijer de Haan', creator_id: 6, date_created: 1889, color: 'red', style: 'Post-Impressionism', medium: 'Oil on wood', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 6, title: 'Château Noir', creator_id: 7, date_created: 1903, color: 'blue', style: 'Post-Impressionism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 7, title: "Le Demoiselles d'Avignon", creator_id: 8, date_created: 1907, color: 'pink', style: 'Cubism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 8, title: 'Woman Plaiting Her Hair', creator_id: 8, date_created: 1906, color: 'pink', style: "Picasso's Rose Period", medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 9, title: 'Two Nudes', creator_id: 8, date_created: 1906, color: 'orange', style: "Picasso's Rose Period", medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 10, title: 'The Reservoir, Horta de Ebro', creator_id: 8, date_created: 1909, color: 'orange', style: 'Cubism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 11, title: 'Bather', creator_id: 8, date_created: 1908, color: 'gray', style: 'Cubism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 12, title: 'Repose', creator_id:8, date_created: 1908, color: 'orange', style: 'Cubism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 13, title: 'Head of a Sleeping Woman', creator_id: 8, date_created: 1907, color: 'yellow', style: "Picasso's African Period", medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 14, title: 'Fruit Dish', creator_id: 8, date_created: 1908, color: 'blue', style: 'Cubism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 15, title: 'Pharisees', creaor_id: 9, date_created: 1912, color: 'blue', style: 'Expressionism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 16, title: 'One Number31 1950', creator_id: 10, date_created: 1950, color: 'gray', style: 'Abstract Expressionism', medium: 'Oil and enamel paint on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 17, title: 'Echo Number 25 1951', creator_id: 10, date_created: 1951, color: 'black', style: 'Abstract Expressionism', medium: 'Enamel paint on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 18, title: 'The Dream', creator_id: 11, date_created: 1910, color: 'green', style: 'Modern Art', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
        {id: 19, title: 'Lagoon from Jazz', creator_id: 12, date_created: 1947, color: 'blue', style: 'Modern Art', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art', favorited: false},
    ]

const initialState = {    
    artworks,
    currentArtwork: {
        id: 0,
        title: "",
        date_created: null,
        color: "",
        style: "",
        medium: "",
        partner_organization: "",
        favorited: false},
    isLoaded: false,
    error: ""
}

const artworksReducer = (state = initialState, action) => {
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ARTWORKS:
            return {
                    ...state, 
                    artworks: action.artworks,
                    isLoaded: true
                }
        case RECEIVE_ARTWORKS_FAIL:
            return {
                    ...state, 
                    error: action.error,
                    isLoaded: true
                }
        case CLEAR_ARTWORKS:
            nextState.artworks = [];
            return nextState
        case RECEIVE_CURRENT_ARTWORK:
            nextState.currentArtwork = action.artwork;
            return nextState
        case RECEIVE_FAVORITES:
            debugger
            // const favorites = {state.favorites}
        case SET_CURRENT_ARTWORK:
            return {
                ...state,
                currentArtwork: action.artwork
            }
        case TOGGLE_FAVORITE:
            const currentFavorite  = {...state}.currentArtwork.favorited;
            return {
                ...state,
                currentArtwork: {...state.currentArtwork, favorited: !currentFavorite}
            }
        default:
            return state;
    }
}

export default artworksReducer