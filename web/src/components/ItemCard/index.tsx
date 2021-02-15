import React from 'react';
import { useDispatch } from 'react-redux';
import CartAction from '../../store/cart/actionTypes';
import {Card, Column, Image, Row, Name, Price, Description, Button, ButtonIcon, ButtonText} from './styles';
import {IItem} from './types';

const ItemCard = ({id, name, description, price, image} : IItem) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: CartAction.Add,
      payload: {
        id: id
      }
    });
  }

  return (
    <Card>
      <Column>
        <Image src={image} />
        <Row>
          <Name>{name}</Name>
          <Price>{new Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL',
              maximumFractionDigits: 0
            }).format(price).replace(/\s/g, '')}</Price>
        </Row>

        <Description>{description}</Description>
      </Column>

      <Button onClick={handleClick}>
        <ButtonIcon src={'/media/basket.svg'} />
        <ButtonText>comprar</ButtonText>
      </Button>
    </Card>
  )
}

export default ItemCard;