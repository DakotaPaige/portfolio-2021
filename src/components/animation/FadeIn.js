import React from 'react';
import Reveal from 'react-reveal/Reveal';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const FadeIn = (props) => {
  const { children, effect } = props;
  return (
    <Root {...props}>
      <Reveal effect={effect}>{children}</Reveal>
    </Root>
  );
};

FadeIn.propTypes = {
  effect: PropTypes.string,
  distance: PropTypes.string,
  timingFunc: PropTypes.string,
  timing: PropTypes.number,
};

FadeIn.defaultProps = {
  effect: 'fadeInUp',
  distance: '0px',
  timing: 0.3,
  timingFunc: 'ease',
};

const fadeInUp = (y) => keyframes`
  from {
    opacity: 0;
    transform: ${`translateY(${y})`};
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeCss = css`
  animation: ${(props) => fadeInUp(props.distance)}
    ${(props) => `${props.timing}s ${props.timingFunc}`};
`;

const Root = styled.div`
  .fadeInUp {
    ${fadeCss}
  }
`;

export default FadeIn;
