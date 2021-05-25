import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import FadeIn from 'components/animation/FadeIn';
import Form from '../elements/Form';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Contact = () => {
  return (
    <Root name="contact">
      <Container>
        <FadeIn>
          <h2>Get in Touch</h2>
          <Content>
            <Info>
              <Link href="mailto:dakota@dakotamauza.com">
                <img
                  src={require('src/assets/images/icons/email.svg')}
                  alt="Email"
                />
                <p>dakota@dakotamauza.com</p>
              </Link>
            </Info>
            <Form />
          </Content>
        </FadeIn>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: ${vw(40)} 0;
  h2 {
    text-align: center;
    margin-bottom: ${vw(30)};
  }
  @media ${media.tablet} {
    padding: ${vwTablet(60)} 0;
    h2 {
      margin-bottom: ${vwTablet(40)};
    }
  }
  @media ${media.desktop} {
    padding: ${vwDesktop(120)} 0;
    h2 {
      margin-bottom: ${vwDesktop(80)};
    }
  }
`;

const Content = styled.div`
  @media ${media.desktop} {
    display: flex;
  }
`;

const Info = styled.div`
  margin-bottom: ${vw(20)};
  @media ${media.tablet} {
    margin-bottom: ${vwTablet(30)};
  }
  @media ${media.desktop} {
    margin-bottom: 0;
    width: 50%;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  img {
    margin-right: ${vw(10)};
    width: ${vw(20)};
    display: block;
  }
  @media ${media.tablet} {
    img {
      margin-right: ${vwTablet(15)};
      width: ${vwTablet(25)};
    }
  }
  @media ${media.desktop} {
    img {
      margin-right: ${vwDesktop(15)};
      width: ${vwDesktop(25)};
    }
    p {
      position: relative;
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: ${`calc(100% + ${vwDesktop(3)})`};
        left: 0;
        height: 1px;
        width: 100%;
        background-color: ${({ theme }) => theme.color.darkGrey};
        transform: scaleX(0);
        transform-origin: left;
        transition: 0.4s ease;
      }
    }
    &:hover p::after {
      transform: scaleX(1);
    }
  }
`;

export default Contact;
