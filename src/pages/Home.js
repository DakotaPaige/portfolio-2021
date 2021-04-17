import React from 'react';
import styled from 'styled-components';

import Counter from 'components/Counter';

const Home = () => {
  return (
    <Root>
      <h1>Home</h1>
      <Counter />
    </Root>
  );
};

const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
