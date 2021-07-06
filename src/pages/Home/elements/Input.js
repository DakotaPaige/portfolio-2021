import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Input = (props) => {
  const { name, id, required, label, type } = props;

  const [value, setValue] = useState('');

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <Root value={value}>
      <input
        type={type}
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

Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
};

const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${vw(20)};
  label {
    position: absolute;
    top: ${(props) => (props.value ? 0 : '50%')};
    left: 0;
    transform: translateY(-50%);
    transition: 0.4s ease;
  }
  input {
    background-color: transparent;
    width: 100%;
    height: ${vw(40)};
    border: none;
    &:focus {
      outline: none;
    }
    &:active ~ .form-label,
    &:focus ~ .form-label {
      top: 0;
      font-size: ${vw(8)};
      letter-spacing: ${vw(1)};
    }
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
    margin-bottom: ${vwTablet(30)};
    input {
      height: ${vwTablet(40)};
      &:active ~ .form-label,
      &:focus ~ .form-label {
        font-size: ${vwTablet(12)};
        letter-spacing: ${vwTablet(0.8)};
      }
    }
  }
  @media ${media.desktop} {
    margin-bottom: ${vwDesktop(40)};
    label {
      top: ${(props) => (props.value ? '-20%' : '50%')};
    }
    input {
      height: ${vwDesktop(50)};
      &:active ~ .form-label,
      &:focus ~ .form-label {
        top: -20%;
        font-size: ${vwDesktop(14)};
        letter-spacing: ${vwDesktop(1)};
      }
    }
  }
`;

export default Input;
