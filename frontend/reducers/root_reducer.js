import {combineReducers} from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './entities_reducer';
import artworksReducer from './artworks_reducer';
import colorReducer from './color_reducer';
import timeReducer from './time_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    artworks: artworksReducer,
    color: colorReducer,
    time: timeReducer,
    artworks
})

export default rootReducer