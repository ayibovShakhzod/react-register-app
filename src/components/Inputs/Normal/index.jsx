import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Input,
  Label,
  Helper
} from './style';

const NoramlInput = ({
  placeholder,
  disabled,
  size,
  helperText,
  label,
  type,
  ...others
}) => (
  <Container>
    <Label disabled={disabled} type={type} size={size}>
      {label}
    </Label>
    <Input
      type={type}
      disabled={disabled}
      size={size}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...others}
      placeholder={placeholder}
    />
    <Helper type={type} size={size}>
      {helperText}
    </Helper>
  </Container>
);

NoramlInput.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string
};

NoramlInput.defaultProps = {
  label: '',
  size: 'medium'
};

export default NoramlInput;
