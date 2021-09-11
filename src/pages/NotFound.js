import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Root>
      <h1>Sorry, Page Not Found</h1>
    </Root>
  );
};

const Root = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default NotFound;
