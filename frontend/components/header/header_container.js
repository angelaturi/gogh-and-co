import {connect} from 'react-redux'
import React from 'react';
import {withRouter} from 'react-router';
import {logout} from '../../actions/session_actions';
import Header from './header'

const mapStateToProps = ({entities, session}, ownProps) => ({
    currentUser: entities.users[session.id]
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
