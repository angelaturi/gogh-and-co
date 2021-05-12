import React from 'react';
import {withRouter} from 'react-router';
import HeaderContainer from './header/header_container'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main-content">
                <HeaderContainer />
            </div>
        )
    }
}

export default withRouter(Home);