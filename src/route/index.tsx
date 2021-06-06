import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { IndexPage, SignIn, SignUp, NotFoundPage } from '../pages';

import { PublicRoute } from './types';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path="/" component={IndexPage} />
      <PublicRoute exact path="/sign-in" component={SignIn} />
      <PublicRoute exact path="/sign-up" component={SignUp} />
      <PublicRoute path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;