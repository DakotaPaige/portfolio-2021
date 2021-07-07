import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Card = (props) => {
  const { data } = props;
  return (
    <Root>
      <h3>{data.title}</h3>
      <Main>
        {data.points.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Main>
      <Line />
      <Subpoints>
        {data.subpoints.map((item, index) => (
          <li key={index} className="subpoint">
            <span>{item}</span>
          </li>
        ))}
      </Subpoints>
    </Root>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

const Root = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: ${vw(20)} ${vw(10)};
  &:not(:last-of-type) {
    margin-bottom: ${vw(20)};
  }
  h3 {
    margin-bottom: ${vw(20)};
  }
  li {
    text-align: left;
    list-style-type: none;
    margin-bottom: ${vw(5)};
    display: flex;
    color: ${({ theme }) => theme.color.darkGrey};
  }
  @media ${media.tablet} {
    width: ${vwTablet(339)};
    &:not(:last-of-type) {
      margin-bottom: ${vwTablet(30)};
    }
    &:last-of-type {
      margin: 0 auto;
    }
    h3 {
      margin-bottom: ${vwTablet(20)};
    }
    li {
      margin-bottom: ${vwTablet(5)};
    }
  }
  @media ${media.desktop} {
    width: ${vwDesktop(420)};
    padding: ${vwDesktop(30)} ${vwDesktop(15)};
    margin-bottom: 0;
    &:not(:last-of-type) {
      margin-bottom: 0;
    }
    &:last-of-type {
      margin: 0;
    }
    h3 {
      margin-bottom: ${vwDesktop(20)};
    }
    li {
      margin-bottom: ${vwDesktop(10)};
    }
  }
`;

const Main = styled.ul`
  li {
    align-items: center;
    &::before {
      content: '';
      display: block;
      width: ${vw(4)};
      height: ${vw(4)};
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.darkGrey};
      margin-right: ${vw(20)};
    }
  }
  @media ${media.tablet} {
    li {
      &::before {
        width: ${vwTablet(4)};
        height: ${vwTablet(4)};
        margin-right: ${vwTablet(20)};
      }
    }
  }
  @media ${media.desktop} {
    li {
      &::before {
        width: ${vwDesktop(4)};
        height: ${vwDesktop(4)};
        margin-right: ${vwDesktop(20)};
      }
    }
  }
`;

const Subpoints = styled.ul`
  width: ${vw(220)};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  li {
    align-items: flex-start;
    width: 50%;
    span {
      width: ${vw(96)};
    }
    &::before {
      content: '';
      display: block;
      background-color: ${({ theme }) => theme.color.darkGrey};
      width: ${vw(4)};
      height: ${vw(1)};
      margin-right: ${vw(10)};
      margin-top: ${vw(6)};
    }
  }
  @media ${media.tablet} {
    width: ${vwTablet(270)};
    li {
      span {
        width: ${vwTablet(121)};
      }
      &::before {
        width: ${vwTablet(4)};
        height: ${vwTablet(1)};
        margin-right: ${vwTablet(10)};
        margin-top: ${vwTablet(6)};
      }
    }
  }
  @media ${media.desktop} {
    width: ${vwDesktop(336)};
    li {
      span {
        width: ${vwDesktop(154)};
      }
      &::before {
        width: ${vwDesktop(4)};
        height: ${vwDesktop(1)};
        margin-right: ${vwDesktop(10)};
        margin-top: ${vwDesktop(9)};
      }
    }
  }
`;

const Line = styled.span`
  display: block;
  background-color: ${({ theme }) => theme.color.darkGrey};
  width: ${vw(220)};
  height: ${vw(1)};
  margin: ${vw(20)} auto;
  @media ${media.tablet} {
    width: ${vwTablet(270)};
    height: ${vwTablet(1)};
    margin: ${vwTablet(20)} auto;
  }
  @media ${media.desktop} {
    width: ${vwDesktop(336)};
    height: ${vwDesktop(1)};
    margin: ${vwDesktop(20)} auto;
  }
`;

export default Card;
