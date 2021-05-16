import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Artwork from './artwork';
import {setCurrentArtwork} from '../../actions/artworks_actions'


const mapStateToProps = state => ({
    artworks: state.artworks.artworks,
    artwork: state.artworks.currentArtwork
    // title: state.artworks.currentArtwork.title,
    // date_created: state.artworks.currentArtwork.date_created,
    // color: state.artworks.currentArtwork.color,
    // style: state.artworks.currentArtwork.style,
    // medium: state.artworks.currentArtwork.medium,
    // partner_organization: state.artworks.currentArtwork.partner_organization
})

const mapDispatchToProps = dispatch => ({    
    setCurrentArtwork: artwork => dispatch(setCurrentArtwork(artwork)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Artwork))