import {applyMiddleware} from 'redux';
import sessionMiddleware from './session_middleware'
import artworksMiddleware from './artworks_middleware';
import galleriesMiddleware from './galleries_middleware';

const rootMiddleware = applyMiddleware(
    sessionMiddleware,
    artworksMiddleware,
    galleriesMiddleware
)

export default rootMiddleware