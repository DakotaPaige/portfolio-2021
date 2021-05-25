import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import Input from './Input';
import TextArea from './TextArea';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Form = () => {
  return (
    <Root>
      <form action="" method="post">
        <Input name="name" id="name" required label="Name *" />
        <Input name="email" id="email" required label="Email *" type="email" />
        <TextArea name="message" id="message" label="Message" />
        <StyledButton type="submit" text="Submit" className="button" />
      </form>
    </Root>
  );
};

const Root = styled.div`
  @media ${media.desktop} {
    width: 50%;
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

export default Form;
