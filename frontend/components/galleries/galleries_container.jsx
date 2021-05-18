import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Galleries from './galleries';

const mapStateToProps = (state, ownProps) => {
    debugger
    return ({
        artworks: state.artworks.artworks,
        galleries: state.galleries.galleries
    })
}

// const mapDispatchToProps = (dispatch, ownProps) => {
    
// }

export default connect(mapStateToProps, null)(Galleries)