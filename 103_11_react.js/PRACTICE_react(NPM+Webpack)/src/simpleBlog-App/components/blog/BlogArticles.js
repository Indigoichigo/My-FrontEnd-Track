import React from 'react'
import { connect } from 'react-redux';
import Article from './Article';
import selectArticles from '../../selectors/showArticles';

const BlogArticles = (props) => (
    <div className="blog-articles">
        This is BlogArticles
        {props.articles.map((article, index) => {
            return <Article key={index} {...article} />
        })}
    </div>
);


const mapStateToProps = (state) => {
    return {
        articles: selectArticles(state.articles, state.filters)
    }
}

export default connect(mapStateToProps)(BlogArticles);