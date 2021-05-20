import { connect } from "react-redux";
import { withRouter } from "react-router";
import Profile from "./profile";
import {
  receiveProfileFavoritesThunk,
  receiveProfileGalleriesThunk,
} from "../../actions/profile_actions";
import {
  deleteGalleryThunk,
  receiveGalleriesThunk,
} from "../../actions/galleries_actions";

const mapStateToProps = (state, ownProps) => ({
  galleries: state.galleries.galleries,
  favorites: state.profile.favorites,
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveFavorites: () => dispatch(receiveProfileFavoritesThunk()),
  receiveGalleries: () => dispatch(receiveGalleriesThunk()),
  deleteGalleryThunk: (id) => dispatch(deleteGalleryThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
