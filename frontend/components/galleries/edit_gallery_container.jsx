import { connect } from "react-redux";
import { withRouter } from "react-router";
import EditGallery from "./edit_gallery";
import { setGallery } from "../../actions/galleries_actions";

const mapStateToProps = (state, ownProps) => ({
  galleries: state.galleries.galleries,
  gallery: state.galleries.gallery,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setGallery: (gallery) => dispatch(setGallery(gallery)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGallery);
