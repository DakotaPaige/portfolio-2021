import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import FadeIn from 'components/animation/FadeIn';
import Card from '../elements/Card';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

import data from 'src/data/skills';

const Skills = () => {
  return (
    <Root name="skills">
      <StyledContainer>
        <FadeIn>
          <h2>Skills</h2>
          <Wrapper>
            {data.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </Wrapper>
        </FadeIn>
      </StyledContainer>
      <Trees
        src={require('src/assets/images/home/tree-silhouette-grey-min.png')}
        alt="Trees"
      />
    </Root>
  );
};

const Root = styled.section`
  padding: ${vw(40)} 0 ${vw(80)};
  background-color: ${({ theme }) => theme.color.blue};
  text-align: center;
  position: relative;
  h2 {
    margin-bottom: ${vw(20)};
  }
  @media ${media.tablet} {
    padding: ${vwTablet(60)} 0;
    h2 {
      margin-bottom: ${vwTablet(30)};
    }
  }
  @media ${media.desktop} {
    padding: ${vwDesktop(120)} 0 ${vwDesktop(240)};
    h2 {
      margin-bottom: ${vwDesktop(80)};
    }
  }
`;

const Wrapper = styled.div`
  @media ${media.tablet} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media ${media.desktop} {
    flex-wrap: nowrap;
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
  z-index: 2;
`;

const Trees = styled.img`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: 0.4;
`;

export default Skills;
