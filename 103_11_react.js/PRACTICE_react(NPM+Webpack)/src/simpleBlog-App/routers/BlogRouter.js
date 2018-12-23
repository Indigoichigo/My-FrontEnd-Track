import React, { Component } from 'react';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';
import BlogPage from '../components/blog/BlogPage';
import AlbumPage from '../components/album/AlbumPage';
import CreateArticlePage from '../components/blog/CreateArticlePage';
import UpdateAlbumPage from '../components/Album/UpdateAlbumPage';
import NotfoundPage from '../components/NotfoundPage';
import Header from '../components/Header';

const BlogRouter = () => (
    <BrowserRouter>
        <div>
            <Header className=""/>
            <Switch>
                <Route path="/" component={BlogPage}  exact/>
                <Route path="/blog" component={BlogPage}/>
                <Route path="/album" component={AlbumPage} />
                <Route path="/createArticle" component={CreateArticlePage} />
                {/* <Route path="/updateAlbum" component={UpdateAlbumPage} /> */}
                <Route component={NotfoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default BlogRouter;