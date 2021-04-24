import React from 'react';
import { Container, Item, Title } from './style';
import Form from './Form';
import img from '../../../assets/img/register.jpg';
import Logo from '../../../components/Logo';

export default () => (
  <Container>
    <Item>
      <Logo />
      <Item.Img src={img} />
    </Item>
    <Item>
      <Item.Form>
        <Title>Register in to Logo</Title>
        <Form />
      </Item.Form>
    </Item>
  </Container>
);
