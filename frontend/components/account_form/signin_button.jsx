import React from 'react';
import {NavLink} from 'react-router-dom';

const signinButton = () => (
    <NavLink to="/login" className="form-alt-submit">Sign in instead</NavLink>
)

export default signinButton