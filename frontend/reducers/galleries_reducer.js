import {
  REQUEST_GALLERIES,
  REQUEST_FAVORITE_GALLERIES,
  RECEIVE_GALLERIES,
  SET_GALLERY,
  RECEIVE_CURRENT_GALLERY,
  RECEIVE_COLLECTED_ARTWORKS,
  UPDATE_GALLERY,
  DELETE_GALLERY,
} from "../actions/galleries_actions";

const artworks = [
  {
    id: 0,
    title: "The Starry Night",
    creator_id: 1,
    date_created: 1889,
    color: "blue",
    style: "Post-Impressionism",
    medium: "Oil on canvas",
    partner_organization: "MoMA The Museum of Modern Art",
    favorited: false,
  },
  {
    id: 1,
    title: "Panel for Edwin R. Campbell No. 4",
    creator_id: 2,
    date_created: 1914,
    color: "blue",
    style: "Expressionism",
    medium: "Oil on canvas",
    partner_organization: "MoMA The Museum of Modern Art",
    favorited: false,
  },
  {
    id: 4,
    title: "The Juggler",
    creator_id: 5,
    date_created: 1956,
    color: "brown",
    style: "Surrealism",
    medium: "Oil and inlaid mother of pearl on board",
    partner_organization: "MoMA The Museum of Modern Art",
    favorited: false,
  },
  {
    id: 9,
    title: "Two Nudes",
    creator_id: 8,
    date_created: 1906,
    color: "orange",
    style: "Picasso's Rose Period",
    medium: "Oil on canvas",
    partner_organization: "MoMA The Museum of Modern Art",
    favorited: false,
  },
  {
    id: 11,
    title: "Bather",
    creator_id: 8,
    date_created: 1908,
    color: "gray",
    style: "Cubism",
    medium: "Oil on canvas",
    partner_organization: "MoMA The Museum of Modern Art",
    favorited: false,
  },
  {
    id: 13,
    title: "Head of a Sleeping Woman",
    creator_id: 8,
    date_created: 1907,
    color: "yellow",
    style: "Picasso's African Period",
    medium: "Oil on canvas",
    partner_organization: "MoMA The Museum of Modern Art",
    favorited: false,
  },
  {
    id: 14,
    title: "Fruit Dish",
    creator_id: 8,
    date_created: 1908,
    color: "blue",
    style: "Cubism",
    medium: "Oil on canvas",
    partner_organization: "MoMA The Museum of Modern Art",
    favorited: false,
  },
  {
    id: 16,
    title: "One Number31 1950",
    creator_id: 10,
    date_created: 1950,
    color: "gray",
    style: "Abstract Expressionism",
    medium: "Oil and enamel paint on canvas",
    partner_organization: "MoMA The Museum of Modern Art",
    favorited: false,
  },
  {
    id: 17,
    title: "Echo Number 25 1951",
    creator_id: 10,
    date_created: 1951,
    color: "black",
    style: "Abstract Expressionism",
    medium: "Enamel paint on canvas",
    partner_organization: "MoMA The Museum of Modern Art",
    favorited: false,
  },
];

const galleries = [
  { id: 0, title: "testing", description: "testing123", artworks },
  { id: 1, title: "another test", description: "another test 123", artworks },
];

const initialState = {
  galleries,
  gallery: {
    id: 0,
    title: "",
    description: "",
    artworks,
  },
};

const galleriesReducer = (state = initialState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_GALLERIES:
      return { ...state, galleries: action.galleries };
    // case CREATE_GALLERY:
    //     return {...state, galleries: [...state.galleries, action.gallery]}
    case SET_GALLERY: {
      console.log("action==>>", action);
      return { ...state, gallery: action.gallery };
    }
    case RECEIVE_COLLECTED_ARTWORKS:
      return { ...state, collectedArtworks: action.collectedArtworks };
    case DELETE_GALLERY:
      console.log("galleries");
      return {
        ...state,
        galleries: state.galleries.filter((gal) => gal.id != action.id),
      };
    default:
      return state;
  }
};

export default galleriesReducer;
