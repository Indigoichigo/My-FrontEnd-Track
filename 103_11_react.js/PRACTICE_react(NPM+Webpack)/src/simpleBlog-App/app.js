import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BlogRouter from './routers/BlogRouter';
import configureStore from './store/configureStore';
import { createArticle } from './actions/articles';
import { setFilter } from './actions/filters';
import style from './style/blogPage.scss';
import selectArticles from './selectors/showArticles';


const store = configureStore();

store.dispatch(createArticle({ title: 'Article test1', content: 'react react react' }));
store.dispatch(createArticle({ title: 'Article test2', content: 'redux redxu redux' }));

const state = store.getState();
const showData = selectArticles(state.articles, state.filters);
console.log(showData);

const jsx = (
    <Provider store={store}>
        <BlogRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))