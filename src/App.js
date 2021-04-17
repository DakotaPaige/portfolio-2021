import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { hot } from 'react-hot-loader';

import routes from 'src/routes';

import Header from 'components/Header';

const App = () => {
  const generateRoutes = () => {
    return routes.map((route, index) => {
      const { path, component } = route;
      const Component = require(`src/${component}`).default;
      return <Route exact path={path} component={Component} key={index} />;
    });
  };

  return (
    <Route
      render={({ location }) => (
        <Root>
          <Header />
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={500} classNames="fade">
              <Switch location={location}>{generateRoutes()}</Switch>
            </CSSTransition>
          </TransitionGroup>
        </Root>
      )}
    />
  );
};

const Root = styled.div`
  .fade-enter {
    opacity: 0;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: all 0.5s;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: all 0.5s;
  }
`;

export default process.env.NODE_ENV === 'development' ? hot(module)(App) : App;
