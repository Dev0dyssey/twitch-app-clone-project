import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return <div>PageOne</div>
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <button>Click Me!</button>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    {/* React Router cares only after the part of the url following the port/site definition */}
                    {/* Chooses to hide/show the component that matches the path definition */}
                    <Route path = "/" exact component={PageOne}/>
                    <Route path = "/pagetwo" component={PageTwo}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;