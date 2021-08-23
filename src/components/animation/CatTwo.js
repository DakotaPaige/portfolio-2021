import React, { useRef } from 'react';
import styled from 'styled-components';
import { Tween, ScrollTrigger } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

import ImageSequence from './ImageSequence';
import { useImage } from 'components/hooks';

import { vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const CatTwo = () => {
  const cats = [
    useImage(require('src/assets/images/walking-cat/cat1.png')),
    useImage(require('src/assets/images/walking-cat/cat2.png')),
    useImage(require('src/assets/images/walking-cat/cat3.png')),
    useImage(require('src/assets/images/walking-cat/cat4.png')),
    useImage(require('src/assets/images/walking-cat/cat5.png')),
    useImage(require('src/assets/images/walking-cat/cat1.png')),
    useImage(require('src/assets/images/walking-cat/cat2.png')),
    useImage(require('src/assets/images/walking-cat/cat3.png')),
    useImage(require('src/assets/images/walking-cat/cat4.png')),
    useImage(require('src/assets/images/walking-cat/cat5.png')),
    useImage(require('src/assets/images/walking-cat/cat1.png')),
    useImage(require('src/assets/images/walking-cat/cat2.png')),
    useImage(require('src/assets/images/walking-cat/cat3.png')),
    useImage(require('src/assets/images/walking-cat/cat4.png')),
    useImage(require('src/assets/images/walking-cat/cat5.png')),
    useImage(require('src/assets/images/walking-cat/cat6.png')),
    useImage(require('src/assets/images/walking-cat/cat7.png')),
    useImage(require('src/assets/images/walking-cat/cat8.png')),
    useImage(require('src/assets/images/walking-cat/cat9.png')),
    useImage(require('src/assets/images/walking-cat/cat10.png')),
    useImage(require('src/assets/images/walking-cat/cat11.png')),
    useImage(require('src/assets/images/walking-cat/cat12.png')),
    useImage(require('src/assets/images/walking-cat/cat13.png')),
    useImage(require('src/assets/images/walking-cat/cat14.png')),
    useImage(require('src/assets/images/walking-cat/cat15.png')),
    useImage(require('src/assets/images/walking-cat/cat16.png')),
    useImage(require('src/assets/images/walking-cat/cat17.png')),
    useImage(require('src/assets/images/walking-cat/cat18.png')),
    useImage(require('src/assets/images/walking-cat/cat19.png')),
    useImage(require('src/assets/images/walking-cat/cat20.png')),
    useImage(require('src/assets/images/walking-cat/cat21.png')),
    useImage(require('src/assets/images/walking-cat/cat22.png')),
    useImage(require('src/assets/images/walking-cat/cat23.png')),
    useImage(require('src/assets/images/walking-cat/cat24.png')),
    useImage(require('src/assets/images/walking-cat/cat25.png')),
    useImage(require('src/assets/images/walking-cat/cat26.png')),
    useImage(require('src/assets/images/walking-cat/cat27.png')),
    useImage(require('src/assets/images/walking-cat/cat28.png')),
    useImage(require('src/assets/images/walking-cat/cat29.png')),
    useImage(require('src/assets/images/walking-cat/cat30.png')),
    useImage(require('src/assets/images/walking-cat/cat31.png')),
    useImage(require('src/assets/images/walking-cat/cat32.png')),
    useImage(require('src/assets/images/walking-cat/cat33.png')),
    useImage(require('src/assets/images/walking-cat/cat34.png')),
    useImage(require('src/assets/images/walking-cat/cat35.png')),
    useImage(require('src/assets/images/walking-cat/cat36.png')),
    useImage(require('src/assets/images/walking-cat/cat37.png')),
    useImage(require('src/assets/images/walking-cat/cat38.png')),
    useImage(require('src/assets/images/walking-cat/cat39.png')),
    useImage(require('src/assets/images/walking-cat/cat40.png')),
    useImage(require('src/assets/images/walking-cat/cat41.png')),
  ];

  const $cat = useRef();

  return (
    <Controller>
      <Root id="cat-two">
        <ScrollTrigger start="-300px center" end="0 center" scrub>
          <Scene duration={500} triggerElement="#cat-two" offset={'-200px'}>
            {(progress) => (
              <Tween
                from={{
                  x: 0,
                }}
                to={{
                  x: '30vw',
                }}
              >
                <Cat>
                  <ImageSequence
                    ref={$cat}
                    images={cats}
                    progress={progress}
                    element={$cat.current}
                  />
                </Cat>
              </Tween>
            )}
          </Scene>
        </ScrollTrigger>
      </Root>
    </Controller>
  );
};

const Root = styled.div`
  display: none;
  @media ${media.desktop} {
    display: block;
    display: block;
    position: absolute;
    bottom: 0;
    left: ${vwDesktop(-110)};
    width: ${vwDesktop(720)};
  }
`;

const Cat = styled.div`
  width: ${vwDesktop(220)};
  height: ${vwDesktop(200)};
  position: relative;
  left: 0;
  top: 0;
`;

export default CatTwo;
