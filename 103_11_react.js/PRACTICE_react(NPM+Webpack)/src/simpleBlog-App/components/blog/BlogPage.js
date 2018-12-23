import React from 'react';
import BlogAside from './BlogAside';
import BlogArticles from './BlogArticles';
import BlogTitle from './BlogTitle';



const BlogPage = () => (
    <div id="blogpage">
        <div className="blog-banner">
            <BlogTitle />
        </div>
        
        <div className="blog-content clearfix">
            <BlogAside />
            <BlogArticles />
        </div>
    </div>
);

export default BlogPage;