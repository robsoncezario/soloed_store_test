import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import ItemService from '../../services/ItemService/item';
import CartFooter from '../CartFooter';
import ItemRow from '../ItemRow';
import { Container, Row, Title, CloseButton, Column, Padding } from './styles';
import { ICustomDrawer } from './types';

const CustomDrawer = ({onClose} : ICustomDrawer) => {
  const [ready, setAsReady] = useState(false);
  const cartItems = useSelector((state: any) => state.cart.items);
  const [items, setItems] = useState<any>([]);
  
  const onMount = () => {
    (async () => {
      const response = await ItemService.getMany(cartItems);
      const {products} = response.data;

      console.log(products);

      setItems(products);
      setAsReady(true);
    })()
  }

  useEffect(onMount, []);

  const list = items
    .filter((item: any) => cartItems?.find((i: any) => i.id === item.id)?.value >= 1)
    .map((item: any) => ({
      ...item, 
      value: cartItems?.find((i: any) => i.id === item.id)?.value
    }));
  const total = list.reduce((accumulator: number, item: any) => {
      return accumulator + (item.price * item.value);
    }, 0);

  return (
    <Container>
      <Padding>
        <Row>
          <Title>Carrinho de compras</Title>
          <CloseButton onClick={onClose}>X</CloseButton>
        </Row>

        <Column>
          {ready && (
            list.map((item: any) => 
              <ItemRow 
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.short_description}
                price={item.price}
                image={item.image}
                value={item.value}
              />
            )
          )}
        </Column>
      </Padding>

      <CartFooter total={total} /> 
    </Container>
  )
}

export default CustomDrawer;