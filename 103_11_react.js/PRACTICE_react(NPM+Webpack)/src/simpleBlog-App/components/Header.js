import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import profileImg from '../images/blog/profile1.jpg';


const Header = () => (
    <header className="blog-header">
        <div className="blog-header___nav_acc">
            <ul className="blog-header___nav">
                <li><NavLink to="/">Blog</NavLink></li>
                <li><NavLink to="/album">Album</NavLink></li>
            </ul>
            <div className="blog-header___acc">
                <div className="if-login">
                    <Link className="blog-header___createarticle" to="/createArticle">Create Aritcle</Link>
                    <div className="blog-header___acc_img">
                        <img src={profileImg}></img>
                    </div>
                </div>
                <div className="if_-ogout blog-header___acc_loginsignup">
                    <p>login/signup</p>
                </div>
            </div>
        </div>
    </header>
);

export default Header;