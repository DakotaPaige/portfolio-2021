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
      <ul>
        {data.points.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Root>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

const Root = styled.div`
  background-color: ${({theme}) => theme.color.lightGrey};
  padding: ${vw(20)} ${vw(10)};
  border-radius: ${vw(5)};
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
    align-items: center;
    color: ${({theme}) => theme.color.darkGrey};
    &::before {
      content: '';
      display: block;
      width: ${vw(4)};
      height: ${vw(2)};
      background-color: ${({theme}) => theme.color.darkGrey};
      margin-right: ${vw(20)};
    }
  }
  @media ${media.tablet} {
    padding: ${vwTablet(30)} ${vwTablet(15)};
    border-radius: ${vwTablet(10)};
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
      &::before {
        width: ${vwTablet(4)};
        height: ${vwTablet(2)};
        margin-right: ${vwTablet(20)};
      }
    }
  }
  @media ${media.desktop} {
    width: ${vwDesktop(420)};
    padding: ${vwDesktop(30)} ${vwDesktop(15)};
    border-radius: ${vwDesktop(5)};
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
      &::before {
        width: ${vwDesktop(4)};
        height: ${vwDesktop(2)};
        margin-right: ${vwDesktop(20)};
      }
    }
  }
`;

export default Card;