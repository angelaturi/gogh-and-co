# van Gogh & co

Live: https://gogh-and-co.herokuapp.com/#/

van Gogh & co is a clone of Google Arts & Culture, an online platform that provides a virtual renaissance of ultra high-resolution images of artworks from cultural institutions throughout the world.

## Features & Implementation

### Artwork render

Upon navigation to an artwork, the store records the artwork in the frontend store as the currentArtwork and the currentArtwork is load. iv-viewer was used to implement pan and zoom.

If logged in, a favorite icon is visible beneath the artwork that allows the user to favorite or unfavorite an artwork.

### Favorites

Users and artworks are stored in different tables in the database, and a favorite joins table connects the two. Upon navigation to the favorites page, an API call is made to request a user's favorites.

### Galleries

Favorited artworks can be curated into galleries. Artworks and galleries are stored in different tables in the database, and a collected_artworks joins table connects artworks with galleries. A gallery has a `title`, `description`, and `user_id`.

Upon navigation to the user's favorites page, an API call is made to request the user's galleries. Upon navigation to a gallery's page, an API call is made to request the gallery's artworks.

Galleries can be created, read, updated, and destroed. Creation and update forms do not redirect to new routes or components, but are revealed and hidden using semantic HTML5, CSS selectors, and jQuery.

### User authentication

Users can sign up, login, logout. Passwords are encrypted with BCrypt. Backend authentication uses session tokens. A logged-in user is communicated to the frontend by bootstrapping the user to the window, the preloading the frontend store with the user or null.

