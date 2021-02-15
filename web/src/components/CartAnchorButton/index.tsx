import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Button, Icon, Count } from './styles';
import Drawer from '@material-ui/core/Drawer';
import CustomDrawer from '../CustomDrawer';

const CartAnchorButton = () => {
  const items = useSelector((state: any) => state.cart.items);
  const [open, setAsOpen] = useState(false);

  const count = items.reduce((accumulator: number, item: any) => {
    return accumulator + item.value;
  }, 0)

  const handleOpen = () => {
    setAsOpen(true);
  }

  const handleClose = () => {
    setAsOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>
        <Icon src={'/media/cart.svg'} />
        <Count>{count}</Count>
      </Button>

      <Drawer anchor={'right'} open={open} onClose={handleClose}>
        {open && (
          <CustomDrawer onClose={handleClose} />
        )}
      </Drawer>
    </>
  )
}

export default CartAnchorButton;