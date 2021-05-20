import { connect } from "react-redux";
import { withRouter } from "react-router";
import NewGallery from "./new_gallery";
import { receiveProfileFavoritesThunk } from "../../actions/profile_actions";
import { createGalleryThunk } from "../../actions/galleries_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createGalleryThunk: (gallery, collectedArtworks) =>
    dispatch(createGalleryThunk(gallery, collectedArtworks)),
  receiveProfileFavoritesThunk: () => dispatch(receiveProfileFavoritesThunk()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewGallery)
);
