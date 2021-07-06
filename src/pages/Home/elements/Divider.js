import React from 'react';
import styled from 'styled-components';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Divider = () => {
  return <Root />;
};

const Root = styled.div`
  background-color: ${({ theme }) => theme.color.blue};
  height: ${vw(20)};
  @media ${media.tablet} {
    height: ${vwTablet(40)};
  }
  @media ${media.desktop} {
    height: ${vwDesktop(60)};
  }
`;

export default Divider;
