import React from 'react';
import styled from 'styled-components';

import Footer from 'components/Footer';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

const Home = () => {
  return (
    <Root>
      <Hero />
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </Root>
  );
};

const Root = styled.main`
`;

export default Home;
