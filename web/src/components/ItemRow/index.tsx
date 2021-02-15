import React from 'react';
import { useDispatch } from 'react-redux';
import CartAction from '../../store/cart/actionTypes';
import { IItem } from '../ItemCard/types';
import {Container, Image, Name, CounterContainer, Counter, Price, RemoveButton } from './styles';

const ItemRow = ({id, name, price, image, value} : IItem) => {
  const dispatch = useDispatch();
  
  const addItem = () => {
    dispatch({
      type: CartAction.Add,
      payload: {
        id: id
      }
    });
  }

  const removeItem = () => {
    dispatch({
      type: CartAction.Remove,
      payload: {
        id: id
      }
    });
  }

  const deleteItem = () => {
    dispatch({
      type: CartAction.Delete,
      payload: {
        id: id
      }
    });
  }

  return (
    <Container>
      <Image src={image} />
      <Name>{name}</Name>
      <CounterContainer>
        <div className='label'>Qtd:</div>
        <Counter>
          <div className='item' onClick={removeItem}>-</div>
          <div className='item'>{value}</div>
          <div className='item' onClick={addItem}>+</div>
        </Counter>
      </CounterContainer>

      <Price>{new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL',
        maximumFractionDigits: 0
      }).format(price * (value ?? 1)).replace(/\s/g, '')}</Price>

      <RemoveButton onClick={deleteItem}>x</RemoveButton>
    </Container>
  )
}

export default ItemRow;