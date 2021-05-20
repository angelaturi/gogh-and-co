export const requestArtworks = (success, error) => {
  return $.ajax({
    method: "GET",
    url: "api/artworks",
    success,
    error,
  });
};

export const requestFavoriteArtworks = (success, error) => {
  return $.ajax({
    method: "GET",
    url: "api/artworks/favorites",
    success,
    error,
  });
};

export const requestGallery = (id, success, error) => {
  return $.ajax({
    method: "GET",
    url: "api/artworks/gallery",
    success,
    error,
  });
};

export const requestCurrentArtwork = (id, success, error) => {
  return $.ajax({
    method: "GET",
    url: `api/artworks/${id}`,
    success,
    error,
  });
};

export const toggleFavorite = (id, success, error) => {
  return $.ajax({
    method: "POST",
    url: "api/artworks/favorites",
    data: { id },
    success,
    error,
  });
};

export const createArtwork = (artwork, success, error) => {
  return $.ajax({
    method: "POST",
    url: "api/artworks",
    data: { artwork },
    success,
    error,
  });
};

// export const fetchFavorites = (success, error) => {
//   return $.ajax({
//     method: "POST",
//     url: "api/artworks/favorites",
//     success,
//     error,
//   });
// };
