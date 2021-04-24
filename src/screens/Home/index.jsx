import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Title,
  ArrowRightIcon,
  Name,
  Info
} from './style';
import { PrimaryButton } from '../../components/Buttons';
import Nav from '../../components/Nav';

export default () => {
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <>
      <Nav user={user} />
      <Container>
        <Title>
          Welcome to
          {user && (
            <>
              &nbsp;
              <Name>{user.name}</Name>
            </>
          )}
          <br />
          Register example
        </Title>
        {user ? (
          <>
            <Info>
              <Info.Label>Name: </Info.Label>
              <Info.Text>{user.name}</Info.Text>
            </Info>
            <Info>
              <Info.Label>Email: </Info.Label>
              <Info.Text>{user.email}</Info.Text>
            </Info>
            <Info>
              <Info.Label>Password: </Info.Label>
              <Info.Text>{user.password}</Info.Text>
            </Info>
          </>
        ) : (
          <PrimaryButton
            title='REGISTER NOW'
            size='large'
            Icon={ArrowRightIcon}
            iconAlign='right'
            onClick={() => history.push('/register')}
          />
        )}
      </Container>
    </>
  );
};
