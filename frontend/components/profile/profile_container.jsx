import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Profile from './profile';
import { receiveProfileFavoritesThunk, receiveProfileGalleriesThunk } from '../../actions/profile_actions';

const mapStateToProps = (state, ownProps) => ({
    galleries: state.profile.galleries,
    favorites: state.profile.favorites,
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveFavorites: () => dispatch(receiveProfileFavoritesThunk()),
    receiveGalleries: () => dispatch(receiveProfileGalleriesThunk()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)