import React from 'react';

const BlogTitle = (props) => (
    <div className="blog-title">
        <h2>{props.blogTitle}</h2>
        <h3>{props.blogSubTitle}</h3>
    </div>
);

BlogTitle.defaultProps = {
    blogTitle: 'Hello, React',
    blogSubTitle: 'Play around react, have fun!'
}

export default BlogTitle;