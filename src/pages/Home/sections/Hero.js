import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Hero = () => {
  return (
    <Root>
      <Container>
        <h1>Dakota Mauza</h1>
      </Container>
    </Root>
  );
};

const Root = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${require('src/assets/images/home/home-background.jpg')});
  background-size: cover;
  background-position: center;
  padding: ${vw(80)} 0;
  @media ${media.tablet} {
    padding: ${vwTablet(160)} 0;
  }
  @media ${media.desktop} {
    padding: ${vwDesktop(160)} 0;
  }
`;

export default Hero;