import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import Home from './home';
import SessionFormContainer from './session_form/session_form_container';
import CreateAccountFormContainer from './account_form/create_account_form_container'
import './fontawesome'

const App = () => {
    return ( 
        <Switch>
            <Route exact path="/" component={Home}/>
            <AuthRoute path="/login" component={SessionFormContainer}/>
            <AuthRoute path="/signup" component={CreateAccountFormContainer}/>
        </Switch>
    )
};

export default App;