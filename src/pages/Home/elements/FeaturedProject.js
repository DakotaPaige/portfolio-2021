import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const FeaturedProject = (props) => {
  const { project, index } = props;
  return (
    <Root index={index}>
      <Image src={project.heroImage} alt={project.title} />
      <Wrapper>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Button text="View Project" />
      </Wrapper>
    </Root>
  );
};

FeaturedProject.propTypes = {
  project: PropTypes.object,
  index: PropTypes.number,
}

const Root = styled.div`
  margin-bottom: ${vw(40)};
  @media ${media.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${vwTablet(40)};
    img {
      order: ${props => props.index % 2 === 0 ? 1 : 2};
    }
    > div{
      order: ${props => props.index % 2 === 0 ? 2 : 1};
    }
  }
  @media ${media.desktop} {
    margin-bottom: ${vwTablet(40)};
  }
`;

const Wrapper = styled.div`
  margin-top: ${vw(20)};
  h3 {
    text-align: center;
  }
  p {
    text-align: left;
    margin: ${vw(20)} 0;
  }
  @media ${media.tablet} {
    margin-top: 0;
    width: ${vwTablet(339)};
    h3 {
      text-align: left;
    }
    p {
      margin: ${vwTablet(20)} 0 ${vwTablet(30)};
    }
  }
  @media ${media.desktop} {
    width: ${vwDesktop(480)};
    p {
      margin: ${vwDesktop(20)} 0 ${vwDesktop(30)};
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  @media ${media.tablet} {
    width: ${vwTablet(339)};
    align-self: center;
  }
  @media ${media.desktop} {
    width: ${vwDesktop(660)};
  }
`;

export default FeaturedProject;