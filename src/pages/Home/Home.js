import React from 'react';
import styled from 'styled-components';

import Load from 'components/animation/Load';
import Footer from 'components/Footer';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Divider from './elements/Divider';

const Home = () => {
  return (
    <Root>
      <Load />
      <Hero />
      <Intro />
      <Skills />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </Root>
  );
};

const Root = styled.main``;

export default Home;
