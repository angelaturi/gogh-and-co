import { connect } from 'react-redux';
import { receiveFavoritesThunk } from '../../actions/artworks_actions';
import Favorites from './favorites';

const mapStateToProps = (state, ownProps) => {
    debugger
    return ({
        // favorites: state.artworks.,
        errors: state.errors.session,
        formType: 'Sign In'
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return (
        {receiveFavorites: () => dispatch(receiveFavoritesThunk())}
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)