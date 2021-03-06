import { merge } from "lodash";

export const fetchGalleries = (success, error) => {
  return $.ajax({
    method: "GET",
    url: "api/galleries",
    success,
    error,
  });
};

export const requestFavoriteGalleries = (success, error) => {
  return $.ajax({
    method: "GET",
    url: "api/galleries/favorites",
    success,
    error,
  });
};

export const requestCurrentGallery = (id, success, error) => {
  return $.ajax({
    method: "GET",
    url: `api/galleries/${id}`,
    success,
    error,
  });
};

export const createGallery = (gallery, collectedArtworks, success, error) => {
  return $.ajax({
    method: "POST",
    url: "api/galleries/",
    data: { gallery },
    success: () => {
      return $.ajax({
        method: "POST",
        url: "api/collected_artworks/",
        data: { collectedArtworks },
        success,
      });
    },
    error,
  });
};

export const updateGallery = (gallery, collectedArtworks, success, error) => {
  return $.ajax({
    method: "PATCH",
    url: `api/galleries/${gallery.id}`,
    data: { gallery },
    success: () => {
      return $.ajax({
        method: "POST",
        url: "api/collected_artworks/recollect",
        data: { id: gallery.id, collectedArtworks },
        success,
      });
    },
    error,
  });
};

export const deleteGallery = (id, error) => {
  return $.ajax({
    type: "DELETE",
    url: `api/galleries/${id}`,
    error,
  });
};
