import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Artworks from './artworks';

const mapStateToProps = state => ({
    artworks: state.artworks.artworks,
    currentUser: state.session.currentUser
})

// const mapDispatchToProps = dispatch => ({

// })

export default withRouter(connect(mapStateToProps, null)(Artworks))