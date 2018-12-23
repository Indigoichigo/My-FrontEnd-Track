import React from 'react';
import profileImg from '../../images/blog/profile1.jpg';

const Profile = (props) => (
    <div className="blog-profile">
        <h3>Profile</h3>
        <div className="blog-profile___img">
            <img alt="404" src={profileImg}/>
        </div>
        <p className="blog-profile___acc">{props.user_account}</p>
    </div>
);

Profile.defaultProps = {
    user_account: 'user account',
}

export default Profile;
