import { createStore,combineReducers } from 'redux'
import productsReducer from './reducers/productsReducer'
import cartReducer from './reducers/cartReducer'
import ordersReducer from './reducers/ordersReducer'
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store=createStore(combineReducers({
    products:productsReducer,
    cart:cartReducer,
    orders:ordersReducer
}),enhancer())


export default store 