import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, logout, createAccount} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    // bootstrapping user

    if (window.currentUser) {
        let preloadedState = {
            entities: {
                    users: {[window.currentUser.id]: window.currentUser}
            },
            session: {id: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // window.login = login;
    // window.logout = logout;
    // window.createAccount = createAccount;
    window.getState = store.getState;
    window.dispatch = store.dispatch

    ReactDOM.render(<Root store={store}/>, root)
})