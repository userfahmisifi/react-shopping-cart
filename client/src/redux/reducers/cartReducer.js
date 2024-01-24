import { ADD_CART_Items, DELETE_CART_ITEM, GET_CART_Items, INCREMENT_QTY } from "../actions/cartActions";


function cartReducer(state=[],action) {
    
    if(action.type===ADD_CART_Items){
        return [...state,action.payload]
    }

    if(action.type===GET_CART_Items){
        return action.payload
    }

    if(action.type===INCREMENT_QTY){
        return action.payload
    }
    
    if(action.type===DELETE_CART_ITEM){
        return action.payload
    }

    return state
  
}

export default cartReducer