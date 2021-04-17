import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Root>
      <img src={require('src/assets/logo.svg')} alt="Logo" />
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </Root>
  );
};

const Root = styled.div`
  width: 100;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: grey;
  img {
    width: 40px;
  }
  a:first-of-type {
    margin-right: 20px;
  }
`;

export default Header;
