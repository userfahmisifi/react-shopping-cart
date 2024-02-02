import axios from 'axios'

export const GET_ALL_ORDERS='GET_ALL_ORDERS'
export const SET_ORDER='SET_ORDER'

async function getOrders(dispatch) {
 const {data:orders}= await axios.get(`/api/orders`)
dispatch({
    type:GET_ALL_ORDERS,
    payload:orders

})
  
}


//order action 
export function setOrder(order){
    return {
        type:SET_ORDER,
        payload:order
    }
}

export default getOrders
