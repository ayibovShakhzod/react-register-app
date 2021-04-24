import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './style';

const PrimaryButton = ({
  title,
  size,
  Icon,
  iconAlign,
  ...others
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Container className='noselect' size={size} {...others}>
    {iconAlign === 'left' && <Icon />}
    <Title size={size}>{title}</Title>
    {iconAlign === 'right' && <Icon />}
  </Container>
);

PrimaryButton.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string
};

PrimaryButton.defaultProps = {
  title: '',
  size: 'medium'
};

export default PrimaryButton;
