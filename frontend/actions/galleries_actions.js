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
  gallery
});

export const setGallery = (gallery) => ({
  type: SET_GALLERY,
  gallery
});

//create new gallery page
export const createGallery = (gallery) => ({
  type: CREATE_GALLERY,
  gallery
})


// export const deleteGallery = id ({
//     type: DELETE_GALLERY,
//     id
// })

// export const receiveGalleriesThunk = () => {
//     debugger
//     return function (dispatch) {
//         return GalleriesAPI.requestGalleries()
//             .then(
//                 () => {
//                     dispatch(receiveGalleries())
//                 },)

//     }
// }

export const createGalleryThunk = (gallery) => {
  // debugger
  return function (dispatch) {
    return GalleriesAPI.createGallery(gallery)
    .then(
      () => {
        dispatch(createGallery(gallery));
      }
    );
  };
};

export const updateGalleryThunk = (gallery) => {
  // debugger
  return function (dispatch) {
    return GalleriesAPI.updateGallery(gallery)
    .then(
      () => {
      dispatch(updateGallery(gallery));
    }
    );
  };
};

