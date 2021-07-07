import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import Container from 'components/Container';
import FadeIn from 'components/animation/FadeIn';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Intro = () => {
  return (
    <Root name="about">
      <Container>
        <FadeIn>
          <h2>Hi! I'm Dakota</h2>
          <p>
            I'm a full stack developer from Vancouver, BC with a passion for
            creating stunning and responsive front end applications. I have
            experience creating multi platform apps primarily in React, and
            enjoy focusing on seamless animations and pixel-perfect UI. <br />
            <br />
            <Link smooth to="contact">
              Lets connect!
            </Link>
          </p>
        </FadeIn>
      </Container>
    </Root>
  );
};

const Root = styled.section`
  background-color: ${({ theme }) => theme.color.green};
  padding: ${vw(40)} 0;
  text-align: center;
  h2 {
    margin-bottom: ${vw(20)};
  }
  a {
    cursor: pointer;
    position: relative;
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
    p {
      max-width: ${vwDesktop(720)};
      margin: 0 auto;
    }
    a::after {
      content: '';
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.color.darkGrey};
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.4s ease;
      transform: scaleX(0);
      transform-origin: left;
    }
    a:hover::after {
      transform: scaleX(1);
    }
  }
`;

export default Intro;
