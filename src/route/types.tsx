import React from 'react';
import { Route, Redirect, RouteComponentProps, RouteProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import userStore from '../modules/profile/store';
import Layout from '../modules/layout/components/Layout';

interface IRouteComponentProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps>;
}

const PublicRoute: React.FC<IRouteComponentProps> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const PrivateRoute: React.FC<IRouteComponentProps> = observer(({ component: Component, ...rest }) => {
  const { user } = userStore;
  return (
    <Route
      {...rest}
      render={(props) =>
        user.isAuth ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (<Redirect to="/sign-in" />)
      }
    />
  );
});

export { PublicRoute, PrivateRoute };
