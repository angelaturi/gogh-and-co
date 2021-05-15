import React, {dispatch} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import TimelineGrid from './timeline_grid';

const mapStateToProps = state => ({
    times: state.time.times,
    currentTime: state.time.currentTime
})

const mapDispatchToProps = dispatch => ({    
    setCurrentTime: time => dispatch(setCurrentTime(time)),
    setTimes: times => dispatch(setTimes(times))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimelineGrid))