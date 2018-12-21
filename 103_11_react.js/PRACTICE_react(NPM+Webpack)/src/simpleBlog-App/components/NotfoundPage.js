import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p>Error 404!</p>
        <Link to='/BlogPage' component={ BlogPage }>Back to Blog</Link>
    </div>
);

export default NotFoundPage;