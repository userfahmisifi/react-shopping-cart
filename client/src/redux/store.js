import { createStore,combineReducers } from 'redux'
import productsReducer from './reducers/productsReducer'
import cartReducer from './reducers/cartReducer'
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store=createStore(combineReducers({
    products:productsReducer,
    cart:cartReducer
}),enhancer())


export default store 