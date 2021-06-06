import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { IndexPage, SignInPage, SignUpPage, ProfilePage, NotFoundPage } from '../pages';

import { PublicRoute, PrivateRoute } from './types';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path="/" component={IndexPage} />
      <PublicRoute exact isRedirectAuth path="/sign-in" component={SignInPage} />
      <PublicRoute exact isRedirectAuth path="/sign-up" component={SignUpPage} />
      <PrivateRoute exact path="/profile" component={ProfilePage} />
      <PublicRoute path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;