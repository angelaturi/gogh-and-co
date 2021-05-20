import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Artwork from "./artwork";
import {
  setCurrentArtwork,
  toggleFavorite,
  toggleCurrentFavorite,
  setFavoriteThunk,
  requestFavoriteArtworksThunk,
} from "../../actions/artworks_actions";

const mapStateToProps = (state, ownProps) => ({
  artworks: state.artworks.artworks,
  artwork: state.artworks.currentArtwork,
  currentUser: state.entities.users[state.session.id],
  favorites: state.artworks.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentArtwork: (artwork) => dispatch(setCurrentArtwork(artwork)),
  toggleFavorite: (id) => dispatch(toggleFavorite(id)),
  toggleCurrentFavorite: () => dispatch(toggleCurrentFavorite()),
  setFavoriteThunk: (id) => dispatch(setFavoriteThunk(id)),
  requestFavoriteArtworksThunk: () => dispatch(requestFavoriteArtworksThunk()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Artwork)
);
