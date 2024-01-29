import axios from 'axios'
import React from 'react'

export const GET_ALL_ORDERS='GET_ALL_ORDERS'

async function getOrders(dispatch) {
 const {data:orders}= await axios.get('http://localhost:4000/api/orders')
dispatch({
    type:GET_ALL_ORDERS,
    payload:orders

})
  
}

export default getOrders
