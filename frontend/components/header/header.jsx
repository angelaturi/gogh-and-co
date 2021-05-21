import React, { useState } from 'react';
import Logo from './logo';
import SigninButton from './signin_button';
import UserIconContainer from './user_icon_container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Sidebar from './sidebar';
import Search from './search';
import {Link} from 'react-router-dom';

const Header = ({ currentUser, logout }) => {

  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleSidebar = () => {
    setIsNavOpen(!isNavOpen)
  };

  return (
    <header className={"header"}>
        <Sidebar isNavOpen={isNavOpen} toggle={toggleSidebar}/>

      <div className="brand">
        <FontAwesomeIcon icon={["fa", "bars"]} onClick={toggleSidebar} />
        <Logo />
      </div>

      <nav className="primary-nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/explore"}>Explore</Link>
        <Link to={"/maps"}>Nearby</Link>
        <Link to={"/profile"}>Favorites</Link>
        
        <Search />

        {currentUser ? <UserIconContainer /> : <SigninButton />}
      </nav>
    </header>
  );
};

export default Header