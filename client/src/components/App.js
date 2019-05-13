import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './header';

const App = () => {
    return (
        <div className="ui container">
            {/* Any code placed outside of the <BrowserHeader /> will always be visible irrespective of the route */}
            <BrowserRouter>
                <div>
                    {/* React Router cares only after the part of the url following the port/site definition */}
                    {/* Chooses to hide/show the component that matches the path definition */}
                    {/* Any component containing a <Link></Link> tag must be placed within the Browser Router element */}
                    <Header />
                    <Route path="/" exact component = {StreamList} />
                    <Route path="/streams/new" exact component = {StreamCreate} />
                    <Route path="/streams/edit" exact component = {StreamEdit} />
                    <Route path="/streams/delete" exact component = {StreamDelete} />
                    <Route path="/streams/show" exact component = {StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;