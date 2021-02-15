import CartAction from './actionTypes';

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case CartAction.Add: 
      const item = state.items.find((i: any) => i.id === action.payload.id);

      if(item) {
        return {
          ...state, 
          items: state.items.map((i: any) => {
            if(i.id === action.payload.id) {
              i.value = i.value + 1;
            }

            return i;
          })
        }
      } else {
        return {
          ...state, 
          items: [...state.items ?? [], {
            ...action.payload, 
            value: 1
          }]
        }
      }
    case CartAction.Remove: 
      return {
        ...state, 
        items: state.items.map((i: any) => {
          if(i.id === action.payload.id) {
            i.value = i.value - 1;
          }

          return i;
        }).filter((i: any) => i.value >= 1)
      }
    case CartAction.Delete: 
      return {
        ...state, 
        items: state.items.filter((i: any) => i?.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default cartReducer;
