import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BlogRouter from './routers/BlogRouter';

const jsx = (
    // <Provider store={store}>
        <BlogRouter />
    // </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))