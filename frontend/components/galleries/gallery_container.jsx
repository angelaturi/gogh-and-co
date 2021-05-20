import { connect } from "react-redux";
import { withRouter } from "react-router";
import Gallery from "./gallery";
import {
  receiveSingleGalleryThunk,
  deleteGalleryThunk,
} from "../../actions/galleries_actions";

const mapStateToProps = (state, ownProps) => ({
  galleries: state.galleries.galleries,
  gallery: state.galleries.gallery,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveSingleGalleryThunk: (gallery) =>
    dispatch(receiveSingleGalleryThunk(gallery)),
  deleteGalleryThunk: (id) => dispatch(deleteGalleryThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
