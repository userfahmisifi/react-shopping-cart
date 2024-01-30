import { TOOGLE_ORDER_MODAL, TOOGLE_PRODUCT_MODAL } from "../actions/modalActions";

const initState = { product: false, order: false };


export function modalReducer(state = initState, action) {
  if (action.type === TOOGLE_PRODUCT_MODAL) {
    return {...state,product:!state.product};
  }
  else if(action.type === TOOGLE_ORDER_MODAL){
    return {...state,order:!state.order};

  }

  return state;
}
