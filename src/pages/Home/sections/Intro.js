import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import FadeIn from 'components/animation/FadeIn';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Intro = () => {
  return (
    <Root>
      <Container>
        <FadeIn>
          <h2>Hi! I'm Dakota</h2>
          <p>I'm a full stack developer with a passion for creating stunning, responsive front end applications.</p>
        </FadeIn>
      </Container>
    </Root>
  );
};

const Root = styled.section`
  background-color: ${({theme}) => theme.color.green};
  padding: ${vw(40)} 0;
  text-align: center;
  h2 {
    margin-bottom: ${vw(20)};
  }
  @media ${media.tablet} {
    padding: ${vwTablet(60)} 0;
    h2 {
      margin-bottom: ${vwTablet(30)};
    }
  }
  @media ${media.desktop} {
    padding: ${vwDesktop(120)} 0;
    h2 {
      margin-bottom: ${vwDesktop(40)};
    }
  }
`;

export default Intro;