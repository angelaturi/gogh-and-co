import Galleries from "../components/profile/galleries";
import * as GalleriesAPI from "../utils/galleries_utils";

export const REQUEST_GALLERIES = "REQUEST_GALLERIES";
export const REQUEST_FAVORITE_GALLERIES = "REQUEST_FAVORITE_GALLERIES";
export const REQUEST_CURRENT_GALLERY = "REQUEST_CURRENT_GALLERY";
export const RECEIVE_COLLECTED_ARTWORKS = "RECEIVE_COLLECTED_ARTWORKS";
export const UPDATE_GALLERY = "UPDATE_GALLERY";
export const SET_GALLERY = "RECEIVE_GALLERY";
export const CREATE_GALLERY = "CREATE_GALLERY";
export const DELETE_GALLERY = "DELETE_GALLERY";
export const RECEIVE_GALLERIES = "RECEIVE_GALLERIES";

export const requestFavoriteGalleries = () => ({
  type: REQUEST_FAVORITE_GALLERIES,
});

// export const requestCurrentGallery = id => ({
//     type: REQUEST_CURRENT_GALLERY,
//     id
// })

//galleries page
export const receiveCollectedArtworks = (collectedArtworks) => ({
  type: RECEIVE_COLLECTED_ARTWORKS,
  collectedArtworks,
});

export const updateGallery = (gallery) => ({
  type: UPDATE_GALLERY,
  gallery,
});

export const setGallery = (gallery) => ({
  type: SET_GALLERY,
  gallery,
});

//create new gallery page
export const createGallery = (gallery) => ({
  type: CREATE_GALLERY,
  gallery,
});

export const deleteGallery = (id) => ({
  type: DELETE_GALLERY,
  id,
});

export const receiveGalleries = (galleries) => ({
  type: RECEIVE_GALLERIES,
  galleries,
});

export const receiveGalleriesThunk = () => {
  return function (dispatch) {
    return GalleriesAPI.fetchGalleries().then((galleries) => {
      dispatch(receiveGalleries(galleries));
    });
  };
};

export const receiveSingleGalleryThunk = (id) => {
  return function (dispatch) {
    return GalleriesAPI.requestCurrentGallery(id).then((gallery) => {
      dispatch(setGallery(gallery));
    });
  };
};

export const createGalleryThunk = (gallery, collectedArtworks) => {
  // debugger
  return function (dispatch) {
    return GalleriesAPI.createGallery(gallery, collectedArtworks).then(() => {
      dispatch(createGallery(gallery));
    });
  };
};

export const updateGalleryThunk = (gallery, artworks) => {
  console.log("in acct==>", gallery, artworks);
  return function (dispatch) {
    return GalleriesAPI.updateGallery(gallery, artworks).then(() => {
      dispatch(updateGallery(gallery));
    });
  };
};

export const deleteGalleryThunk = (galleryId) => {
  return function (dispatch) {
    return GalleriesAPI.deleteGallery(galleryId).then(() => {
      dispatch(deleteGallery(galleryId));
    });
  };
};
