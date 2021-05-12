import React from 'react';
import {NavLink} from 'react-router-dom';

const SigninButton = (props) => {
    return (
        <NavLink to="login" id="signin-text">
            <button className="signin-button">
                <p>Sign in</p>
            </button>
        </NavLink>
    )
}

export default SigninButton;