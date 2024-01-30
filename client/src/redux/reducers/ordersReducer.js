import { GET_ALL_ORDERS, SET_ORDER } from '../actions/ordersActions'

const initState={
    orders:[],
    order:{items:[]}
}
function ordersReducer(state=initState,action) {
    if(action.type===GET_ALL_ORDERS){
        return {
            ...state,orders:action.payload
        }
    }
    else if(action.type===SET_ORDER){
        return {
            ...state,order:action.payload
        }
    }
    return state
  
}

export default ordersReducer
