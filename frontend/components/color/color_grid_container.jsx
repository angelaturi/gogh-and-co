import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import ColorGrid from './color_grid';

const mapStateToProps = state => ({
    colors: state.color.colors,
    currentColor: state.color.currentColor
})

const mapDispatchToProps = dispatch => ({    
    setCurrentColor: color => dispatch(setCurrentColor(color)),
    setColors: colors => dispatch(setColors(colors))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ColorGrid))