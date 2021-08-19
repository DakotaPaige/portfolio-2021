import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';
import { vw, vwTablet, vwDesktop } from './utils';

// global style for styled-components. this should contain any font-related styles or other global styles related to the app.
export default createGlobalStyle`
  body {
    font-family: ${theme.font.family};
    color: black;
  }

  a,
  button {
    outline: none;
    border: none;
    background: transparent;
    text-decoration: none;
    color: ${theme.color.darkGrey};
  }

  main {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .grey {
    color: ${theme.color.lightGrey};
  }

  h1 {
    font-size: ${vw(36)};
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: ${vw(1)};
    @media ${media.tablet} {
      font-size: ${vwTablet(60)};
      letter-spacing: ${vwTablet(1.3)};
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(80)};
      letter-spacing: ${vwDesktop(1.3)};
    }
  }

  h2 {
    font-size: ${vw(26)};
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: ${vw(1)};
    @media ${media.tablet} {
      font-size: ${vwTablet(40)};
      letter-spacing: ${vwTablet(1.3)};
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(60)};
      letter-spacing: ${vwDesktop(1.3)};
    }
  }

  h3 {
    font-size: ${vw(16)};
    font-weight: 300;
    line-height: normal;
    letter-spacing: ${vw(1.2)};
    text-transform: uppercase;
    @media ${media.tablet} {
      font-size: ${vwTablet(18)};
      letter-spacing: ${vwTablet(1.4)};
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(20)};
      letter-spacing: ${vwDesktop(1.6)};
    }
  }

  h4 {
    font-size: ${vw(12)};
    font-weight: 300;
    line-height: normal;
    letter-spacing: ${vw(0.8)};
    text-transform: uppercase;
    @media ${media.tablet} {
      font-size: ${vwTablet(14)};
      letter-spacing: ${vwTablet(1)};
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(16)};
      letter-spacing: ${vwDesktop(1.2)};
    }
  }

  p, li {
    font-size: ${vw(14)};
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: ${vw(0.9)};
    @media ${media.tablet} {
      font-size: ${vwTablet(16)};
      letter-spacing: ${vwTablet(1)};
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(18)};
      letter-spacing: ${vwDesktop(1.2)};
    }
    &.scroll {
      font-size: ${vw(12)};
      letter-spacing: ${vw(1)};
      text-transform: uppercase;
      @media ${media.tablet} {
        font-size: ${vwTablet(14)};
        letter-spacing: ${vwTablet(1.3)};
      }
      @media ${media.desktop} {
        font-size: ${vwDesktop(14)};
        letter-spacing: ${vwDesktop(1.3)};
      }
    }
    &.subpoint {
      font-size: ${vw(12)};
      letter-spacing: ${vw(0.8)};
      @media ${media.tablet} {
        font-size: ${vwTablet(14)};
        letter-spacing: ${vwTablet(0.9)};
      }
      @media ${media.desktop} {
        font-size: ${vwDesktop(16)};
        letter-spacing: ${vwDesktop(1)};
      }
    }
  }

  .button {
    font-size: ${vw(12)};
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: ${vw(1.2)};
    text-transform: uppercase;
    @media ${media.tablet} {
      font-size: ${vwTablet(16)};
      letter-spacing: ${vwTablet(1)};
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(18)};
      letter-spacing: ${vwDesktop(1.2)};
    }
  }

  .form-label {
    font-size: ${vw(12)};
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: ${vw(1.2)};
    text-transform: uppercase;
    transition: 0.4s ease;
    &.active {
      font-size: ${vw(8)};
      letter-spacing: ${vw(1)};
    }
    @media ${media.tablet} {
      font-size: ${vwTablet(16)};
      letter-spacing: ${vwTablet(1)};
      &.active {
        font-size: ${vwTablet(12)};
        letter-spacing: ${vwTablet(0.8)};
      }
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(18)};
      letter-spacing: ${vwDesktop(1.2)};
      &.active {
        font-size: ${vwDesktop(14)};
        letter-spacing: ${vwDesktop(1)};
      }
    }
  }

  .form-input {
    font-family: ${theme.font.family};
    font-size: ${vw(12)};
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: ${vw(0.5)};
    @media ${media.tablet} {
      font-size: ${vwTablet(16)};
      letter-spacing: ${vwTablet(1)};
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(18)};
      letter-spacing: ${vwDesktop(1.2)};
    }
  }
`;
