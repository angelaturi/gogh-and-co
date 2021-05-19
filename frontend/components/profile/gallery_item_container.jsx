import { connect } from "react-redux";
import { withRouter } from "react-router";
import GalleryItem from "./gallery_item";
import {
  receiveProfileGalleriesThunk,
} from "../../actions/profile_actions";

const mapStateToProps = (state, ownProps) => ({
  galleries: state.profile,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveGalleries: () => dispatch(receiveProfileGalleriesThunk()),
  requestFavoriteGalleries: () => dispatch(requestFavoriteGalleries()),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem);
