import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SORT_PRODUCTS = "SORT_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";

const baseUrl = "http://localhost:4000/api/products";

export const fetchProducts = async (dispatch) => {
  const { data: products } = await axios.get(`${baseUrl}`);
  products.reverse();

  dispatch({
    type: GET_PRODUCTS,
    payload: products,
  });
};



export const filterProducts = async (dispatch, val1, val2) => {
  let url = `${baseUrl}?sizes=${val1}`;

  if (val2 === "price" || val2 === "-price") {
    url = `${url}&sort=${val2}`;
  }

  const { data } = await axios.get(url);
  if (val2 === "Latest") {
    data.reverse();
  }
  dispatch({
    type: FILTER_PRODUCTS,
    payload: data,
  });
};
