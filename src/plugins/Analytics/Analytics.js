import React, { Component } from 'react';
import GTM from './elements/GTM';

export default class Analytics extends Component {
  render() {
    return !window.__PRERENDERING ? (
      <>
        <GTM />
      </>
    ) : null;
  }
}
