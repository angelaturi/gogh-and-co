import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Artwork from './artwork';
import {setCurrentArtwork, toggleFavorite, toggleCurrentFavorite} from '../../actions/artworks_actions'


const mapStateToProps = (state, ownProps) => ({
    artworks: state.artworks.artworks,
    artwork: state.artworks.currentArtwork,
    currentUser: state.entities.users[state.session.id],

})

const mapDispatchToProps = (dispatch) => ({
  setCurrentArtwork: (artwork) => dispatch(setCurrentArtwork(artwork)),
  toggleFavorite: (id) => dispatch(toggleFavorite(id)),
  toggleCurrentFavorite: () => dispatch(toggleCurrentFavorite())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Artwork))