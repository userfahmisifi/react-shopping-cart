import { createStore } from 'redux'
import productsReducer from './reducers/productsReducer'
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store=createStore(productsReducer,enhancer())

export default store 