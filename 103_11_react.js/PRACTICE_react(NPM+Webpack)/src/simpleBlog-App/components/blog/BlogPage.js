import React from 'react';
import BlogAside from './BlogAside';
import BlogArticles from './BlogArticles';
import Header from '../Header';



const BlogPage = () => (
    <div id="blogpage">
        <div className="blog-banner">
            Banner here
        </div>
        <Header />
        <div className="blog-content clearfix">
            <BlogAside />
            <BlogArticles />
        </div>
    </div>
);

export default BlogPage;