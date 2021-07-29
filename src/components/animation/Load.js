import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Load = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHasLoaded(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return <Root hasLoaded={hasLoaded}></Root>;
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
  transition: 3s ease-out;
  pointer-events: none;
`;

export default Load;
