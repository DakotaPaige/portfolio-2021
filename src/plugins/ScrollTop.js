import React, { Component } from 'react';
import OnUpdate from './OnUpdate';

export default class ScrollTop extends Component {
  render() {
    return (
      <OnUpdate
        immediate
        call={() => {
          window.scrollTo(0, 0);
        }}
      />
    );
  }
}
