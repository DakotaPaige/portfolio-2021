import React, { useRef } from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

import ImageSequence from './ImageSequence';
import { useImage } from 'components/hooks';

import { vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const CatOne = () => {
  const $cat = useRef();

  const images = [
    useImage(require('src/assets/images/walking-cat/cat11.png')),
    useImage(require('src/assets/images/walking-cat/cat10.png')),
    useImage(require('src/assets/images/walking-cat/cat9.png')),
    useImage(require('src/assets/images/walking-cat/cat8.png')),
    useImage(require('src/assets/images/walking-cat/cat7.png')),
    useImage(require('src/assets/images/walking-cat/cat6.png')),
    useImage(require('src/assets/images/walking-cat/cat5.png')),
    useImage(require('src/assets/images/walking-cat/cat1.png')),
    useImage(require('src/assets/images/walking-cat/cat2.png')),
    useImage(require('src/assets/images/walking-cat/cat3.png')),
    useImage(require('src/assets/images/walking-cat/cat4.png')),
    useImage(require('src/assets/images/walking-cat/cat5.png')),
    useImage(require('src/assets/images/walking-cat/cat6.png')),
    useImage(require('src/assets/images/walking-cat/cat1.png')),
    useImage(require('src/assets/images/walking-cat/cat2.png')),
    useImage(require('src/assets/images/walking-cat/cat3.png')),
    useImage(require('src/assets/images/walking-cat/cat4.png')),
    useImage(require('src/assets/images/walking-cat/cat5.png')),
    useImage(require('src/assets/images/walking-cat/cat6.png')),
  ];

  return (
    <Root>
      <Controller>
        <Scene duration={500} triggerElement="#portfolio-section">
          {(progress) => (
            <Cat id="cat">
              <ImageSequence
                ref={$cat}
                images={images}
                progress={progress}
                element={$cat.current}
              />
            </Cat>
          )}
        </Scene>
      </Controller>
    </Root>
  );
};

const Root = styled.div`
  display: none;
  @media ${media.desktop} {
    display: block;
    position: absolute;
    top: 0;
    right: ${vwDesktop(-170)};
    width: ${vwDesktop(770)};
  }
`;

const Cat = styled.div`
  width: ${vwDesktop(200)};
  height: ${vwDesktop(200)};
  position: relative;
`;

export default CatOne;
