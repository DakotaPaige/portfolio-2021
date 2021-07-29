import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-scroll';

import Container from 'components/Container';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const sections = ['about', 'skills', 'portfolio', 'contact'];

const Hero = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHasLoaded(true), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Root>
      <Container>
        <Wrapper hasLoaded={hasLoaded}>
          <h1>Dakota Mauza</h1>
          <Nav>
            {sections.map((item, index) => (
              <Link to={item} smooth key={index}>
                {item}
              </Link>
            ))}
          </Nav>
        </Wrapper>
        <Link to="about" smooth>
          <Scroll>
            <p className="grey scroll">Scroll</p>
            <img
              src={require('src/assets/images/icons/double-arrow-white.svg')}
              alt="Scroll Down"
            />
          </Scroll>
        </Link>
      </Container>
    </Root>
  );
};

const Root = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
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

const Wrapper = styled.div`
  opacity: ${(props) => (props.hasLoaded ? 1 : 0)};
  transition: 0.7s ease-in;
`;

const transformDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(15%);
  }
`;

const transformAnim = css`
  animation: ${transformDown} 1.5s ease-in-out infinite;
`;

const Scroll = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: ${vw(35)};
  left: 50%;
  transform: translateX(-50%);
  p {
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.17);
  }
  img {
    display: block;
    width: ${vw(20)};
    margin-left: ${vw(10)};
  }
  @media ${media.tablet} {
    bottom: ${vwTablet(35)};
    img {
      width: ${vwTablet(30)};
      margin-left: ${vwTablet(15)};
    }
  }
  @media ${media.desktop} {
    bottom: ${vwDesktop(35)};
    cursor: pointer;
    img {
      width: ${vwDesktop(30)};
      margin-left: ${vwDesktop(15)};
      transition: 0.4s ease;
      ${transformAnim}
    }
    &:hover img {
      animation: none;
    }
  }
`;

const Nav = styled.div`
  margin-top: ${vw(20)};
  a {
    display: block;
    text-transform: uppercase;
    margin-bottom: ${vw(10)};
    &:last-of-type {
      margin-bottom: 0;
      margin-right: 0;
    }
  }
  @media ${media.tablet} {
    display: flex;
    margin-top: ${vwTablet(20)};
    a {
      margin-bottom: 0;
      margin-right: ${vwTablet(30)};
    }
  }
  @media ${media.desktop} {
    margin-top: ${vwDesktop(20)};
    a {
      cursor: pointer;
      margin-right: ${vwDesktop(30)};
    }
  }
`;

export default Hero;
