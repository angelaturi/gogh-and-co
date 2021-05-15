import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import Home from './home';
import SessionFormContainer from './session_form/session_form_container';
import CreateAccountFormContainer from './account_form/create_account_form_container'
import Artwork from './artworks/artwork'
import {clearArtworks, requestArtworks, requestFavoriteArtworks, requestGallery, requestCurrentArtwork, receiveCurrentArtwork} from '../actions/artworks_actions'
import TimelineGridContainer from './timeline/timeline_grid_container';
import ColorGridContainer from './color/color_grid_container'
import './fontawesome'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    _home(){
        this.context.store.dispatch(requestArtworks());
        this.context.store.dispatch(requestGalleries)
    }

    render() {
        return ( 
        <Switch>
            <Route exact path="/" component={Home}/>
            <AuthRoute path="/login" component={SessionFormContainer}/>
            <AuthRoute path="/signup" component={CreateAccountFormContainer}/>
            <Route path="/artworks" component={Artwork}/>
            <Route path="/time" component={TimelineGridContainer}/>
            <Route path="/color" component={ColorGridContainer}/>
        </Switch>
        )
        }
};

export default App;