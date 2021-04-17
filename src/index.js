import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';

import App from './App';
import ScrollTop from 'src/plugins/ScrollTop';
import SEO from 'src/plugins/SEO';
import Analytics from 'src/plugins/Analytics/Analytics';

import store from 'src/redux/store';
import theme from 'src/styles/theme';
import GlobalStyle from 'src/styles/global';
import './styles/global.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <>
          <SEO />
          <Analytics />
          <GlobalStyle />
          <ScrollTop />
          <App />
        </>
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
