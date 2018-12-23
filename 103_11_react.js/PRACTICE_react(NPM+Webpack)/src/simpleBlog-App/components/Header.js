import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
    <nav>
        <span><NavLink to="/blog">Blog</NavLink></span>
        <span><NavLink to="/Album">Album</NavLink></span>
    </nav>
);

export default Header;