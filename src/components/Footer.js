import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Footer = () => {
  const date = new Date();
  return (
    <Root>
      <StyledContainer>
        <Wrapper>
          <p>Icons here</p>
        </Wrapper>
        <p className='disclaimer'>&copy; {date.getFullYear()} Dakota Mauza.</p>
      </StyledContainer>
    </Root>
  );
};

const Root = styled.footer`
  padding: ${vw(20)} 0;
  background-color: ${({theme}) => theme.color.green};
  @media ${media.tablet} {
    padding: ${vwTablet(20)} 0;
  }
  @media ${media.desktop} {
    padding: ${vwDesktop(20)} 0;
  }
`;

const Wrapper = styled.div`
  margin-bottom: ${vw(40)};
  @media ${media.tablet} {
    margin-bottom: 0;
  }
`;

const StyledContainer = styled(Container)`
  @media ${media.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;

export default Footer;