import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import NavBar from './nav_bar/nav_bar';
import SplashPage from './splash_page/splash_page';

export default () => (
    <div>
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={SplashPage} />
    </div>
);