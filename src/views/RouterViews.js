import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthWrapper from '../components/AuthWrapper.js';
import NavbarComponent from '../components/NavbarComponent';

import Home from './Home';
import Login from './Login';
import ViewAmmunitions from './ViewAmmunitions';
import AddTemplates from './AddTemplates';
import NoMatch from './NoMatch';
import routes from '../constants/routes';
import AddMaterials from './AddMaterials.js';
import Reload from './Reload.js';

const ReactRouterSetup = () => {
    return (
        <>
            <NavbarComponent />
            <Routes>
                <Route path={routes.Login} element={<Login />} />
                <Route element={<AuthWrapper />}>
                    <Route index element={<Home />} />
                    <Route path={routes.Home} element={<Home />} />
                    <Route path={routes.AddTemplates} element={<AddTemplates />} />
                    <Route path={routes.AddMaterials} element={<AddMaterials />} />
                    <Route path={routes.Reloads} element={<Reload />} />
                    <Route path={routes.ViewAmmunitions} element={<ViewAmmunitions />} />
                    <Route path={routes.NoMatch} element={<NoMatch />} />
                </Route>
            </Routes>
        </>

    );
};

export default ReactRouterSetup;