/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';

import GlobalStyle from '../../global-styles';
import { makeSelectIsLogged } from './selectors';

const stateSelector = createStructuredSelector({
  isLogged: makeSelectIsLogged(),
});

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  // const isLoggedIn = false;
  const { isLogged } = useSelector(stateSelector);

  return (
    <Route
      {...rest}
      render={props =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};
