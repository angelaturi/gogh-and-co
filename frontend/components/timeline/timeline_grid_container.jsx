import React, {dispatch} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import TimelineGrid from './timeline_grid';
import {setCurrentTime, setTimes} from '../../actions/time_actions'
import {requestArtworks} from '../../actions/artworks_actions'

const mapStateToProps = state => ({
    times: state.time.times,
    currentTime: state.time.currentTime,
    artworks: state.artworks
})

const mapDispatchToProps = dispatch => ({    
    setCurrentTime: time => dispatch(setCurrentTime(time)),
    setTimes: times => dispatch(setTimes(times)),
    requestArtworks: () => dispatch(requestArtworks())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimelineGrid))