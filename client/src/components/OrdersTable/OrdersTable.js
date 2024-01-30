import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/OrdersTable/OrdersTable.css";
import getOrders from "../../redux/actions/ordersActions";
function OrdersTable() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  useEffect(() => {
    getOrders(dispatch);
  }, []);

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
        {orders.length>0 && orders.map((order) => {
          return (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.items.map(item=><p key={item._id}>{item.product.title},qty:{item.qty}</p>)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default OrdersTable;
