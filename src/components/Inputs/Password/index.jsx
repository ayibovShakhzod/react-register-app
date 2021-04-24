import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Input,
  EyeIcon,
  Wrapper,
  Helper,
  Label
} from './style';

const NoramlInput = ({
  placeholder,
  disabled,
  typePwd,
  size,
  helperText,
  type,
  eye,
  label,
  position,
  ...others
}) => {
  const [see, setSee] = useState(false);
  return (
    <Wrapper type={type}>
      <Label type={type} size={size}>
        {label}
      </Label>
      <Container>
        <Input
          autoComplete='off'
          typePwd={typePwd}
          position={position}
          disabled={disabled}
          type={see ? 'text' : 'password'}
          size={size}
          placeholder={placeholder}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...others}
        />
        <EyeIcon
          seen={see ? 1 : 0}
          eye={eye ? 1 : 0}
          onClick={() => setSee(!see)}
        />
      </Container>
      <Helper type={type} size={size}>
        {helperText}
      </Helper>
    </Wrapper>
  );
};

NoramlInput.propTypes = {
  size: PropTypes.string,
  eye: PropTypes.bool,
  seen: PropTypes.bool
};

NoramlInput.defaultProps = {
  size: 'small',
  eye: false,
  seen: false
};

export default NoramlInput;
