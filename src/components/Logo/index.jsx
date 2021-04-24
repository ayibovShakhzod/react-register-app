import React from 'react';
import { useHistory } from 'react-router-dom';
import { Logo } from './style';

export default () => {
  const history = useHistory();
  return (
    <Logo onClick={() => history.push('/')}>Logo</Logo>
  );
};
