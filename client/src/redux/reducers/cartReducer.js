import {
  ADD_CART_Items,
  CLEAR_CART_Items,
  DELETE_CART_ITEM,
  GET_CART_Items,
  INCREMENT_QTY,
  
} from "../actions/cartActions";

const initState = {items: [] };
function cartReducer(state =initState, action) {
  const types = [
    GET_CART_Items,
    INCREMENT_QTY,
    DELETE_CART_ITEM,
    CLEAR_CART_Items,
  ];
  
  if (action.type === ADD_CART_Items) {
    return {
      ...state,
      items: [...state.items, action.payload],
      
    };
  }
  if (types.indexOf(action.type) !== -1) {
    return {
        ...state,
        items:action.payload,
      };
  }

  return state;
}

export default cartReducer;
