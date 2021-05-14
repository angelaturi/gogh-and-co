import React, { useRef } from 'react';
import Logo from '../logo';
import SigninButton from './signin_button';
import UserIconContainer from './user_icon_container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Sidebar from '../sidebar'

const Header = (props) => {
    const {currentUser, logout} = props
    const sidebar = useRef(null)
    // const screen = useRef(null)

    const toggleSidebar = () => {
        // debugger
        sidebar.current.classList.toggle('slide-in')
        // screen.current.classList.toggle('hide')
    }

    return (
        <div id="header">
            <div className="dropdown" ref={sidebar}>
                <div id="dropdown-header">
                    <div className="hamburger-circle" onClick={toggleSidebar}>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="hamburger">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </div>
                </div>
                <Sidebar />
            </div>

            <div className="left-header">
                <div className="hamburger-circle" onClick={toggleSidebar}>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="hamburger">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                </div>

                <div className="logo">
                    <Logo />
                </div>
            </div>

            <div className="right-header">
                <div className="right-header-words">
                    <a>Home</a>
                </div>
                <div className="right-header-words">
                    <a>Explore</a>
                </div>
                <div className="right-header-words">
                    <a>Nearby</a>
                </div>
                <div className="right-header-words">
                    <a>Favorites</a>
                </div>

                <div className="search-icon">
                    <FontAwesomeIcon icon={['fa', 'search']} />
                </div>

                
            {currentUser ? <UserIconContainer /> : <SigninButton />}
                
            </div>
        </div>
    )
}

export default Header