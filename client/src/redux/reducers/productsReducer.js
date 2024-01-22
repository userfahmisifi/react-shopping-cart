import { FILTER_PRODUCTS, GET_PRODUCTS} from "../actions/productsActions"

function productsReducer(state=[],action) {
    
    if(action.type===GET_PRODUCTS){
        return action.payload
    }
    else if(action.type===FILTER_PRODUCTS){
        return action.payload
    }
   

    return state
}

export default productsReducer
