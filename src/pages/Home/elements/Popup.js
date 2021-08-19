import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Gallery from 'components/Gallery';
import Button from 'components/Button';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Popup = (props) => {
  const {
    active,
    activeProject,
    data,
    handleNext,
    handlePrev,
    handleClose,
    innerRef,
  } = props;
  return (
    <Root
      style={{
        opacity: active ? 1 : 0,
        pointerEvents: active ? 'all' : 'none',
      }}
      ref={innerRef}
    >
      <Close
        src={require('src/assets/images/icons/close.svg')}
        alt="Close"
        onClick={handleClose}
      />

      {data.map((item, index) => (
        <Wrapper
          key={index}
          style={{
            opacity: index === activeProject ? 1 : 0,
            pointerEvents: index === activeProject && active ? 'all' : 'none',
          }}
        >
          <Gallery
            images={[item.heroImage, ...item.images]}
            heroImage={item.heroImage}
            title={item.title}
            isPopupOpen={active}
          />
          <div>
            <h3 className="bold">{item.title}</h3>
            <h4>Featuring:</h4>
            <Featuring>
              <p className="subpoint">
                {item.features.map((feature, f) => (
                  <span key={f}>
                    {feature}
                    {f !== item.features.length - 1 && ', '}{' '}
                  </span>
                ))}
              </p>
            </Featuring>
            <p className="overflow">{item.description}</p>
            <Buttons>
              {item.url && (
                <Button
                  text="Visit Website"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                />
              )}
              {item.github && (
                <Button
                  text="Github"
                  href={item.github}
                  target="_blank"
                  rel="noreferrer noopener"
                />
              )}
            </Buttons>
          </div>
          <Nav>
            <div onClick={handlePrev}>
              <Arrow
                src={require('src/assets/images/icons/double-arrow.svg')}
                alt="Previous"
              />
              <p className="scroll">Prev</p>
            </div>
            <div onClick={handleNext}>
              <p className="scroll">Next</p>
              <Arrow
                src={require('src/assets/images/icons/double-arrow.svg')}
                alt="Next"
                next
              />
            </div>
          </Nav>
        </Wrapper>
      ))}
      {/* <Nav>
        <div onClick={handlePrev}>
          <Arrow
            src={require('src/assets/images/icons/double-arrow.svg')}
            alt="Previous"
          />
          <p className="scroll">Prev</p>
        </div>
        <div onClick={handleNext}>
          <p className="scroll">Next</p>
          <Arrow
            src={require('src/assets/images/icons/double-arrow.svg')}
            alt="Next"
            next
          />
        </div>
      </Nav> */}
    </Root>
  );
};

Popup.propTypes = {
  active: PropTypes.bool,
  activeProject: PropTypes.number,
  data: PropTypes.array,
  innerRef: PropTypes.object,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  handleClose: PropTypes.func,
};

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  height: max-content;
  padding: ${vw(60)} 0;
  transition: ${({ theme }) => theme.transition};
  background-color: ${({ theme }) => theme.color.lightGrey};
  z-index: 15;
  overflow-y: auto;
  @media ${media.tablet} {
    padding: ${vwTablet(80)} 0;
  }
  @media ${media.desktop} {
    padding: ${vwDesktop(80)} 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  padding: ${vw(60)} ${vw(16)} ${vw(60)};
  transition: ${({ theme }) => theme.transition};
  h3 {
    margin: ${vw(20)} 0 ${vw(10)};
  }
  .bold {
    font-weight: 600;
  }
  .overflow {
    max-height: ${vw(135)};
    overflow-y: auto;
  }
  @media ${media.tablet} {
    top: 0;
    padding: ${vwTablet(80)} ${vwTablet(30)} 0;
    h3 {
      margin: ${vwTablet(40)} 0 ${vwTablet(20)};
    }
    .overflow {
      max-height: ${vwTablet(250)};
      max-width: ${vwTablet(500)};
    }
  }
  @media ${media.desktop} {
    display: flex;
    align-items: center;
    height: 100%;
    top: 0;
    padding: 0 ${vwDesktop(60)};
    h3 {
      margin: ${vwDesktop(40)} 0 ${vwDesktop(20)};
    }
    .overflow {
      max-height: ${vwDesktop(250)};
      max-width: ${vwDesktop(500)};
    }
  }
`;

const Featuring = styled.div`
  margin-bottom: ${vw(10)};
  @media ${media.tablet} {
    margin-bottom: ${vwTablet(15)};
    max-width: ${vwTablet(500)};
  }
  @media ${media.desktop} {
    margin-bottom: ${vwDesktop(15)};
    max-width: ${vwDesktop(500)};
  }
`;

const Buttons = styled.div`
  margin-top: ${vw(15)};
  display: flex;
  align-items: center;
  a:nth-of-type(2) {
    margin-left: ${vw(10)};
  }
  @media ${media.tablet} {
    margin-top: ${vwTablet(30)};
    a:nth-of-type(2) {
      margin-left: ${vwTablet(20)};
    }
  }
  @media ${media.desktop} {
    margin-top: ${vwDesktop(30)};
    a:nth-of-type(2) {
      margin-left: ${vwDesktop(20)};
    }
  }
`;

const Nav = styled.div`
  position: absolute;
  bottom: ${vw(25)};
  padding: 0 ${vw(16)};
  width: 100%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  @media ${media.tablet} {
    bottom: ${vwTablet(30)};
    padding: 0 ${vwTablet(30)};
  }
  @media ${media.desktop} {
    bottom: ${vwDesktop(60)};
    padding: 0 ${vwDesktop(60)};
    > div:first-of-type:hover img {
      transform: translateX(-5px) rotate(90deg);
    }
    > div:last-of-type:hover img {
      transform: translateX(5px) rotate(-90deg);
    }
  }
`;

const Arrow = styled.img`
  width: ${vw(20)};
  display: block;
  transform: ${(props) => (props.next ? 'rotate(-90deg)' : 'rotate(90deg)')};
  margin-right: ${(props) => (props.next ? 0 : vw(5))};
  margin-left: ${(props) => (!props.next ? 0 : vw(5))};
  transition: ${({ theme }) => theme.transition};
  @media ${media.tablet} {
    width: ${vwTablet(30)};
    margin-right: ${(props) => (props.next ? 0 : vwTablet(8))};
    margin-left: ${(props) => (!props.next ? 0 : vwTablet(8))};
  }
  @media ${media.desktop} {
    width: ${vwDesktop(30)};
    margin-right: ${(props) => (props.next ? 0 : vwDesktop(8))};
    margin-left: ${(props) => (!props.next ? 0 : vwDesktop(8))};
  }
`;

const Close = styled.img`
  display: block;
  width: ${vw(20)};
  position: absolute;
  top: ${vw(20)};
  right: ${vw(16)};
  z-index: 10;
  @media ${media.tablet} {
    width: ${vwTablet(25)};
    top: ${vwTablet(30)};
    right: ${vwTablet(30)};
  }
  @media ${media.desktop} {
    width: ${vwDesktop(30)};
    top: ${vwDesktop(60)};
    right: ${vwDesktop(60)};
    cursor: pointer;
  }
`;

export default Popup;
