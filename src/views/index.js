import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import ViewAmmunitions from './ViewAmmunitions';
import AddAmmunitions from './AddAmmunitions';
import routes from '../constants/routes';

const ReactRouterSetup = () => {
    return <Router>
        <Route exact path={routes.HomePage}>
            <Home />
        </Route>

        <Route path={routes.ViewAmmunitionsPage}>
            <ViewAmmunitions />
        </Route>

        <Route path={routes.AddAmmunitionsPage}>
            <AddAmmunitions />
        </Route>
    </Router>
};

export default ReactRouterSetup;