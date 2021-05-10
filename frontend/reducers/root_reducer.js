import {combineReducers} from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer
})

export default RootReducer