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
          </p>
          <Links>
            <p>
              <Link smooth to="contact">
                Lets connect!
              </Link>
            </p>
            <p>
              <a
                href="https://github.com/DakotaPaige"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
            <p>
              {' '}
              <a href="/assets/pdf/Resume.pdf" target="_blank">
                Resume
              </a>
            </p>
          </Links>
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

const Links = styled.div`
  margin-top: ${vw(20)};
  p {
    margin-bottom: ${vw(10)};
  }
  @media ${media.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${vwTablet(30)};
    p {
      margin-bottom: 0;
      width: ${vwTablet(120)};
      &:nth-of-type(2) {
        margin-left: ${vwTablet(20)};
        margin-right: ${vwTablet(20)};
      }
    }
  }
  @media ${media.desktop} {
    margin: ${vwDesktop(40)} auto 0;
    width: fit-content;
    p {
      margin-bottom: 0;
      width: ${vwDesktop(150)};
      &:nth-of-type(2) {
        margin-left: ${vwDesktop(20)};
        margin-right: ${vwDesktop(20)};
      }
    }
  }
`;

export default Intro;
