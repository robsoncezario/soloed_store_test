import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import {Spacer} from './styles';

const Placeholder = () => {
  return (
    <>
      {Array.from(Array(8).keys()).map(i => (
        <Spacer key={i + '-skeleton'}>
          <Skeleton width={218} height={285} variant='rect' style={{borderRadius: 8}}/>
        </Spacer>
      ))}
    </>
  )
}

export default Placeholder;