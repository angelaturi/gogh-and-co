import React from 'react';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import SessionFormContainer from './session_form/session_form_container';
import CreateAccountFormContainer from './account_form/create_account_form_container'

const App = () => {
    // debugger
    return ( 
        <div>
            <Route path="/"/>
            <Route path="/login" component={SessionFormContainer}/>
            <Route path="/signup" component={CreateAccountFormContainer}/>
        </div>
    )
};

export default App;