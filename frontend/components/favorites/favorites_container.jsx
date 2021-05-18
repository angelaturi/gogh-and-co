import { connect } from 'react-redux';
import { receiveFavoritesThunk } from '../../actions/artworks_actions';
import Favorites from './favorites';

const mapStateToProps = (state, ownProps) => ({
    favorites: state.artworks.favorites
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return (
        {receiveFavorites: () => dispatch(receiveFavoritesThunk())}
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)