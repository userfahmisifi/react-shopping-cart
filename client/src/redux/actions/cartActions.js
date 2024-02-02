import axios from "axios";
export const GET_CART_Items = "GET_CART_Items";
export const ADD_CART_Items = "ADD_CART_Items";
export const CLEAR_CART_Items = "CLEAR_CART_Items";
export const INCREMENT_QTY = "INCREMENT_QTY";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";



export const addCartItems = async (dispatch, item) => {
 
    const { data } = await axios.post(`/api/cart`, item);

    dispatch({
      type: ADD_CART_Items,
      payload: data,
    });
 
};

export const incrementQuantity = async (dispatch, itemsInCart, index) => {
  let items = [...itemsInCart];
  let { _id: id } = items[index];

  await axios.patch(`/api/cart/${id}`, {
    qty: items[index].qty + 1,
  });

  items[index].qty += 1;

  dispatch({
    type: INCREMENT_QTY,
    payload: items,
  });
};

export const getCartItems = async (dispatch) => {
  const { data } = await axios.get(`/api/cart`);
  dispatch({
    type: GET_CART_Items,
    payload: data,
  });
};

export const removeItemFromCart = async (dispatch, id, itemsInCart) => {
  await axios.delete(`/api/cart/${id}`);
  let items = [...itemsInCart];
  items = items.filter((p) => p._id !== id);

  dispatch({
    type: DELETE_CART_ITEM,
    payload: items,
  });
};

export const clearCartItems = async (dispatch) => {
  await axios.delete(`/api/cart`);
  dispatch({
    type: CLEAR_CART_Items,
    payload: [],
  });
};
