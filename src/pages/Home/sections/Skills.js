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
      <Container>
        <FadeIn>
          <h2>Skills</h2>
          <Wrapper>
            {data.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </Wrapper>
        </FadeIn>
      </Container>
    </Root>
  );
};

const Root = styled.section`
  padding: ${vw(40)} 0;
  background-color: ${({ theme }) => theme.color.mauve};
  text-align: center;
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
    padding: ${vwDesktop(120)} 0;
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

export default Skills;
