import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashPage from './splash_page/splash_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileFormContainer from './profile/form/profile_form_container';
import ProfileShowContainer from './profile/show/profile_show_container';
import CreateCompanyFormContainer from './company/form/create_company_form_container';
import UpdateCompanyFormContainer from './company/form/update_company_form_container';
import CompanyShowContainer from './company/show/company_show_container';
import Footer from './footer/footer';

export default () => (
    <div>
        <Route path='/' component={NavBarContainer} />
        <Route exact path='/' component={SplashPage} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <ProtectedRoute path='/profiles/:id/edit' component={ProfileFormContainer} />
        <Route exact path='/profiles/:id' component={ProfileShowContainer} />
        <ProtectedRoute path='/companies/new' component={CreateCompanyFormContainer} />
        <ProtectedRoute path='/companies/:id/edit' component={UpdateCompanyFormContainer} />
        <Route exact path='/companies/:id/show' component={CompanyShowContainer} />
        <Route path='/' component={Footer} />
    </div>
);