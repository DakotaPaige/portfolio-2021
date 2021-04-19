import React from 'react';
import styled from 'styled-components';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Container = (props) => {
  return (
    <Root {...props}>
      {props.children}
    </Root>
  );
};

const Root = styled.div`
  padding: 0 ${vw(16)};
  @media ${media.tablet} {
    padding: 0 ${vwTablet(30)};
  }
  @media ${media.desktop} {
    padding: 0 ${vwDesktop(60)};
  }
`;

export default Container;