import React, { Component } from 'react';
import Script from 'react-load-script';
import TagManager from 'react-gtm-module';
import OnUpdate from 'src/plugins/OnUpdate';

import { analytics } from 'src/config/app.conf';

export default class GTM extends Component {
  state = {
    isLoaded: false
  };

  handleScriptLoad = () => {
    let options = {};
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    if (analytics.optimizeId) {
      options.optimize_id = analytics.optimizeId;
    }

    window.gtag('js', new Date());
    window.gtag('config', Object.keys(window.gaData)[0], options);

    if (analytics.optimizeId) {
      window.dataLayer && window.dataLayer.push({ event: 'optimize.activate' });
    }

    this.setState({ isLoaded: true });
  };

  handleUpdate = location => {
    const gtag = window.gtag;
    if (gtag) {
      gtag('config', Object.keys(window.gaData)[0], {
        page_location: window.location.href,
        page_path: location.pathname
      });
    }
  };

  componentDidMount() {
    if (window.__prerendering) return;
    if (analytics.gtmId) {
      const tagManagerArgs = {
        gtmId: analytics.gtmId
      };

      TagManager.initialize(tagManagerArgs);
    }
  }

  render() {
    if (window.gaData) {
      return Object.keys(window.gaData)[0] && !window.__PRERENDERING ? (
        <>
          <Script
            url={`https://www.googletagmanager.com/gtag/js?id=${
              Object.keys(window.gaData)[0]
            }`}
            onLoad={this.handleScriptLoad}
          />
          {this.state.isLoaded && (
            <OnUpdate immediate call={this.handleUpdate} />
          )}
        </>
      ) : null;
    } else {
      return null;
    }
  }
}
