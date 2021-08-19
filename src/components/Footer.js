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
          <a href="mailto:dakota@dakotamauza.com">
            <Icon
              src={require('src/assets/images/icons/email.svg')}
              alt="Mail"
            />
          </a>
        </Wrapper>
        <p className="disclaimer">&copy; {date.getFullYear()} Dakota Mauza.</p>
      </StyledContainer>
    </Root>
  );
};

const Root = styled.footer`
  padding: ${vw(20)} 0;
  background-color: ${({ theme }) => theme.color.green};
  @media ${media.tablet} {
    padding: ${vwTablet(20)} 0;
  }
  @media ${media.desktop} {
    padding: ${vwDesktop(20)} 0;
  }
`;

const Wrapper = styled.div``;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  display: block;
  width: ${vw(20)};
  @media ${media.tablet} {
    width: ${vwTablet(25)};
  }
  @media ${media.desktop} {
    width: ${vwDesktop(25)};
  }
`;

export default Footer;
