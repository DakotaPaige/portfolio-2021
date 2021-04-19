import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import FadeIn from 'components/animation/FadeIn';
import FeaturedProject from '../elements/FeaturedProject';
import Project from '../elements/Project';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

import data from 'src/data/projects';

const Projects = () => {
  const featured = data.filter(item => item.featured);
  const projects = data.filter(item => !item.featured);

  return (
    <Root>
      <Container>
        <FadeIn>
          <h2>Projects</h2>
          <Wrapper>
            {featured.map((project, index) => (
              <FeaturedProject key={index} project={project} index={index}/>
            ))}
          </Wrapper>
          <Div>
            {projects.map((project, index) => (
              <Project key={index} project={project}/>
            ))}
          </Div>
        </FadeIn>
      </Container>
    </Root> 
  );
};

const Root = styled.section`
  padding: ${vw(40)} 0;
  background-color: ${({theme}) => theme.color.lightGrey};
  h2 {
    text-align: center;
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
  @media ${media.desktop} {
    padding: 0 ${vwDesktop(60)};
  }
`;

const Div = styled.div`
  @media ${media.tablet} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export default Projects;