export const REQUEST_ARTWORKS = "REQUEST_ARTWORKS";
export const RECEIVE_ARTWORKS = "RECEIVE_ARTWORKS";
export const REQUEST_FAVORITE_ARTWORKS = "REQUEST_FAVORITE_ARTWORKS";
export const REQUEST_GALLERY = "REQUEST_GALLERY";
export const SET_CURRENT_ARTWORK = "SET_CURRENT_ARTWORK";
export const RECEIVE_CURRENT_ARTWORK = "RECEIVE_CURRENT_ARTWORK";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export const CLEAR_ARTWORKS = "CLEAR_ARTWORKS";
export const RECEIVE_ARTWORKS_FAIL = "RECEIVE_ARTWORKS_FAIL";
export const CREATE_ARTWORK = "CREATE_ARTWORK";
export const TOGGLE_CURRENT_FAVORITE = "TOGGLE_CURRENT_FAVORITE";
import * as ArtworksAPI from "../utils/artworks_utils";

export const requestArtworks = () => {
  return function (dispatch) {
    return ArtworksAPI.requestArtworks().then(
      (artworks) => {
        // debugger
        dispatch(receiveArtworks(artworks));
      },
      (err) => dispatch(receiveArtworksFail(err))
    );
  };
};

export const receiveArtworksFail = (error) => ({
  type: RECEIVE_ARTWORKS_FAIL,
  error,
});

export const receiveArtworks = (artworks) => ({
  type: RECEIVE_ARTWORKS,
  artworks,
});

export const requestGallery = (id) => ({
  type: REQUEST_GALLERY,
  id,
});

export const setCurrentArtwork = (artwork) => ({
  type: SET_CURRENT_ARTWORK,
  artwork,
});

export const receiveCurrentArtwork = (artwork) => ({
  type: RECEIVE_CURRENT_ARTWORK,
  artwork,
});

export const requestFavoriteArtworks = (favorites) => ({
  type: REQUEST_FAVORITE_ARTWORKS,
  favorites,
});

export const toggleFavorite = (id) => ({
  type: TOGGLE_FAVORITE,
  id,
});

export const toggleCurrentFavorite = () => ({
  type: TOGGLE_CURRENT_FAVORITE,
});

export const receiveFavorites = (favorites) => ({
  type: RECEIVE_FAVORITES,
  favorites,
});

export const clearArtworks = () => ({
  type: CLEAR_ARTWORKS,
});

export const createArtwork = (artwork) => ({
  type: CREATE_ARTWORK,
  artwork,
});

export const setFavoriteThunk = (id) => {
  return function (dispatch) {
    return ArtworksAPI.toggleFavorite(id).then((id) => {
      dispatch(toggleFavorite(id));
    });
  };
};

export const requestFavoriteArtworksThunk = () => {
  return function (dispatch) {
    return ArtworksAPI.requestFavoriteArtworks().then((favorites) => {
      dispatch(requestFavoriteArtworks(favorites));
    });
  };
};
