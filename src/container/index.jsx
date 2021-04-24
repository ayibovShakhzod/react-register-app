import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container, Content } from './style';
import Home from '../screens/Home';
import Register from '../screens/Auth/Register';
import Logout from '../screens/Logout';

export default () => (
  <Container>
    <Content>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/logout' component={Logout} />
      </Switch>
    </Content>
  </Container>
);
