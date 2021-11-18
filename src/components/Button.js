import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Button = (props) => {
  const { text, handleClick, href } = props;
  return (
    <Root
      className="button"
      onClick={handleClick}
      as={href ? 'a' : 'button'}
      href={href}
      {...props}
    >
      <span>{text}</span>
    </Root>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: (f) => f,
};

const Root = styled.button`
  padding: ${vw(8)} ${vw(20)};
  background-color: ${({ theme }) => theme.color.lightGrey};
  border: ${vw(2)} solid ${({ theme }) => theme.color.darkGrey};
  display: block;
  width: fit-content;
  @media ${media.tablet} {
    padding: ${vwTablet(8)} ${vwTablet(25)};
    border: ${vwTablet(2)} solid ${({ theme }) => theme.color.darkGrey};
  }
  @media ${media.desktop} {
    padding: ${vwDesktop(12)} ${vwDesktop(25)};
    border: ${vwDesktop(2)} solid ${({ theme }) => theme.color.darkGrey};
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
    position: relative;
    span {
      position: relative;
      z-index: 2;
    }
    &::after {
      content: '';
      z-index: 1;
      background-color: ${({ theme }) => theme.color.darkGrey};
      transform: scaleX(0);
      transform-origin: left;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      transition: ${({ theme }) => theme.transition};
    }
    &:hover {
      color: ${({ theme }) => theme.color.lightGrey};
      &::after {
        transform: scaleX(1);
      }
    }
  }
`;

export default Button;
