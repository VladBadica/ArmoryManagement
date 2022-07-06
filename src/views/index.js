import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Home';
import ViewAmmunitions from './ViewAmmunitions';
import AddAmmunitions from './AddAmmunitions';
import Reloads from './Reloads';
import routes from '../constants/routes';

const ReactRouterSetup = () => {
    return <Router>
        <Route exact path={routes.HomePage}>
            <Home/>
        </Route>

        <Route path={routes.ViewAmmunitionsPage}>
            <ViewAmmunitions/>
        </Route>

        <Route path={routes.AddAmmunitionsPage}>
            <AddAmmunitions/>
        </Route>

        <Route path={routes.ReloadsPage}>
            <Reloads/>
        </Route>
    </Router>
};

export default ReactRouterSetup;