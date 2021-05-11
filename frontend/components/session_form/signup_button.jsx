import React from 'react';
import {NavLink} from 'react-router-dom';

const signupButton = () => (
    <NavLink to="/signup" className="form-alt-submit">Create account</NavLink>
)

export default signupButton