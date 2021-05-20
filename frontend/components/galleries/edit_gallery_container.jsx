import { connect } from "react-redux";
import { withRouter } from "react-router";
import EditGallery from "./edit_gallery";
import {
  receiveSingleGalleryThunk,
  updateGalleryThunk,
} from "../../actions/galleries_actions";

const mapStateToProps = (state, ownProps) => ({
  galleries: state.galleries.galleries,
  gallery: state.galleries.gallery,
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveSingleGalleryThunk: (id) => dispatch(receiveSingleGalleryThunk(id)),
  updateGalleryThunk: (gallery, artworks) =>
    dispatch(updateGalleryThunk(gallery, artworks)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGallery);
