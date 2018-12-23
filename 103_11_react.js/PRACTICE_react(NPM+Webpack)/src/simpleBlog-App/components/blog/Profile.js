import React from 'react'

const Profile = (props) => (
    <div className="blog-profile">
        <div>
            <img />
        </div>
        <p>{props.user_account}</p>
    </div>
);

Profile.defaultProps = {
    user_account: 'userAcc',
}

export default Profile;