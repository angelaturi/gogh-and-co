import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import Home from './home';
import SessionFormContainer from './session_form/session_form_container';
import CreateAccountFormContainer from './account_form/create_account_form_container'
import ArtworkContainer from './artworks/artwork_container';
import {clearArtworks, requestArtworks, requestFavoriteArtworks, requestGallery, requestCurrentArtwork, receiveCurrentArtwork} from '../actions/artworks_actions'
import TimelineGridContainer from './timeline/timeline_grid_container';
import ColorGridContainer from './color/color_grid_container';
import Explore from './explore';
import Profile from './profile';
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
            <Route exact path="/" component={Home} />
            <AuthRoute path="/login" component={SessionFormContainer}/>
            <AuthRoute path="/signup" component={CreateAccountFormContainer}/>
            <Route path="/artwork/:id" component={ArtworkContainer}/>
            <Route path="/time" component={TimelineGridContainer}/>
            <Route path="/color" component={ColorGridContainer}/>
            <Route path="/explore" component={Explore}/>
            <Route path="/profile" component={Profile}/>
        </Switch>
        )
        }
};

export default App;