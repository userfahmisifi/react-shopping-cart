import React from 'react'
import { GET_ALL_ORDERS } from '../actions/ordersActions'

function ordersReducer(state=[],action) {
    if(action.type===GET_ALL_ORDERS){
        return action.payload
    }
    return state
  
}

export default ordersReducer
