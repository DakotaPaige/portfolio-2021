import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Project = (props) => {
  const { project, handleClick } = props;
  return (
    <Root image={project.heroImage} onClick={handleClick}>
      <div className="overlay" />
      <Wrapper>
        <h3>{project.title}</h3>
        <div className="overflow">
          <p>{project.description}</p>
        </div>
      </Wrapper>
    </Root>
  );
};

Project.propTypes = {
  project: PropTypes.object,
  handleClick: PropTypes.func,
};

const Root = styled.div`
  width: 100%;
  height: ${vw(200)};
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 53%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${vw(5)} ${vw(10)};
  margin-bottom: ${vw(30)};
  position: relative;
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 53%,
      rgba(0, 0, 0, 0.6) 100%
    );
    opacity: 0;
    transition: ${({ theme }) => theme.transition};
  }
  .overflow {
    display: none;
  }
  h3 {
    color: ${({ theme }) => theme.color.lightGrey};
  }
  @media ${media.tablet} {
    width: ${vwTablet(339)};
    height: ${vwTablet(220)};
    padding: ${vwTablet(5)} ${vwTablet(10)};
    margin-bottom: ${vwTablet(30)};
  }
  @media ${media.desktop} {
    width: ${vwDesktop(420)};
    height: ${vwDesktop(280)};
    padding: ${vwDesktop(10)} ${vwDesktop(10)};
    margin-bottom: ${vwDesktop(30)};
    cursor: pointer;
    &:hover {
      .overlay {
        opacity: 1;
      }
      .overflow {
        max-height: ${vwDesktop(150)};
      }
    }
    .overflow {
      display: block;
      transition: ${({ theme }) => theme.transition};
      overflow: hidden;
      max-height: 0;
    }
    h3 {
      margin-bottom: ${vwDesktop(10)};
    }
    p {
      color: ${({ theme }) => theme.color.lightGrey};
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export default Project;
