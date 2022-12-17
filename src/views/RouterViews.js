import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AuthWrapper from '../components/AuthWrapper.js';

import Home from './Home';
import Login from './Login';
import ViewAmmunitions from './ViewAmmunitions';
import AddAmmunitions from './AddAmmunitions';
import NoMatch from './NoMatch';
import routes from '../constants/routes';

const ReactRouterSetup = () => {
    return (
        <>
            <Routes>
                <Route path={routes.Login} element={<Login />} />
                <Route element={<AuthWrapper />}>
                    <Route index element={<Home />} />
                    <Route path={routes.Home} element={<Home />} />
                    <Route path={routes.AddAmmunitions} element={<AddAmmunitions />} />
                    <Route path={routes.ViewAmmunitions} element={<ViewAmmunitions />} />
                    <Route path={routes.NoMatch} element={<NoMatch />} />
                </Route>
            </Routes>
        </>

    );
};

export default ReactRouterSetup;