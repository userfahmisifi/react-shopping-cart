import { FILTER_PRODUCTS, GET_PRODUCTS, SET_PRODUCT} from "../actions/productsActions"
const initState={
    product:{},
    products:[]

}
function productsReducer(state=initState,action) {
    
    if(action.type===GET_PRODUCTS){
        return {...state,products:action.payload}
    }
    if(action.type===SET_PRODUCT){
        return {...state,product:action.payload}
    }
    else if(action.type===FILTER_PRODUCTS){
        return {...state,products:action.payload}
    }
   

    return state
}

export default productsReducer


