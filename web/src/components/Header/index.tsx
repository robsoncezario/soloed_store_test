import React from 'react';
import CartAnchorButton from '../CartAnchorButton';
import { Container, Row, Logo, Subtitle } from './styles';

const Header = () => {
  return (
    <Container>
      <Row>
        <Logo src={'media/logo.svg'} />
        <Subtitle>store</Subtitle>
      </Row>
      
      <CartAnchorButton />
    </Container>
  )
}

export default Header;

