import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';
import HeaderContainer from '../components/header/header_container';

// whether a user is logged in

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/"/> : <Component {...props} />
        )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))

const Header = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={(props) =>
        <React.Fragment>
            <HeaderContainer />
          <Component {...props} />
        </React.Fragment>
    }
  />
);

export const HeaderRoute = withRouter(connect(mapStateToProps)(Header));

// whether a user if logged out

const Protected = ({loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )}
    />
);

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))