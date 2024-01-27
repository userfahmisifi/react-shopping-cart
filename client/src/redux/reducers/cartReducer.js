import { ADD_CART_Items, CLEAR_CART_Items, DELETE_CART_ITEM, GET_CART_Items, INCREMENT_QTY } from "../actions/cartActions";


function cartReducer(state=[],action) {
    const types=[GET_CART_Items,INCREMENT_QTY,DELETE_CART_ITEM,CLEAR_CART_Items]
    
    if(action.type===ADD_CART_Items){
        return [...state,action.payload]
    }
    if(types.indexOf(action.type)!==-1){
        return action.payload
    }

    return state
  
}

export default cartReducer