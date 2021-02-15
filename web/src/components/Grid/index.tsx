import React, {useState, useEffect} from 'react';
import ItemService from '../../services/ItemService/item';
import ItemCard from '../ItemCard';
import Placeholder from './placeholder';
import {Container} from './styles';

const Grid = () => {
  const [ready, setAsReady] = useState(false);
  const [items, setItems] = useState<any>();

  const onMount = () => {
    (async () => {
      const response = await ItemService.getAll();
      const {products} = response.data;

      setItems(products);
      setAsReady(true);
    })();
  }

  useEffect(onMount, []);

  return (
    <Container>
      {!ready && <Placeholder />}
      {ready && items.map((item: any) => (
        <ItemCard 
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.short_description}
          price={item.price}
          image={item.image}
         />
      ))}
    </Container>
  )
}

export default Grid;