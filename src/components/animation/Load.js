import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import Tree from './Tree';

const Load = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const $load = useRef();

  useEffect(() => {
    // disableBodyScroll($load.current);
    const timeout = setTimeout(() => {
      enableBodyScroll($load.current);
      clearAllBodyScrollLocks();
      setHasLoaded(true);
    }, 4000);
    return () => {
      clearTimeout(timeout);
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <Root hasLoaded={hasLoaded} ref={$load}>
      <Tree />
    </Root>
  );
};

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightGrey};
  z-index: 10;
  opacity: ${(props) => (props.hasLoaded ? 0 : 1)};
  transition: 2s ease-out;
  pointer-events: none;
`;

export default Load;
