import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Artwork from './artwork';
import {setCurrentArtwork, toggleFavorite} from '../../actions/artworks_actions'


const mapStateToProps = state => ({
    artworks: state.artworks.artworks,
    artwork: state.artworks.currentArtwork,
    currentUser: state.session.currentUser,
})

const mapDispatchToProps = dispatch => ({    
    setCurrentArtwork: artwork => dispatch(setCurrentArtwork(artwork)),
    toggleFavorite: id => dispatch(toggleFavorite(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Artwork))