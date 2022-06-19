import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Home';
import ViewAmmunitions from './ViewAmmunitions';

const ReactRouterSetup = () => {
    return <Router>
        <Route exact path="/">
            <Home/>
        </Route>

        <Route path="/ammunitions">
            <ViewAmmunitions/>
        </Route>
    </Router>
};

export default ReactRouterSetup;