import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { titleCase } from 'title-case';
import OnUpdate from './OnUpdate';

import { seo } from 'src/config/app.conf';

class SEO extends Component {
  constructor(props) {
    super(props);
    this.updateTitle(this.props.location);
  }

  updateTitle = location => {
    const texts = location.pathname.split('/');
    const title = titleCase(texts[texts.length - 1].replace('-', ' '));
    this.title = title;
  };

  render() {
    return (
      <>
        <Helmet titleTemplate={`%s | ${seo.title}`} defaultTitle={seo.title}>
          <title>{this.title}</title>
        </Helmet>
        <OnUpdate immediate call={this.updateTitle} />
      </>
    );
  }
}

export default withRouter(SEO);
