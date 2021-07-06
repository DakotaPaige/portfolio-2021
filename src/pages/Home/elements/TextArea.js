import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const TextArea = (props) => {
  const { name, id, required, label } = props;

  const [value, setValue] = useState('');

  const handleValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <Root value={value}>
      <textarea
        rows="5"
        name={name}
        id={id}
        required={required}
        onChange={handleValue}
        className="form-input"
      />
      <label htmlFor={id} className={`form-label ${value && 'active'}`}>
        {label}
      </label>
    </Root>
  );
};

TextArea.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
};

const Root = styled.div`
  position: relative;
  width: 100%;
  margin-top: ${vw(30)};
  textarea {
    border: none;
    background-color: transparent;
    width: 100%;
    &:focus {
      outline: none;
    }
    &:active ~ .form-label,
    &:focus ~ .form-label {
      top: -15%;
      font-size: ${vw(8)};
      letter-spacing: ${vw(1)};
    }
  }
  label {
    position: absolute;
    left: 0;
    top: ${(props) => (props.value ? '-15%' : '0')};
    transition: 0.4s ease;
  }
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${({ theme }) => theme.color.darkGrey};
  }
  @media ${media.tablet} {
    margin-top: ${vwTablet(40)};
    textarea {
      &:active ~ .form-label,
      &:focus ~ .form-label {
        top: -20%;
        font-size: ${vwTablet(12)};
        letter-spacing: ${vwTablet(0.8)};
      }
    }
    label {
      top: ${(props) => (props.value ? '-20%' : '0')};
    }
  }
  @media ${media.desktop} {
    margin-top: ${vwDesktop(50)};
    textarea {
      height: ${vwDesktop(150)};
      &:active ~ .form-label,
      &:focus ~ .form-label {
        font-size: ${vwDesktop(14)};
        letter-spacing: ${vwDesktop(1)};
      }
    }
  }
`;

export default TextArea;
