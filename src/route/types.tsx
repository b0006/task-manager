import React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';

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

export { PublicRoute };