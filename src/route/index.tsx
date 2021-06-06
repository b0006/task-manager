import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Provider } from '../modules/common/ui-kit/Notification';
import { IndexPage, SignInPage, SignUpPage, ProfilePage, NotFoundPage } from '../pages';

import { PublicRoute, PrivateRoute } from './types';

const Router: React.FC = () => (
  <Provider>
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={IndexPage} />
        <PublicRoute exact isRedirectAuth path="/sign-in" component={SignInPage} />
        <PublicRoute exact isRedirectAuth path="/sign-up" component={SignUpPage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <PublicRoute path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Router;