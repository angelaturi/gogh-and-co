import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "react-modal";
import { AuthRoute, ProtectedRoute, HeaderRoute } from "../utils/route_utils";
import Home from "./home";
import SessionFormContainer from "./session_form/session_form_container";
import CreateAccountFormContainer from "./account_form/create_account_form_container";
import ArtworkContainer from "./artworks/artwork_container";
import {
  clearArtworks,
  requestArtworks,
  requestFavoriteArtworks,
  requestGallery,
  requestCurrentArtwork,
  receiveCurrentArtwork,
} from "../actions/artworks_actions";
import TimelineGridContainer from "./timeline/timeline_grid_container";
import ColorGridContainer from "./color/color_grid_container";
import Explore from "./explore";
import ProfileContainer from "./profile/profile_container";
import GalleryItemContainer from "./profile/gallery_item_container";
import NewGalleryContainer from "./galleries/new_gallery_container";
import GalleryContainer from "./galleries/gallery_container";
import EditGalleryContainer from './galleries/edit_gallery_container';
import "./fontawesome";



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // _home() {
  //   this.context.store.dispatch(requestArtworks());
  //   this.context.store.dispatch(requestGalleries);
  // }

  render() {
    return (
      <Switch>
        <HeaderRoute exact path="/" component={Home} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={CreateAccountFormContainer} />
        <HeaderRoute path="/artwork/:id" component={ArtworkContainer} />
        <HeaderRoute path="/time" component={TimelineGridContainer} />
        <HeaderRoute path="/color" component={ColorGridContainer} />
        <HeaderRoute path="/explore" component={Explore} />
        <HeaderRoute path="/profile" component={ProfileContainer} />
        <HeaderRoute path="/gallery/:id" component={GalleryItemContainer} />
        <Route path="/favorite/create" component={NewGalleryContainer} />
        <HeaderRoute path="/favorite/group/:id" component={GalleryContainer} />
        <Route path="/favorite/edit/:id" component={EditGalleryContainer} />
        
        {/* <Route path="/favorite/delete/:id" component={DeleteGalleryContainer} /> */}
      </Switch>
    );
  }
}

export default App;
