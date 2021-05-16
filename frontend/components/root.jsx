import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import App from './app';
import HeaderContainer from './header/header_container'

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <HeaderContainer />
                <App />
            </HashRouter>
        </Provider>   
    )
}

export default Root