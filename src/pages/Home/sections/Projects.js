import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import Container from 'components/Container';
import FadeIn from 'components/animation/FadeIn';
import CatOne from 'components/animation/CatOne';
import CatTwo from 'components/animation/CatTwo';
import FeaturedProject from '../elements/FeaturedProject';
import Project from '../elements/Project';
import Popup from '../elements/Popup';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

import data from 'src/data/projects';

const Projects = () => {
  const featured = data.filter((item) => item.featured);
  const projects = data.filter((item) => !item.featured);

  const [isPopupActive, setIsPopupActive] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const $popup = useRef();

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  const handleOpenPopup = (index) => {
    setActiveProject(index);
    setIsPopupActive(true);
    disableBodyScroll($popup.current);
  };

  const handleClosePopup = () => {
    enableBodyScroll($popup.current);
    setIsPopupActive(false);
  };

  const handleNextProject = () => {
    if (activeProject === data.length - 1) {
      setActiveProject(0);
    } else {
      setActiveProject(activeProject + 1);
    }
  };

  const handlePrevProject = () => {
    if (activeProject === 0) {
      setActiveProject(data.length - 1);
    } else {
      setActiveProject(activeProject - 1);
    }
  };

  return (
    <Root name="portfolio" id="portfolio-section">
      <CatOne />
      <Container>
        <FadeIn>
          <h2>Portfolio</h2>
        </FadeIn>
        <Wrapper>
          <FadeIn>
            {featured.map((project, index) => (
              <FeaturedProject
                key={index}
                project={project}
                index={index}
                handleClick={() =>
                  handleOpenPopup(
                    data.findIndex((item) => item.title === project.title)
                  )
                }
              />
            ))}
          </FadeIn>
        </Wrapper>
        <StyledFadeIn>
          {projects.map((project, index) => (
            <Project
              key={index}
              project={project}
              handleClick={() =>
                handleOpenPopup(
                  data.findIndex((item) => item.title === project.title)
                )
              }
            />
          ))}
        </StyledFadeIn>
      </Container>
      <CatTwo />
      <Popup
        active={isPopupActive}
        activeProject={activeProject}
        handleClose={handleClosePopup}
        handleNext={handleNextProject}
        handlePrev={handlePrevProject}
        data={data}
        innerRef={$popup}
      />
    </Root>
  );
};

const Root = styled.section`
  padding: ${vw(40)} 0;
  background-color: ${({ theme }) => theme.color.lightGrey};
  position: relative;
  overflow-x: hidden;
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
    padding: ${vwDesktop(120)} 0 ${vwDesktop(240)};
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

const StyledFadeIn = styled(FadeIn)`
  @media ${media.tablet} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media ${media.desktop} {
    display: grid;
    grid-template-columns: ${vwDesktop(420)} ${vwDesktop(420)} ${vwDesktop(420)};
    grid-column-gap: ${vwDesktop(30)};
  }
`;

export default Projects;
