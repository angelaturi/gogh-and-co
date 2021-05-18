import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import FavoriteGallery from './favorite_gallery';
import {requestFavoriteImages, requestGallery} from '../../actions/artworks_actions';
import {updateGallery, deleteGallery, requestCurrentGallery} from '../../actions/galleries_actions';

const mapStateToProps = state => ({
    artworks: state.artworks.artworks,
    id: state.galleries.currentGallery.id,
    title: state.galleries.currentGallery.title,
    description: state.gallerie.currentGallery.description,
    errors: state.collections.errors
})

const mapDispatchToProps = dispatch => ({
    requestFavoriteArtworks: () => dispatch(requestFavoriteArtworks()),
    requestCurrentGallery: id => dispatch(requestCurrentGallery(id)),
    requestGallery: id => dispatch(requestGallery(id)),
    updateGallery: (gallery, collectedArtworks) => dispatch(updateGallery(gallery, collectedArtworks)),
    deleteGallery: id => dispatch(deleteGallery(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoriteGallery));
