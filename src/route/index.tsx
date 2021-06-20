import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Provider } from '../modules/common/ui-kit/Notification';
import { IndexPage, SignInPage, SignUpPage, ProfilePage, BoardsPage, BoardPage, NotFoundPage } from '../pages';

import { PublicRoute, PrivateRoute } from './types';

const Router: React.FC = () => (
  <Provider>
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={IndexPage} />
        <PublicRoute exact path="/404" component={NotFoundPage} />
        <PublicRoute exact isRedirectAuth path="/sign-in" component={SignInPage} />
        <PublicRoute exact isRedirectAuth path="/sign-up" component={SignUpPage} />

        <PrivateRoute exact path="/:username" component={ProfilePage} />
        <PrivateRoute exact path="/:username/boards" component={BoardsPage} />
        <PrivateRoute exact path="/:username/boards/:transpileTitle" component={BoardPage} />

        <PublicRoute path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Router;