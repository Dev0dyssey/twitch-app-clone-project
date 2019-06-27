import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            {/* Any code placed outside of the <BrowserHeader /> will always be visible irrespective of the route */}
            {/* Router instead of BrowserRouter; allows us to use the customer history object vs the built in history object of BrowserRouter */}
            {/* No longer importing BrowserRouter, but a Router instead */}
            <Router history = {history}>
                <div>
                    {/* React Router cares only after the part of the url following the port/site definition */}
                    {/* Chooses to hide/show the component that matches the path definition */}
                    {/* Any component containing a <Link></Link> tag must be placed within the Browser Router element */}
                    <Header />
                    <Route path="/" exact component = {StreamList} />
                    <Route path="/streams/new" exact component = {StreamCreate} />
                    <Route path="/streams/edit/:id" exact component = {StreamEdit} />
                    <Route path="/streams/delete" exact component = {StreamDelete} />
                    <Route path="/streams/show" exact component = {StreamShow} />
                </div>
            </Router>
        </div>
    );
};

export default App;