import { createGlobalStyle } from 'styled-components';
import theme from './theme';

// global style for styled-components. this should contain any font-related styles or other global styles related to the app.
export default createGlobalStyle`
  body {
    font-family: ${theme.font.family};
  }

  a,
  button {
    outline: none;
    border: none;
    background: transparent;
    text-decoration: none;
    color: ${theme.color.primary};
  }

  main {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
