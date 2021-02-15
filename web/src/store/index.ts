import {
  combineReducers, 
  createStore
} from 'redux';
import cartReducer from './cart/reducer';

const store = createStore(combineReducers({
  cart: cartReducer,
}));

export default store;