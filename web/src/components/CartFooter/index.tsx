import React from 'react';
import {Container, Row, Text, Button} from './styles';
import { ICartFooter } from './types';

const CartFooter = ({total} : ICartFooter) => {
  return (
    <Container>
      <Row>
        <Text>Total:</Text>
        <Text>{new Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL',
            maximumFractionDigits: 0
          }).format(total).replace(/\s/g, '')}</Text>
      </Row>
      <Button>Finalizar Compra</Button>
    </Container>
  )
}

export default CartFooter;