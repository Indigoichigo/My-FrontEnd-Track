import React from 'react';
import { Link } from 'react-router-dom'


const Article = ({id, title, content, category, createdAt}) => (
    <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div>
            <span>分類：{category}</span>
            <span>{createdAt}</span>
            <span>edit</span>
            <Link to={`/remove/${id}`}>
                <span>remove</span>
            </Link>
        </div>
    </div>
);

export default Article;