import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Home';
import ViewAmmunitions from './ViewAmmunitions';
import AddAmmunitions from './AddAmmunitions';

const ReactRouterSetup = () => {
    return <Router>
        <Route exact path="/">
            <Home/>
        </Route>

        <Route path="/viewAmmunitions">
            <ViewAmmunitions/>
        </Route>

        <Route path="/addAmmunitions">
            <AddAmmunitions/>
        </Route>
    </Router>
};

export default ReactRouterSetup;