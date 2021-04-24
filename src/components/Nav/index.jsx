import React from 'react';
import { useHistory } from 'react-router-dom';
import { Nav } from './style';
import { PrimaryButton } from '../Buttons';
import Logo from '../Logo';

export default ({ user }) => {
  const history = useHistory();
  return (
    <Nav>
      <Logo />
      {user ? (
        <PrimaryButton
          title='Logout'
          size='medium'
          onClick={() => history.push('/logout')}
        />
      ) : (
        <PrimaryButton
          title='REGISTER'
          size='medium'
          onClick={() => history.push('/register')}
        />
      )}
    </Nav>
  );
};
