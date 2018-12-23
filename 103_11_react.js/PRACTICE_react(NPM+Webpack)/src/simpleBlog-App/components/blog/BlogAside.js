import React from 'react';
import Profile from './Profile';
import Calendar from './Calendar';
import Category from './Category';

const BlogAside = () => (
    <div className="blog-aside">
        <Profile />
        <Calendar info={new Date()}/>
        <Category />
    </div>
);

export default BlogAside;