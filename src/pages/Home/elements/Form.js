import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';

import Button from 'components/Button';
import Input from './Input';
import TextArea from './TextArea';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Form = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const $form = useRef();
  const $recaptcha = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await $recaptcha.current.executeAsync();

    const formData = new FormData($form.current);

    await fetch('/', {
      method: 'POST',
      'Content-Type': 'application/x-www-form-urlencoded',
      body: formData,
    })
      .then(() => {
        setIsLoading(false);
        setHasError(false);
        setHasSubmitted(true);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
      });
  };

  return (
    <Root>
      <form
        action=""
        method="post"
        ref={$form}
        name="contact"
        netlify
        data-netlify-recaptcha="true"
        onSubmit={(e) => handleSubmit(e)}
        style={{
          opacity: hasSubmitted ? 0 : 1,
          pointerEvents: hasSubmitted ? 'none' : 'all',
        }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <Input name="name" id="name" required label="Name *" />
        <Input name="email" id="email" required label="Email *" type="email" />
        <TextArea name="message" id="message" label="Message" />
        <Wrapper>
          <StyledButton type="submit" text="Submit" className="button" />
          <Loading
            src={require('src/assets/images/icons/loading-cat-transparent.gif')}
            alt="Loading"
            style={{ opacity: isLoading ? 1 : 0 }}
          />
          <Error
            style={{
              opacity: hasError ? 1 : 0,
              pointerEvents: hasError ? 'all' : 'none',
            }}
          >
            There seems to be an error with the form submission. Please try
            again, or send me an email through the link provided.
          </Error>
          <ReCAPTCHA
            ref={$recaptcha}
            size="invisible"
            sitekey="6LcY7TEeAAAAAJ4FXLxZ4qWOj9nd_-Di8-XwrJW6"
          />
        </Wrapper>
      </form>
      <Submitted
        style={{
          opacity: hasSubmitted ? 1 : 0,
          pointerEvents: hasSubmitted ? 'all' : 'none',
        }}
      >
        <p>
          Thanks for submitting a message! I'll get back to you as soon as I
          can.
        </p>
      </Submitted>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  form {
    transition: 0.4s ease;
  }
  @media ${media.desktop} {
    width: 50%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const Submitted = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.4s ease;
  transition-delay: 0.4s;
`;

const Error = styled.p`
  position: absolute;
  top: 50%;
  left: ${`calc(100% + ${vw(20)})`};
  transform: translateY(-50%);
  width: ${vw(180)};
  display: block;
  color: red;
  transition: 0.4s ease;
  font-size: ${vw(10)};
  @media ${media.tablet} {
    font-size: ${vwTablet(14)};
    left: ${`calc(100% + ${vwTablet(30)})`};
    width: ${vwTablet(400)};
  }
  @media ${media.desktop} {
    font-size: ${vwDesktop(16)};
    left: ${`calc(100% + ${vwDesktop(30)})`};
    width: ${vwDesktop(400)};
  }
`;

const StyledButton = styled(Button)`
  margin-top: ${vw(40)};
  @media ${media.tablet} {
    margin-top: ${vwTablet(40)};
  }
  @media ${media.desktop} {
    margin-top: ${vwDesktop(40)};
  }
`;

const Loading = styled.img`
  width: ${vw(70)};
  height: auto;
  display: block;
  position: absolute;
  left: ${`calc(100% + ${vw(20)})`};
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s ease;
  @media ${media.tablet} {
    left: ${`calc(100% + ${vwTablet(30)})`};
    width: ${vwTablet(70)};
  }
  @media ${media.desktop} {
    left: ${`calc(100% + ${vwDesktop(40)})`};
    width: ${vwDesktop(80)};
  }
`;

export default Form;
