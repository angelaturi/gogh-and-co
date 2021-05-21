import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { home } from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
  return (
    <div className={`sidebar ${props.isNavOpen && "slide-in"}`}>
      <div className={"sidebar-header"}>
        <FontAwesomeIcon icon={["fa", "bars"]} onClick={props.toggle} />
      </div>

      <nav className={"sidebar-nav"}>
        <NavLink exact to="/" className="sidebar-link">
          <span className="icon">
            <i className="fas fa-home"></i>
          </span>
          <span>Home</span>
        </NavLink>

        <NavLink exact to="/explore" className="sidebar-link">
          <span className="icon">
            <i className="far fa-compass"></i>
          </span>
          <span>Explore</span>
        </NavLink>

        <NavLink exact to="/nearby" className="sidebar-link">
          <span className="icon">
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <span>Nearby</span>
        </NavLink>

        <NavLink exact to="/profile" className="sidebar-link">
          <span className="icon">
            <i className="far fa-user-circle"></i>
          </span>
          <span>Profile</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
