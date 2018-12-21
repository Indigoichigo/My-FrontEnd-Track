import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/Album">Album</NavLink>
    </header>
);

export default Header;