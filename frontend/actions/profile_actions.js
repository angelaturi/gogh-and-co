import * as ArtworksAPI from "../utils/artworks_utils";
import * as GalleriesAPI from "../utils/galleries_utils";

export const RECEIVE_PROFILE_GALLERIES = "RECEIVE_PROFILE_GALLERIES";
export const RECEIVE_PROFILE_FAVORITES = "RECEIVE_PROFILE_FAVORITES";

export const receiveProfileGalleries = (galleries) => ({
  type: RECEIVE_PROFILE_GALLERIES,
  galleries,
});

export const receiveProfileFavorites = (favorites) => ({
  type: RECEIVE_PROFILE_FAVORITES,
  favorites,
});

export const receiveProfileFavoritesThunk = () => {
  return function (dispatch) {
    return ArtworksAPI.requestFavoriteArtworks().then((artworks) => {
      artworks.forEach((artwork) => {
        artwork.favorited = artwork.favorited || false;
      });
      dispatch(receiveProfileFavorites(artworks));
    });
  };
};

export const receiveProfileGalleriesThunk = () => {
  return function (dispatch) {
    return GalleriesAPI.fetchGalleries().then((galleries) => {
      dispatch(receiveProfileGalleries(galleries));
    });
  };
};

export const requestGalleries = () => {
  return function (dispatch) {
    return GalleriesAPI.fetchGalleries().then((galleries) => {
      // debugger
      dispatch(receiveProfileGalleries(galleries));
    });
  };
};
