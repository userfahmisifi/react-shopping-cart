import React,{useEffect} from 'react'
import '../../css/OrdersTable/OrdersTable.css'
function OrdersTable() {
 useEffect(()=>{

 },[])
 
  return (
    <table>
      <thead>
        <tr>
          <th>orderId</th>
          <th>name</th>
          <th>email</th>
          <th>items</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
       
      </tbody>
    </table>
  )
}

export default OrdersTable
