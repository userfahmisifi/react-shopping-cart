import { createStore,combineReducers } from 'redux'
import productsReducer from './reducers/productsReducer'
import cartReducer from './reducers/cartReducer'
import ordersReducer from './reducers/ordersReducer'
import {orderFormReducer} from './reducers/orderFormReducer'
import { modalReducer } from './reducers/modalReducer'
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store=createStore(combineReducers({
    products:productsReducer,
    cart:cartReducer,
    orders:ordersReducer,
    orderForm:orderFormReducer,
    modal:modalReducer
}),enhancer())


export default store 