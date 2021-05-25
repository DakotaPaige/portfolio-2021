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
      {text}
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
  border-radius: ${vw(5)};
  display: block;
  width: fit-content;
  @media ${media.tablet} {
    padding: ${vwTablet(8)} ${vwTablet(25)};
    border: ${vwTablet(2)} solid ${({ theme }) => theme.color.darkGrey};
    border-radius: ${vwTablet(5)};
  }
  @media ${media.desktop} {
    padding: ${vwDesktop(12)} ${vwDesktop(25)};
    border: ${vwDesktop(2)} solid ${({ theme }) => theme.color.darkGrey};
    border-radius: ${vwDesktop(5)};
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
    &:hover {
      background-color: ${({ theme }) => theme.color.darkGrey};
      color: ${({ theme }) => theme.color.lightGrey};
    }
  }
`;

export default Button;