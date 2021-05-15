import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import ColorGrid from './color_grid';
import {setCurrentColor, setColors} from '../../actions/color_actions'
import {requestArtworks} from '../../actions/artworks_actions'


const mapStateToProps = state => ({
    colors: state.color.colors,
    currentColor: state.color.currentColor,
    artworks: state.artworks
})

const mapDispatchToProps = dispatch => ({    
    setCurrentColor: color => dispatch(setCurrentColor(color)),
    setColors: colors => dispatch(setColors(colors)),
    requestArtworks: () => dispatch(requestArtworks())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ColorGrid))