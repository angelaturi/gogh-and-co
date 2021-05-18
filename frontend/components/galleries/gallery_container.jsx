import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Galleries from './favorites';

const mapStateToProps = (state, ownProps) => ({
    artworks: state.artworks.artworks,
    id: state.galleries.currentGallery.id,
    title: state.galleries.currentGallery.title,
    description: state.galleries.currentGallery.description,
    firstArtwork: state.galleries.currentGallery.firstArtwork
})

// const mapDispatchToProps = (dispatch, ownProps) => {
    
// }

export default connect(mapStateToProps, null)(Galleries)