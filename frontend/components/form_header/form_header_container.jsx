import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import FormHeader from './form_header';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({    
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormHeader))