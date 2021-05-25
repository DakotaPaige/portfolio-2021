import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

// TODO: swiping not working

const Gallery = (props) => {
  const { title, images, isPopupOpen } = props;

  const [activeImage, setActiveImage] = useState(0);

  const swiping = useSwipeable({
    onSwipedLeft: (e) => handleSwipe(e),
    onSwipedRight: (e) => handleSwipe(e),
  });

  const handleSwipe = (e) => {
    if (isPopupOpen) {
      if (e.dir.toLowerCase() === 'right') {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  const handleNext = () => {
    if (activeImage === images.length - 1) {
      setActiveImage(0);
    } else {
      setActiveImage(activeImage + 1);
    }
  };

  const handlePrev = () => {
    if (activeImage === 0) {
      setActiveImage(images.length - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  };

  return (
    <Root>
      <Wrapper {...swiping}>
        {images.map((item, index) => (
          <Image
            key={index}
            style={{
              opacity: activeImage === index ? 1 : 0,
            }}
          >
            <img src={item} alt={title} />
          </Image>
        ))}
      </Wrapper>
      <Nav>
        <Arrow
          src={require('src/assets/images/icons/double-arrow.svg')}
          alt="Previous"
          onClick={handlePrev}
        />
        <Dots>
          {images.map((item, index) => (
            <Dot
              key={index}
              style={{ opacity: index === activeImage ? 0.8 : 0.4 }}
              onClick={() => setActiveImage(index)}
            />
          ))}
        </Dots>
        <Arrow
          src={require('src/assets/images/icons/double-arrow.svg')}
          alt="Next"
          onClick={handleNext}
          next
        />
      </Nav>
    </Root>
  );
};

Gallery.propTypes = {
  images: PropTypes.array,
  heroImage: PropTypes.string,
  title: PropTypes.string,
};

const Root = styled.div`
  width: 100%;
  @media ${media.desktop} {
    width: ${vwDesktop(700)};
    margin-right: ${vwDesktop(60)};
  }
`;

const Wrapper = styled.div`
  height: ${vw(190)};
  position: relative;
  @media ${media.tablet} {
    height: ${vwTablet(420)};
  }
  @media ${media.desktop} {
    height: ${vwDesktop(420)};
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transition};
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: ${vw(10)};
  @media ${media.tablet} {
    margin-top: ${vwTablet(20)};
  }
  @media ${media.desktop} {
    margin-top: ${vwDesktop(20)};
  }
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.img`
  display: block;
  width: ${vw(15)};
  transform: ${(props) => (props.next ? 'rotate(-90deg)' : 'rotate(90deg)')};
  @media ${media.tablet} {
    width: ${vwTablet(20)};
  }
  @media ${media.desktop} {
    width: ${vwDesktop(20)};
    cursor: pointer;
  }
`;

const Dot = styled.span`
  width: ${vw(10)};
  height: ${vw(10)};
  margin-right: ${vw(10)};
  border-radius: 50%;
  background-color: white;
  transition: ${({ theme }) => theme.transition};
  &:last-of-type {
    margin-right: 0;
  }
  @media ${media.tablet} {
    width: ${vwTablet(10)};
    height: ${vwTablet(10)};
    margin-right: ${vwTablet(10)};
  }
  @media ${media.desktop} {
    width: ${vwDesktop(10)};
    height: ${vwDesktop(10)};
    margin-right: ${vwDesktop(10)};
    cursor: pointer;
  }
`;

export default Gallery;
