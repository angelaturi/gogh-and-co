import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NewGallery from './new_gallery';

const mapStateToProps = (state, ownProps) => ({
    // collectedArtworks: state.
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    createGalleryThunk: collectedArtworks => dispatch(createGalleryThunk(collectedArtworks))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGallery))